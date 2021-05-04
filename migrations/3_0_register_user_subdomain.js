const PublicResolver = artifacts.require('@ensdomains/resolver/PublicResolver');
const SubdomainStorage = artifacts.require("SubdomainStorage");
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
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
    const subdomainStorage = await SubdomainStorage.at(SubdomainStorage.address);
    const subdomainRegistrar = await SubdomainRegistrar.at(SubdomainRegistrar.address);
    const ens = await ENS.at(ENS.address);

    const WAIT_TIMEOUT = network === 'local' ? 0 : 5;

    const durationDelta = 1000 * 300;

    await subdomainStorage.addController(accounts[0], {from: accounts[0]});
    await sleep(WAIT_TIMEOUT);

    const registerDomain = async (domain, subdomain, subdomainOwner, duration, _tokenURI, from) => {
        const subnode = namehash.hash(`${subdomain}.${domain}`);

        await subdomainStorage.doRegistration(subnode, duration, _tokenURI);
        await sleep(WAIT_TIMEOUT);

        await ens.setSubnodeOwner(namehash.hash(domain), sha3(subdomain), accounts[0], {from});
        await sleep(WAIT_TIMEOUT);
        await ens.setResolver(subnode, resolver.address, {from});
        await sleep(WAIT_TIMEOUT);
        await resolver.setAddr(subnode, subdomainOwner);
        await sleep(WAIT_TIMEOUT);
        await ens.setOwner(subnode, subdomainOwner, {from});
        await sleep(WAIT_TIMEOUT);

        const owner = await ens.owner(subnode);
        const address = await resolver.addr(subnode);
        const available = await subdomainRegistrar.available(subnode);
        const nameExpires = Number(await subdomainRegistrar.nameExpires(subnode)) * 1000;
        console.log(`---- ${subdomain}.${domain} registered: `)
        console.log('owner: ', owner, owner === subdomainOwner);
        console.log('address: ', address, address === subdomainOwner);
        console.log('available: ', available, available === false);
        console.log('nameExpires: ', new Date(nameExpires), (nameExpires + durationDelta) > (Date.now() + duration * 1000));
    }

    const duration = 60 * 60 * 24 * 365; // 1 year

    const start = Date.now();
    await registerDomain('crazy.one', 'yuriy', accounts[1], duration, '', accounts[0]);
    console.log('end: ', (Date.now() - start) / 1000);

    await subdomainStorage.removeController(accounts[0], {from: accounts[0]});
    await sleep(WAIT_TIMEOUT);

    await subdomainRegistrar.configureDomain('crazy', utils.toBN('10000000000000000'), "0x45e93f46604F69BEC2bB52C83eB029380E6efef7", {from: accounts[0]});
    await sleep(WAIT_TIMEOUT);

    console.log('---- FINISH -----');
}
