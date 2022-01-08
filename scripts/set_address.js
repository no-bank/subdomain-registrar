const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");
const namehash = require("eth-ens-namehash");
const PublicResolver = artifacts.require("@ensdomains/resolver/PublicResolver");
const ownerAddress = "0x72a87f0551b4a9f89e7c96dd122a7dc81d169b6c";
const myAddress = "0xF7A9C820e0dcE141AC2F56324697A9E8AA82F7Fa";

module.exports = async function (callback) {
  var accounts = await web3.eth.getAccounts();
  var ens_address = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de"; // testnet ENS.address;
  var ens = await ENS.at(ens_address);
  var resolver_address = await ens.resolver(namehash.hash("crazy.one"));
  //   var NODE = namehash.hash("nobank.one");
  var NODE = namehash.hash("taro.nobank.one");

  console.log("Script started owner=", accounts[0]);
  //   var ens_address = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7"; //mainnet

  var ens = await ENS.at(ens_address);

  console.log("ENS=", ens_address);

  var ownedResolver = await PublicResolver.at(resolver_address);
  console.log("ownedResolver", ownedResolver);

  var tx = await ownedResolver.setAddr(NODE, myAddress);
  console.log("set address", tx.tx);

  callback();
};
