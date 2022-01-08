const ENS = require("@ensdomains/ensjs").default;
const Registry = artifacts.require("@ensdomains/ens/ENSRegistry");
const ethers = require("ethers");
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
const PublicResolver = artifacts.require("@ensdomains/resolver/PublicResolver");
const utils = require("web3-utils");
const BaseRegistrarImplementation = artifacts.require(
  "@ensdomains/ethregistrar/BaseRegistrarImplementation"
);
const SEF_LABEL = utils.sha3("sefwallet");
const namehash = require("eth-ens-namehash");
var SEF_NODE = namehash.hash("sefwallet.one");
var subregistrarAddress = "0x6c88B7be17161a0181e87AB08074894BdA9Fc494";

async function configureDomain(accounts) {
  var registrar = await BaseRegistrarImplementation.at(
    BaseRegistrarImplementation.address
  );
  console.log("Owner of sefwallet=", await registrar.ownerOf(SEF_LABEL));
  var tx = await registrar.approve(subregistrarAddress, SEF_LABEL);
  console.log(tx);

  var subdomainRegistrar = await SubdomainRegistrar.at(subregistrarAddress);
  var tx = await subdomainRegistrar.configureDomain(
    "sefwallet",
    utils.toBN("10000000000000000"),
    accounts[0],
    { from: accounts[0] }
  );
  console.log("configureDomain", tx);
}

var mainnet_ens_address = "0x3fa4135B88cE1035Fed373F0801118a3340B37e7";

module.exports = async function (callback) {
  //expect: 0x7464FbcD16eE7F5c16620DE05CF9B90882886e28
  async function isNameAvailable(host, duration) {
    var parts = host.split(".");
    var subdomain = parts[0];
    var domain = parts.slice(1).join(".");
    var ens = new ENS({
      provider: web3.currentProvider,
      ensAddress: mainnet_ens_address,
    });

    console.log("Using registry=", mainnet_ens_address, domain);

    const found = await ens.name(host).getAddress();

    if (found == ethers.constants.AddressZero) {
      const subdomainRegisterAddress = await ens.name(domain).getAddress();
      console.log("subregistrar?", subdomainRegisterAddress);
      const subdomainRegistrar = new web3.eth.Contract(
        SubdomainRegistrar.abi,
        subdomainRegisterAddress
      );

      //console.log(SubdomainRegistrar.abi, subdomainRegisterAddress)

      const rentPrice = await subdomainRegistrar.methods
        .rentPrice(subdomain, duration)
        .call();

      return {
        address: found,
        rentPrice: rentPrice,
        subdomainRegistrar: subdomainRegisterAddress,
      };
    }

    return { address: found };
  }

  try {
    var accounts = await web3.eth.getAccounts();
    //await configureDomain(accounts);

    // var registrar = await BaseRegistrarImplementation.at(BaseRegistrarImplementation.address);
    // console.log("Owner of sefwallet=", await registrar.ownerOf(SEF_LABEL))

    // var ownedResolver = await PublicResolver.at(PublicResolver.address);
    // var tx  = await ownedResolver.setAddr(SEF_NODE, subregistrarAddress);

    // var s = await SubdomainRegistrar.at(subregistrarAddress);
    // var tx = await s.setResolver("sefwallet",PublicResolver.address)
    //console.log(tx)

    var duration = 100000000;
    var available = await isNameAvailable(
      "superlongcheaptest3.sefwallet.one",
      200000000
    );
    console.log(available);
    if (available.address == ethers.constants.AddressZero) {
      var ens = await Registry.at(mainnet_ens_address);
      var subdomainRegistrar = await SubdomainRegistrar.at(
        available.subdomainRegistrar
      );
      var publicresolver = await ens.resolver(namehash.hash("resolver.one"));
      console.log(
        "Public Resolver",
        await ens.resolver(namehash.hash("crazy.one"))
      );
      console.log("Resolver=", publicresolver);
      var tx = await subdomainRegistrar.register(
        SEF_LABEL,
        "superlongcheaptest2",
        accounts[0],
        duration,
        "",
        publicresolver,
        {
          from: accounts[0],
          value: available.rentPrice,
        }
      );
      console.log(tx);
    }
  } catch (e) {
    console.log(e);
  }

  callback();
};
