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

const sleep = (sec) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * sec));

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
  var ens_address = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de"; //testnet
  //   var ens_address = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7"; //mainnet
  var ens = await ENS.at(ens_address);
  var ownerCrazy = await ens.owner(namehash.hash("crazy.one"));
  console.log("ownerCrazy", ownerCrazy);

  var ownerNobank = await ens.owner(namehash.hash("nobank-test1.one"));
  console.log("ownerNobank", ownerNobank);

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
      "0x82ee6596D7E30d384AF9F7A0552fCa55adD7A008" //testnet
    );
    console.log(
      "Available on controller=",
      await firstController.available("nobank1-test")
    );

    var duration = 31536000;
    const salt = utils.sha3("quanta12345");
    console.log("salt", salt);

    // Generate a random value to mask our commitment

    // const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // const N = 32;
    // const salt =
    //   "0x" +
    //   Array.from(crypto.randomFillSync(new Uint8Array(N)))
    //     .map((n) => S[n % S.length])
    //     .join("");

    // console.log("salt", salt);

    var name = "nobank-test1";
    var rentPrice = await firstController.rentPrice(name, duration);
    console.log("rentprice=", rentPrice.toString());
    //console.log("controller" , firstController)
    var commitment = await firstController.makeCommitment(
      name,
      accounts[0],
      salt
    );
    console.log("Commitment", commitment); //0x6277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e
    var commit = await firstController.commit(commitment); //0xf14fcbc8
    console.log(commitment, commit);
    //
    //0xf14fcbc86277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e

    console.log("sleep 70sec");
    await sleep(70);

    var tx = await firstController.register(name, accounts[0], duration, salt, {
      value: rentPrice.toString(),
      from: accounts[0],
      gas: 1500000,
    });
    console.log(tx);

    var tx = await ens.setResolver(
      namehash.hash("nobank-test1.one"),
      "0xf046697010509cc5BeB952eF4CeD1dE210a7977f",
      { from: accounts[0] }
    );
    console.log("setting resolver", tx);
  } catch (e) {
    console.log(e);
  }

  callback();
};
