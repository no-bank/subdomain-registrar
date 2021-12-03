const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");
const namehash = require("eth-ens-namehash");
const utils = require("web3-utils");
const BaseRegistrarImplementation = artifacts.require(
  "@ensdomains/ethregistrar/BaseRegistrarImplementation"
);
const ETHRegistrarController = artifacts.require(
  "@ensdomains/ethregistrar/ETHRegistrarController"
);
const PublicResolver = artifacts.require("@ensdomains/resolver/PublicResolver");
const sleep = (sec) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * sec));

const StablePriceOracle = artifacts.require(
  "@ensdomains/ethregistrar/StablePriceOracle"
);
const DummyOracle = artifacts.require("@ensdomains/ethregistrar/DummyOracle");
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
const SubdomainStorage = artifacts.require("SubdomainStorage");

function generatePricesArray() {
  const minPriceForSec = utils.toBN(5000000000000000); // magic number
  const charLen = 9;

  var data = [];
  data.push(minPriceForSec);
  for (var i = 0; i < charLen; i++) {
    data.push(data[i].mul(utils.toBN(2)));
  }
  return data.reverse();
}

// need ENS registry
// need domain controller
module.exports = async function (deployer, network, accounts) {
  const tld = "one";
  const ETH_LABEL = utils.sha3(tld);
  const ETH_NODE = namehash.hash(tld);
  // var duration = 100000000;
  var duration = 31536000;
  var secret = utils.sha3("TempSecret123");
  var name = "nobanktest";
  var SEF_NODE = namehash.hash("nobanktest.one");
  const SEF_LABEL = utils.sha3("nobanktest");

  // var ensAddress = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7"; // mainnet ENS.address;
  // var controllerAddress = "0xbed36523cc78c8093cd0e4a6730e4c60bdc48b05"; // mainnet ETHRegistrarController.address;

  var ensAddress = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de"; // testnet ENS.address;
  var controllerAddress = "0x82ee6596D7E30d384AF9F7A0552fCa55adD7A008"; // testnet ETHRegistrarController.address;

  var ens = await ENS.at(ensAddress);
  var baseAddress = await ens.owner(ETH_NODE);
  var resolver_address = await ens.resolver(namehash.hash("crazy.one"));

  console.log("NETWORK", network);
  console.log("registry", ensAddress);
  console.log("Base Address", baseAddress);
  console.log("Public Resolver", resolver_address);
  console.log("Controller at address=", controllerAddress);

  console.log("accounts[0] address=", accounts[0]);
  console.log("accounts[0] balance=", await web3.eth.getBalance(accounts[0]));
  console.log("SEF_NODE=", SEF_NODE);

  // create subdomainregistrar
  await deployer.deploy(DummyOracle, utils.toBN(100000000000000));
  const dummyOracle = await DummyOracle.deployed();

  await deployer.deploy(
    StablePriceOracle,
    dummyOracle.address,
    generatePricesArray()
  );
  const priceOracle = await StablePriceOracle.deployed();

  await deployer.deploy(SubdomainStorage, { from: accounts[0] });
  const subdomainStorage = await SubdomainStorage.deployed();

  await deployer.deploy(
    SubdomainRegistrar,
    ensAddress,
    priceOracle.address,
    subdomainStorage.address,
    { from: accounts[0] }
  );
  const subdomainRegistrar = await SubdomainRegistrar.deployed();

  sleep(3);

  await subdomainStorage.addController(subdomainRegistrar.address, {
    from: accounts[0],
  });
  //await subdomainRegistrar.configureDomain(name, utils.toBN('10000000000000000'), accounts[0], {from: accounts[0]});

  console.log("subdomainRegistrar", subdomainRegistrar.address);

  // register domain
  var firstController = await ETHRegistrarController.at(controllerAddress);
  console.log(
    "Available on controller=",
    await firstController.available(name)
  );

  var rentPrice = await firstController.rentPrice(name, duration);
  console.log("rentprice=", rentPrice.toString());

  var commitment = await firstController.makeCommitment(
    name,
    accounts[0],
    secret
  );
  console.log("Commitment", commitment); //0x6277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e
  var commit = await firstController.commit(commitment); //0xf14fcbc8

  //0xf14fcbc86277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e
  console.log(commitment, commit.tx);

  console.log("sleep 70sec");
  await sleep(70);

  var tx = await firstController.register(name, accounts[0], duration, secret, {
    value: rentPrice.toString(),
    from: accounts[0],
    gas: 1500000,
  });
  console.log("registered", tx.tx);

  var tx = await ens.setResolver(SEF_NODE, resolver_address, {
    from: accounts[0],
  });
  console.log("set resolver", tx.tx);

  var ownedResolver = await PublicResolver.at(resolver_address);
  // console.log("ownedResolver", ownedResolver);
  console.log("subdomainRegistrar.address", subdomainRegistrar.address);
  var tx = await ownedResolver.setAddr(SEF_NODE, subdomainRegistrar.address);
  console.log("set address", tx.tx);

  var registrar = await BaseRegistrarImplementation.at(baseAddress);
  console.log("Owner of nobanktest=", await registrar.ownerOf(SEF_LABEL));
  var tx = await registrar.approve(subdomainRegistrar.address, SEF_LABEL);
  console.log(tx);
  sleep(5);

  var tx = await subdomainRegistrar.configureDomain(
    "nobanktest",
    utils.toBN("10000000000000000"),
    accounts[0],
    { from: accounts[0] }
  );
  console.log("configureDomain", tx);
};
