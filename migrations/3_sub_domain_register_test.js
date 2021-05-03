const PublicResolver = artifacts.require('@ensdomains/resolver/PublicResolver');
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
const BaseRegistrarImplementation = artifacts.require('@ensdomains/ethregistrar/BaseRegistrarImplementation');
const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");

const namehash = require('eth-ens-namehash');
const sha3 = require('web3-utils').sha3;
const utils = require('web3-utils');

const sleep = (sec) => new Promise(resolve => setTimeout(resolve, 1000 * sec))

module.exports = async function(deployer, network, accounts) {
    console.log('Resolver address: ', PublicResolver.address);

    console.log('Owner account: ', accounts[0]);
    console.log('User account: ', accounts[1]);

    const resolver = await PublicResolver.at(PublicResolver.address);

    const registrar = await BaseRegistrarImplementation.at(BaseRegistrarImplementation.address);

    const subdomainRegistrar = await SubdomainRegistrar.at(SubdomainRegistrar.address);
    const ens = await ENS.at(ENS.address);

    const domain = 'crazy';
    const duration = 60 * 60 * 24 * 365; // 1 year

    await subdomainRegistrar.configureDomain(domain, utils.toBN('10000000000000000'), "0x45e93f46604F69BEC2bB52C83eB029380E6efef7", {from: accounts[0]});

    await sleep(5);

    console.log('referral Address: ', await subdomainRegistrar.referralAddress(domain));

    console.log('subdomainRegistrar - configureDomain: ', domain);

    const domainInfo = await subdomainRegistrar.query(sha3(domain), '');

    console.log(domainInfo[0]);
    console.log(utils.toBN(domainInfo[1]).toString());
    console.log(domainInfo[2].toNumber());
    console.log(domainInfo[3]);

    const rentPriceSub = await subdomainRegistrar.rentPrice('foo-12345ii', duration);

    console.log('rentPrice: ', Number(rentPriceSub) / 1e18);

    const tx = await subdomainRegistrar.register(sha3(domain), 'foo-12345ii', accounts[1], duration, 'twitter_name_1', resolver.address, {
        from: accounts[1],
        value: utils.toBN(rentPriceSub)
    });

    console.log('9 - subdomainRegistrar - SUCCESS');

    console.log(await ens.owner(namehash.hash('crazy.one')));
    console.log(await resolver.addr(namehash.hash('crazy.one')), accounts[0]);
    console.log(await ens.owner(namehash.hash('foo-12345ii.crazy.one')), accounts[1]);
    console.log(await resolver.addr(namehash.hash('foo-12345ii.crazy.one')), accounts[1]);
    console.log(await subdomainRegistrar.twitter(namehash.hash('foo-12345ii.crazy.one')));

    // await subdomainRegistrar._setTwitterURI('foo-12345ii.crazy', 'new_twitter_2', {from: accounts[1]});

    console.log(await subdomainRegistrar.twitter(namehash.hash('foo-12345ii.crazy.one')));
}
