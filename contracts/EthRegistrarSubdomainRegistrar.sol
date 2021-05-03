pragma solidity ^0.5.0;

import "./AbstractSubdomainRegistrar.sol";
import "@ensdomains/ethregistrar/contracts/PriceOracle.sol";

/**
 * @dev Implements an ENS registrar that sells subdomains on behalf of their owners.
 *
 * Users may register a subdomain by calling `register` with the name of the domain
 * they wish to register under, and the label hash of the subdomain they want to
 * register. They must also specify the new owner of the domain, and the referrer,
 * who is paid an optional finder's fee. The registrar then configures a simple
 * default resolver, which resolves `addr` lookups to the new owner, and sets
 * the `owner` account as the owner of the subdomain in ENS.
 *
 * New domains may be added by calling `configureDomain`, then transferring
 * ownership in the ENS registry to this contract. Ownership in the contract
 * may be transferred using `transfer`, and a domain may be unlisted for sale
 * using `unlistDomain`. There is (deliberately) no way to recover ownership
 * in ENS once the name is transferred to this registrar.
 *
 * Critically, this contract does not check one key property of a listed domain:
 *
 * - Is the name UTS46 normalised?
 *
 * User applications MUST check these two elements for each domain before
 * offering them to users for registration.
 *
 * Applications should additionally check that the domains they are offering to
 * register are controlled by this registrar, since calls to `register` will
 * fail if this is not the case.
 */
