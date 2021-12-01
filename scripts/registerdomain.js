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
/*
curl -d '{
    "jsonrpc":"2.0",
    "method":"hmy_getTransactionReceipt",
    "params":[
      "0xa247839c8c5792378043d274b5f75cdfa52a21388336fd9fda7302d0b565b1b0"
    ],
    "id":1
}' -H 'Content-Type:application/json' -X POST 'https://api.s0.b.hmny.io'
*/

function decodeReceiptLogs(logs) {
  return logs
    .map((log) => {
      for (var iface of ifaces) {
        try {
          return iface.parseLog({ data: log.data, topics: log.topics });
        } catch (e) {}
      }
      return null;
    })
    .filter((e) => e != null);
}

module.exports = async function (callback) {
  var accounts = await web3.eth.getAccounts();
  console.log("Script started owner=", accounts[0]);
  var ens_address = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de";
  var ens = await ENS.at(ens_address);
  var ownerCrazy = await ens.owner(namehash.hash("crazy.one"));
  console.log("Owner", ownerCrazy);

  var ownerCrazy = await ens.owner(namehash.hash("sefwallet.one"));
  console.log("Owner", ownerCrazy);

  const baseAddress = await ens.owner(ETH_NODE);
  console.log("Registrar ", baseAddress);

  var baseRegistrar = await BaseRegistrarImplementation.at(baseAddress);
  console.log(
    "crazy.one Available?",
    await baseRegistrar.available(utils.sha3("resolver"))
  );

  // subdomain registrar

  //200000000
  // 31536000
  try {
    var firstController = await ETHRegistrarController.at(
      "0x82ee6596D7E30d384AF9F7A0552fCa55adD7A008"
    );
    console.log(
      "Available on controller=",
      await firstController.available("nobank")
    );

    var duration = 31536000;
    var secret = utils.sha3("quanta123");
    var name = "nobank";
    var rentPrice = await firstController.rentPrice(name, duration);
    console.log("rentprice=", rentPrice.toString());
    //console.log("controller" , firstController)
    var commitment = await firstController.makeCommitment(
      name,
      accounts[0],
      secret
    );
    console.log("Commitment", commitment); //0x6277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e
    //var commit = await firstController.commit(commitment); //0xf14fcbc8
    //console.log(commitment, commit);
    //
    //0xf14fcbc86277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e

    //var tx = await firstController.register(name, accounts[0], duration, secret,{value: rentPrice.toString(), from: accounts[0], gas: 1500000});
    //console.log(tx)
    var tx = await ens.setResolver(
      namehash.hash("nobank.one"),
      "0xf046697010509cc5BeB952eF4CeD1dE210a7977f",
      { from: accounts[0] }
    );
    console.log("setting resolver", tx);
  } catch (e) {
    console.log(e);
  }

  callback();
};
