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
  // var ens_address = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7"; //mainnet
  var ens_address = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de"; // testnet ENS.address;
  // var controller = "0xbed36523cc78c8093cd0e4a6730e4c60bdc48b05"; // mainnet
  var controller = "0x82ee6596D7E30d384AF9F7A0552fCa55adD7A008"; // testnet
  var name = "nobank";
  var ens = await ENS.at(ens_address);

  console.log("ENS=", ens_address);

  const baseAddress = await ens.owner(ETH_NODE);
  console.log("baseImplementation ", baseAddress);

  var firstController = await ETHRegistrarController.at(controller);

  console.log(
    "Available on controller=",
    await firstController.available(name)
  );

  var duration = 3153600;
  //var duration = 157680000;
  var rentPrice = await firstController.rentPrice(name, duration);
  console.log("rentprice=", rentPrice.toString());

  callback();
};