contract EthRegistrarSubdomainRegistrar is AbstractSubdomainRegistrar {

    struct Domain {
        string name;
        address payable owner;
        address payable referralAddress;
        uint price;
        uint referralFeePPM;
        uint minDuration;
    }

    event NewPriceOracle(address indexed oracle);
    event NameRenewed(bytes32 indexed label, string subdomain, uint cost, uint expires);

    mapping (bytes32 => Domain) domains;

    PriceOracle prices;

    constructor(ENS ens, PriceOracle _prices, BaseRegistrar _base) AbstractSubdomainRegistrar(ens, _base) public {
        prices = _prices;
    }

    function setPriceOracle(PriceOracle _prices) public registrar_owner_only {
        prices = _prices;
        emit NewPriceOracle(address(prices));
    }

    function rentPrice(string memory name, uint duration) view public returns(uint) {
        bytes32 hash = keccak256(bytes(name));
        return prices.price(name, nameExpires(uint256(hash)), duration);
    }

    function renew(bytes32 label, string calldata subdomain, uint duration) external payable {
        bytes32 domainNode = keccak256(abi.encodePacked(TLD_NODE, label));
        bytes32 subdomainLabel = keccak256(bytes(subdomain));

        require(ens.owner(keccak256(abi.encodePacked(domainNode, subdomainLabel))) == msg.sender);

        Domain storage domain = domains[label];

        uint cost = prices.price(subdomain, nameExpires(uint256(subdomainLabel)), duration);

        require(msg.value >= cost);

        uint expires = _renew(domainNode, subdomainLabel, duration);

        if(msg.value > cost) {
            msg.sender.transfer(msg.value - cost);
        }

        if (cost > 0) {
            domain.referralAddress.transfer(cost);
        }

        emit NameRenewed(label, subdomain, cost, expires);
    }

    /**
     * @dev owner returns the address of the account that controls a domain.
     *      Initially this is a null address. If the name has been
     *      transferred to this contract, then the internal mapping is consulted
     *      to determine who controls it. If the owner is not set,
     *      the owner of the domain in the Registrar is returned.
     * @param name The name string of the deed to check.
     * @return The address owning the deed.
     */
    function owner(string memory name) public view returns (address) {
        bytes32 label = keccak256(bytes(name));
        bytes32 node = keccak256(abi.encodePacked(TLD_NODE, label));

        if (domains[label].owner != address(0x0)) {
            return domains[label].owner;
        }

        return ens.owner(node);
    }

    function referralAddress(string memory name) public view returns (address) {
        bytes32 label = keccak256(bytes(name));

        return domains[label].referralAddress;
    }

    /**
     * @dev Transfers internal control of a name to a new account. Does not update
     *      ENS.
     * @param name The name to transfer.
     * @param newOwner The address of the new owner.
     */
    function transfer(string memory name, address payable newOwner) public owner_only(name) {
        bytes32 label = keccak256(bytes(name));
        emit OwnerChanged(label, domains[label].owner, newOwner);
        domains[label].owner = newOwner;
    }

    /**
     * @dev Configures a domain, optionally transferring it to a new owner.
     * @param name The name to configure.
     * @param price The price in wei to charge for subdomain registrations.
     * @param referralAddress The referral fee to offer, in parts per million.
     * @param _owner The address to assign ownership of this domain to.
     * @param _transfer The address to set as the transfer address for the name
     *        when the permanent registrar is replaced. Can only be set to a non-zero
     *        value once.
     */
    function configureDomainFor(string memory name, uint price, address payable referralAddress, address payable _owner, address _transfer) public owner_only(name) {
        bytes32 label = keccak256(bytes(name));
        Domain storage domain = domains[label];

        if (base.ownerOf(uint256(label)) != address(this)) {
            base.reclaim(uint256(label), address(this));
            base.transferFrom(msg.sender, address(this), uint256(label));
        }

        if (domain.owner != _owner) {
            domain.owner = _owner;
        }

        if (keccak256(bytes(domain.name)) != label) {
            // New listing
            domain.name = name;
        }

        domain.price = price;
        domain.referralFeePPM = 0;
        domain.referralAddress = referralAddress;
        domain.minDuration = 31536000;

        emit DomainConfigured(label);
    }

    /**
     * @dev Unlists a domain
     * May only be called by the owner.
     * @param name The name of the domain to unlist.
     */
    function unlistDomain(string memory name) public owner_only(name) {
        bytes32 label = keccak256(bytes(name));
        Domain storage domain = domains[label];
        emit DomainUnlisted(label);

        domain.name = '';
        domain.price = 0;
        domain.referralFeePPM = 0;
    }

    /**
     * @dev Returns information about a subdomain.
     * @param label The label hash for the domain.
     * @param subdomain The label for the subdomain.
     * @return domain The name of the domain, or an empty string if the subdomain
     *                is unavailable.
     * @return price The price to register a subdomain, in wei.
     * @return rent The rent to retain a subdomain, in wei per second.
     * @return referralFeePPM The referral fee for the dapp, in ppm.
     */
    function query(bytes32 label, string calldata subdomain) external view returns (string memory domain, uint price, uint rent, address referralAddress) {
        bytes32 node = keccak256(abi.encodePacked(TLD_NODE, label));
        bytes32 subnode = keccak256(abi.encodePacked(node, keccak256(bytes(subdomain))));

        if (ens.owner(subnode) != address(0x0)) {
            return ('', 0, 0, address(0x0));
        }

        Domain storage data = domains[label];
        return (data.name, data.price, 0, data.referralAddress);
    }

    /**
     * @dev Registers a subdomain.
     * @param label The label hash of the domain to register a subdomain of.
     * @param subdomain The desired subdomain label.
     * @param _subdomainOwner The account that should own the newly configured subdomain.
     */
    function register(bytes32 label, string calldata subdomain, address _subdomainOwner, uint duration, string calldata url, address resolver) external not_stopped payable {
        address subdomainOwner = _subdomainOwner;
        bytes32 domainNode = keccak256(abi.encodePacked(TLD_NODE, label));
        bytes32 subdomainLabel = keccak256(bytes(subdomain));

        Domain storage domain = domains[label];

        require(duration >= domain.minDuration);

        uint price = prices.price(subdomain, nameExpires(uint256(subdomainLabel)), duration);

        // Domain must be available for registration
        require(keccak256(bytes(domain.name)) == label);

        // User must have paid enough
        require(msg.value >= price);

        // Send any extra back
        if (msg.value > price) {
            msg.sender.transfer(msg.value - price);
        }

        // Register the domain
        if (subdomainOwner == address(0x0)) {
            subdomainOwner = msg.sender;
        }

        doRegistration(domainNode, subdomainLabel, duration, url, subdomainOwner, Resolver(resolver));

        // Send the registration fee
        if (price > 0) {
            domain.referralAddress.transfer(price);
        }

        emit NewRegistration(label, subdomain, subdomainOwner, price);
    }

    function rentDue(bytes32 label, string calldata subdomain) external view returns (uint timestamp) {
        return 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    }

    /**
     * @dev Migrates the domain to a new registrar.
     * @param name The name of the domain to migrate.
     */
    function migrate(string memory name) public owner_only(name) {
        require(stopped);
        require(migration != address(0x0));

        bytes32 label = keccak256(bytes(name));
        Domain storage domain = domains[label];

        BaseRegistrar(registrar).approve(migration, uint256(label));

        EthRegistrarSubdomainRegistrar(migration).configureDomainFor(
            domain.name,
            domain.price,
            domain.referralAddress,
            domain.owner,
            address(0x0)
        );

        delete domains[label];

        emit DomainTransferred(label, name);
    }

    function payRent(bytes32 label, string calldata subdomain) external payable {
        revert();
    }
}
