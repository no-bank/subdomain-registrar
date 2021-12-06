const PublicResolver = artifacts.require("@ensdomains/resolver/PublicResolver");
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
const BaseRegistrarImplementation = artifacts.require(
  "@ensdomains/ethregistrar/BaseRegistrarImplementation"
);
const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");

const namehash = require("eth-ens-namehash");
const sha3 = require("web3-utils").sha3;
const utils = require("web3-utils");

const sleep = (sec) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * sec));

module.exports = async function (deployer, network, accounts) {
  //   if (network !== "local") {
  //     console.log("---- ONLY FOR LOCAL");
  //     return;
  //   }
  var accounts = await web3.eth.getAccounts();
  const tld = "one";
  const ETH_NODE = namehash.hash(tld);

  console.log("Resolver address: ", PublicResolver.address);

  console.log("Owner account: ", accounts[0]);
  console.log("User account: ", accounts[1]);

  var ensAddress = "0x51766DEF619112F76dF1FD7C361e0C6F47eE19de"; // testnet ENS.address;
  var ens = await ENS.at(ensAddress);

  var baseAddress = await ens.owner(ETH_NODE);

  var resolver_address = await ens.resolver(namehash.hash("crazy.one"));
  const resolver = await PublicResolver.at(resolver_address);

  const registrar = await BaseRegistrarImplementation.at(baseAddress);

  const subdomainRegistrar = await SubdomainRegistrar.at(
    SubdomainRegistrar.address
  );

  const domain = "nobank";
  const duration = 60 * 60 * 24 * 365 * 100; // 1 year

  //   await subdomainRegistrar.configureDomain(
  //     domain,
  //     utils.toBN("10000000000000000"),
  //     "0x45e93f46604F69BEC2bB52C83eB029380E6efef7",
  //     { from: accounts[0] }
  //   );

  await sleep(5);

  //   console.log(
  //     "referral Address: ",
  //     await subdomainRegistrar.referralAddress(domain)
  //   );

  // console.log("subdomainRegistrar - configureDomain: ", domain);

  const domainInfo = await subdomainRegistrar.query(sha3(domain), "");

  console.log(domainInfo[0]);
  console.log(utils.toBN(domainInfo[1]).toString());
  console.log(domainInfo[2].toNumber());
  console.log(domainInfo[3]);

  console.log(
    "Owner nobank.one: ",
    await ens.owner(namehash.hash("nobank.one"))
  );
  console.log(
    "Resolver nobank.one: ",
    await resolver.addr(namehash.hash("nobank.one"))
  );

  // const rentPriceSub = await subdomainRegistrar.rentPrice(
  //   "foo-12345ii2",
  //   duration
  // );

  // console.log("rentPrice: ", Number(rentPriceSub) / 1e18);

  const tx = await subdomainRegistrar.register(
    sha3(domain),
    "foo-12345ii4",
    // accounts[0],
    "0xbA92CBA8Bb3CE3C5554220E70b41986c900b3c7C",
    duration,
    "",
    resolver.address,
    {
      from: accounts[0],
    }
  );

  console.log("9 - subdomainRegistrar - SUCCESS");

  console.log(await ens.owner(namehash.hash("foo-12345ii4.nobank.one")));
  console.log(await resolver.addr(namehash.hash("foo-12345ii4.nobank.one")));
  // console.log(
  //   await subdomainRegistrar.twitter(namehash.hash("foo-12345ii.nobank.one"))
  // );

  // try {
  //     await subdomainRegistrar._setTwitterURI(namehash.hash('foo-12345ii.crazy.one'), 'new_twitter_2', {from: accounts[0]});
  //     return;
  // } catch (e) {
  //     console.log('subdomainRegistrar._setTwitterURI: Failed from wrong account - true')
  // }

  // await subdomainRegistrar._setTwitterURI(namehash.hash('foo-12345ii.crazy.one'), 'new_twitter_2', {from: accounts[1]});

  // console.log(await subdomainRegistrar.twitter(namehash.hash('foo-12345ii.crazy.one')));

  // console.log('nameExpires', new Date(Number(await subdomainRegistrar.nameExpires(namehash.hash('foo-12345ii.crazy.one'))) * 1000));

  // try {
  //     await subdomainRegistrar.renew(sha3(domain), 'foo-12345ii', duration, {
  //         from: accounts[0],
  //         value: utils.toBN(rentPriceSub)
  //     });
  //     return;
  // } catch (e) {
  //     console.log('subdomainRegistrar.renew: Failed from wrong account - true')
  // }

  // await subdomainRegistrar.renew(sha3(domain), 'foo-12345ii', duration, {
  //     from: accounts[1],
  //     value: utils.toBN(rentPriceSub)
  // });

  // console.log('nameExpires', new Date(Number(await subdomainRegistrar.nameExpires(namehash.hash('foo-12345ii.crazy.one'))) * 1000));

  // try {
  //     await subdomainRegistrar.setReferralAddress(domain, accounts[1], { from: accounts[1] });
  //     console.log('ERROR - can change referral from wrong account');
  //     return ;
  // } catch (e) {
  //     await subdomainRegistrar.setReferralAddress(domain, accounts[1], { from: accounts[0] });
  //     const referral = await subdomainRegistrar.referralAddress(domain);
  //     console.log('setReferralAddress - ', referral === accounts[1]);
  // }

  // await subdomainRegistrar.setMinDuration(domain, 1, { from: accounts[0] });

  // console.log('setMinDuration - success');

  // const minDuration = Number(await subdomainRegistrar.minDuration(domain));
  // console.log('minDuration changed', minDuration, minDuration === 1);

  console.log("--- ALL tests SUCCESS!! ---");
};
