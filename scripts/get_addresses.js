const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");
const namehash = require("eth-ens-namehash");
const utils = require("web3-utils");
const tld = "one";
const ETH_LABEL = utils.sha3(tld);
const ETH_NODE = namehash.hash(tld);
const BaseRegistrarImplementation = artifacts.require(
  "@ensdomains/ethregistrar/BaseRegistrarImplementation"
);
const ETHRegistrarController = artifacts.require(
  "@ensdomains/ethregistrar/ETHRegistrarController"
);

module.exports = async function (callback) {
  var accounts = await web3.eth.getAccounts();
  const name = namehash.hash("nobank.one");
  //   const name = namehash.hash("alice.nobank-test.one");
  console.log("Script started owner=", accounts[0]);
  //   var ens_address = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7"; //mainnet

  var ens_address = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de"; // testnet ENS.address;

  var ens = await ENS.at(ens_address);

  console.log("ENS=", ens_address);
  var ownerCrazy = await ens.owner(name);
  console.log("Owner", ownerCrazy);

  console.log("Public Resolver", await ens.resolver(name));

  const baseAddress = await ens.owner(ETH_NODE);
  console.log("baseImplementation ", baseAddress);

  callback();
};
