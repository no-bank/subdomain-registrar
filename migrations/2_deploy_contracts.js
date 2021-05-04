const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");

const StablePriceOracle = artifacts.require('@ensdomains/ethregistrar/StablePriceOracle');
const DummyOracle = artifacts.require('@ensdomains/ethregistrar/DummyOracle');

const ETHRegistrarController = artifacts.require('@ensdomains/ethregistrar/ETHRegistrarController');
const PublicResolver = artifacts.require('@ensdomains/resolver/PublicResolver');
const BaseRegistrarImplementation = artifacts.require('@ensdomains/ethregistrar/BaseRegistrarImplementation');
const ReverseRegistrar = artifacts.require('@ensdomains/ens/ReverseRegistrar');
const Root = artifacts.require('@ensdomains/root/Root');
const DefaultReverseResolver = artifacts.require('@ensdomains/resolver/DefaultReverseResolver');
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
const SubdomainStorage = artifacts.require("SubdomainStorage");

const utils = require('web3-utils');
const namehash = require('eth-ens-namehash');


const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const tld = "one";
const ETH_LABEL = utils.sha3(tld);
const ETH_NODE = namehash.hash(tld);

const MIN_COMMITMENT_AGE = 60;
const MAX_COMMITMENT_AGE = 86400;

const sleep = (sec) => new Promise(resolve => setTimeout(resolve, 1000 * sec))

module.exports = async function(deployer, network, accounts) {
    return await deploy(deployer, network, accounts);
};

async function deploy(deployer, network, accounts) {
    await deployer.deploy(ENS);
    const ens = await ENS.deployed();

    await deployer.deploy(PublicResolver, ens.address);
    const ownedResolver = await PublicResolver.deployed();

    // Deploy and activate the .eth registrar
    await deployer.deploy(BaseRegistrarImplementation, ens.address, ETH_NODE, {from: accounts[0]});
    const registrar = await BaseRegistrarImplementation.deployed();

    await ens.setSubnodeRecord(ZERO_ADDRESS, ETH_LABEL, registrar.address, ownedResolver.address, 0, {from: accounts[0]});

    await ens.setSubnodeOwner("0x0000000000000000000000000000000000000000", utils.sha3(tld), registrar.address);

    console.log("Start: Set resolver.one address for main Resolver");

    console.log("End: Set resolver.one address for main Resolver");

    await deployer.deploy(DummyOracle, utils.toBN(100000000000000));
    const dummyOracle = await DummyOracle.deployed();

    await deployer.deploy(StablePriceOracle, dummyOracle.address, generatePricesArray());
    const priceOracle = await StablePriceOracle.deployed();

    await deployer.deploy(SubdomainStorage, {from: accounts[0]});
    const subdomainStorage = await SubdomainStorage.deployed();

    await deployer.deploy(SubdomainRegistrar, ens.address, priceOracle.address, subdomainStorage.address, {from: accounts[0]});
    const subdomainRegistrar = await SubdomainRegistrar.deployed();

    await subdomainStorage.addController(subdomainRegistrar.address, {from: accounts[0]});

    await registerCoreDomains(ens, registrar, ownedResolver, subdomainRegistrar, accounts, network);

    await deployer.deploy(
        ETHRegistrarController,
        BaseRegistrarImplementation.address,
        priceOracle.address, MIN_COMMITMENT_AGE, MAX_COMMITMENT_AGE,
        {from: accounts[0]}
    );

    const ethRegistrarController = await ETHRegistrarController.deployed();

    // ownedResolver.transferOwnership(ethRegistrarController.address, {from: accounts[0]});
    await registrar.addController(ethRegistrarController.address, {from: accounts[0]});
    await registrar.addController(subdomainRegistrar.address, {from: accounts[0]});

    // await ownedResolver.transferOwnership(ethRegistrarController.address, {from: accounts[0]});

    // Deploy and activate the reverse registrar
    await deployer.deploy(DefaultReverseResolver, ens.address, {from: accounts[0], gas: 1000000});
    await deployer.deploy(ReverseRegistrar, ens.address, DefaultReverseResolver.address, {from: accounts[0], gas: 1000000});
    await ens.setSubnodeOwner(ZERO_ADDRESS, utils.sha3("reverse"), accounts[0], {from: accounts[0]});
    await ens.setSubnodeOwner(namehash.hash("reverse"), utils.sha3("addr"), ReverseRegistrar.address, {from: accounts[0]});
    await ens.setOwner(namehash.hash("reverse"), ZERO_ADDRESS, {from: accounts[0]});

    // configure Root contract

    await deployer.deploy(Root, ens.address, {from: accounts[0]});
    const root = await Root.deployed();
    await ens.setOwner(ZERO_ADDRESS, Root.address, {from: accounts[0]});

    const ownerAddress = accounts[0];

    // Transfer ownership of the root to the required account
    await root.setController(ownerAddress, true, {from: accounts[0]});
    await root.transferOwnership(ownerAddress, {from: accounts[0]});
};

function generatePricesArray() {
    const minPriceForSec = utils.toBN(31709791983764588); // magic number
    const charLen = 9;

    return [...[...new Array(charLen)].map((i,idx) =>
        minPriceForSec.mul(utils.toBN("1" + [...new Array(charLen + 1 - idx)].join('0')))
    ), minPriceForSec];
}

async function registerCoreDomains(ens, registrar, ownedResolver, subdomainRegistrar, accounts, network) {
    // Set address for owned resolver
    await registrar.addController(accounts[0], {from: accounts[0]});

    const WAIT_TIMEOUT = network === 'local' ? 0 : 5;

    console.log('registrar addController accounts[0]');
    await sleep(WAIT_TIMEOUT);

    await registrar.register(utils.sha3('resolver'), accounts[0], 315360000, {from: accounts[0]});

    console.log('register resolver');
    await sleep(WAIT_TIMEOUT);

    await ens.setResolver(namehash.hash('resolver.one'), ownedResolver.address, {from: accounts[0]});

    console.log('ens.setResolver resolver.one');
    await sleep(WAIT_TIMEOUT);

    await ownedResolver.setAddr(namehash.hash("resolver.one"), ownedResolver.address);

    console.log('ownedResolver.setAddr resolver.one');
    await sleep(WAIT_TIMEOUT);

    await registrar.register(utils.sha3('crazy'), accounts[0], 315360000, {from: accounts[0]});

    console.log('registrar.register crazy');
    await sleep(WAIT_TIMEOUT);

    await ens.setResolver(namehash.hash('crazy.one'), ownedResolver.address, {from: accounts[0]});

    console.log('ens.setResolver crazy.one');
    await sleep(WAIT_TIMEOUT);

    await ownedResolver.setAddr(namehash.hash("crazy.one"), subdomainRegistrar.address);

    console.log('ownedResolver.setAddr crazy.one');
    await sleep(WAIT_TIMEOUT);

    registrar.approve(subdomainRegistrar.address, utils.sha3('crazy'));

    console.log('registrar.approve crazy');
    await sleep(WAIT_TIMEOUT);

    // registrar.reclaim(utils.sha3('crazy'), subdomainRegistrar.address);
    //
    // console.log('registrar.reclaim crazy');
    // await sleep(WAIT_TIMEOUT);
    //
    // registrar.transferFrom(accounts[0], subdomainRegistrar.address, utils.sha3('crazy'));
    //
    // console.log('registrar.transferFrom crazy');
    // await sleep(WAIT_TIMEOUT);

    await registrar.removeController(accounts[0], {from: accounts[0]});

    console.log('registrar.removeController accounts[0]');
    await sleep(WAIT_TIMEOUT);
}
