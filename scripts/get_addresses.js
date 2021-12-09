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
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
const PublicResolver = artifacts.require("@ensdomains/resolver/PublicResolver");

module.exports = async function (callback) {
  var accounts = await web3.eth.getAccounts();
  const domainname = "nobank.one";
  const name = namehash.hash(domainname);

  //   const subdomain_LABEL = utils.sha3("foo-12345ii2");
  //   console.log("subdomain_LABEL", subdomain_LABEL);
  //   const name = namehash.hash("foo-12345ii3.nobank.one");
  console.log("name hash", name);
  console.log("Script started owner=", accounts[0]);
  var ens_address = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7"; //mainnet

  //   var ens_address = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de"; // testnet ENS.address;

  var ens = await ENS.at(ens_address);

  console.log("SubdomainRegistrar: ", SubdomainRegistrar.address);
  var registrar = await SubdomainRegistrar.at(SubdomainRegistrar.address);
  const owner = await registrar.owner("nobank");

  console.log("owner", owner);

  var resolver_address = await ens.resolver(name);
  console.log("nobank resolver_address", resolver_address);

  var crazy_resolver_address = await ens.resolver(namehash.hash("crazy.one"));
  console.log("crazy resolver_address", crazy_resolver_address);

  var resolver_resolver_address = await ens.resolver(
    namehash.hash("resolver.one")
  );
  console.log("resolver resolver_address", resolver_resolver_address);

  const resolver = await PublicResolver.at(resolver_address);

  console.log("ENS=", ens_address);
  var ownerCrazy = await ens.owner(name);
  console.log("Owner", ownerCrazy);

  const baseAddress = await ens.owner(ETH_NODE);
  console.log("baseImplementation ", baseAddress);

  //   const address = await ens.name(name).getAddress();
  const address = await resolver.addr(name);
  console.log("address", address);

  callback();
};
