pragma solidity ^0.5.0;

import "@ensdomains/ethregistrar/contracts/BaseRegistrar.sol";
import "@ensdomains/ens/contracts/ENS.sol";
// import "@ensdomains/ens-contracts/contracts/registry/ENS.sol";
// import "@ensdomains/ens-contracts/contracts/ethregistrar/BaseRegistrar.sol";
import "./Resolver.sol";
import "./RegistrarInterface.sol";

contract SubdomainStorage {
  // namehash('one')
  bytes32
    public constant TLD_NODE = 0x30f9ae3b1c4766476d11e2bacd21f9dff2c59670d8b8a74a88ebc22aec7020b9;

  uint256 public GRACE_PERIOD = 90 days;

  address registrarOwner;

  event ControllerAdded(address indexed controller);
  event ControllerRemoved(address indexed controller);

  // A map of expiry times
  mapping(uint256 => uint256) expiries;
  // mapping for token URIs
  mapping(uint256 => string) private _tokenURIs;

  event NameRegistered(uint256 indexed id, uint256 expires, string url);
  event NameRenewed(uint256 indexed id, uint256 expires);

  constructor() public {
    registrarOwner = msg.sender;
  }

  // A map of addresses that are authorised to register and renew names.
  mapping(address => bool) public controllers;

  // Authorises a controller, who can register and renew domains.
  function addController(address controller) external registrar_owner_only {
    controllers[controller] = true;
    emit ControllerAdded(controller);
  }

  // Revoke controller permission for an address.
  function removeController(address controller) external registrar_owner_only {
    controllers[controller] = false;
    emit ControllerRemoved(controller);
  }

  modifier onlyController {
    require(controllers[msg.sender]);
    _;
  }

  modifier registrar_owner_only() {
    require(msg.sender == registrarOwner);
    _;
  }

  // Returns the expiration timestamp of the specified id.
  function nameExpires(uint256 id) public view returns (uint256) {
    return expiries[id];
  }

  // Returns true iff the specified name is available for registration.
  function available(uint256 id) public view returns (bool) {
    // Not available if it's registered here or in its grace period.
    return expiries[id] + GRACE_PERIOD < now;
  }

  function notExpire(uint256 id) public view returns (bool) {
    return expiries[id] > now;
  }

  function twitter(bytes32 node) public view returns (string memory) {
    uint256 tokenId = uint256(node);

    string memory _twitterURI = _tokenURIs[tokenId];

    return _twitterURI;
  }

  function _setTwitterURI(bytes32 node, string calldata _tokenURI)
    external
    onlyController
  {
    uint256 tokenId = uint256(node);

    require(notExpire(tokenId));

    _tokenURIs[tokenId] = _tokenURI;
  }

  function doRegistration(
    uint256 tokenId,
    uint256 duration,
    string calldata _tokenURI
  ) external onlyController returns (uint256) {
    require(available(tokenId));
    require(now + duration + GRACE_PERIOD > now + GRACE_PERIOD); // Prevent future overflow

    expiries[tokenId] = now + duration;
    _tokenURIs[tokenId] = _tokenURI;

    emit NameRegistered(tokenId, expiries[tokenId], _tokenURI);

    return expiries[tokenId];
  }

  function renew(bytes32 node, uint256 duration)
    external
    onlyController
    returns (uint256 expire)
  {
    uint256 tokenId = uint256(node);

    expiries[tokenId] = expiries[tokenId] + duration;

    emit NameRenewed(tokenId, expiries[tokenId]);

    return expiries[tokenId];
  }

  function setGracePeriod(uint256 duration) public registrar_owner_only {
    GRACE_PERIOD = duration;
  }

  function transferOwnership(address newOwner) public registrar_owner_only {
    registrarOwner = newOwner;
  }
}
