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
  console.log("Script started owner=", accounts[0]);
  var ens_address = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7";
  var controller = "0xbed36523cc78c8093cd0e4a6730e4c60bdc48b05";
  var ens = await ENS.at(ens_address);

  console.log("ENS=", ens_address);
  var ownerCrazy = await ens.owner(namehash.hash("crazy.one"));
  console.log("Owner (crazy.one)", ownerCrazy);

  console.log(
    "Public Resolver",
    await ens.resolver(namehash.hash("crazy.one"))
  );

  const baseAddress = await ens.owner(ETH_NODE);
  console.log("baseImplementation ", baseAddress);

  callback();
};
