const ETHRegistrarController = artifacts.require('@ensdomains/ethregistrar/ETHRegistrarController');
const PublicResolver = artifacts.require('@ensdomains/resolver/PublicResolver');
const BaseRegistrarImplementation = artifacts.require('@ensdomains/ethregistrar/BaseRegistrarImplementation');
const SubdomainRegistrar = artifacts.require("EthRegistrarSubdomainRegistrar");
const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");

const TestResolver = artifacts.require("TestResolver");

const namehash = require('eth-ens-namehash');
// const sha3 = require('js-sha3').keccak_256;
const sha3 = require('web3-utils').sha3;
const utils = require('web3-utils');

const sleep = (sec) => new Promise(resolve => setTimeout(resolve, 1000 * sec))

module.exports = async function(deployer, network, accounts) {
    console.log('Controller address: ', ETHRegistrarController.address);
    console.log('Resolver address: ', PublicResolver.address);

    console.log('User account: ', accounts[0]);

    const domain = 'crazy-test';
    const duration = 60 * 60 * 24 * 365; // 1 year

    console.log('New domain: ', domain);

    const controller = await ETHRegistrarController.at(ETHRegistrarController.address);
    const resolver = await PublicResolver.at(PublicResolver.address);

    await deployer.deploy(TestResolver);
    const resolverTest = await TestResolver.deployed();

    // const baseRegistrarImplementation = await BaseRegistrarImplementation.at(BaseRegistrarImplementation.address);
    const subdomainRegistrar = await SubdomainRegistrar.at(SubdomainRegistrar.address);
    const ens = await ENS.at(ENS.address);

    // console.log('1 char', +await controller.rentPrice('a', duration) / 1e18);
    // console.log('2 char', +await controller.rentPrice('aa', duration) / 1e18);
    // console.log('3 char', +await controller.rentPrice('aaa', duration) / 1e18);
    // console.log('4 char', +await controller.rentPrice('aaaa', duration) / 1e18);
    // console.log('5 char', +await controller.rentPrice('aaaaa', duration) / 1e18);
    // console.log('6 char', +await controller.rentPrice('aaaaaa', duration) / 1e18);
    // console.log('7 char', +await controller.rentPrice('aaaaaaa', duration) / 1e18);
    // console.log('8 char', +await controller.rentPrice('aaaaaaaa', duration) / 1e18);
    // console.log('9 char', +await controller.rentPrice('aaaaaaaaa', duration) / 1e18);
    // console.log('10 char', +await controller.rentPrice('aaaaaaaaaa', duration) / 1e18);


    // await dhr.setSubnodeOwner('0x' + sha3(domain.name), accounts[0]);
    // await dhr.transfer('0x' + sha3(domain.name), registrar.address);

    const rentPrice = await controller.rentPrice(domain, duration);

    console.log('rentPrice: ', Number(rentPrice) / 1e18);

    console.log('1 - makeCommitmentWithConfig')

    const commitment = await controller.makeCommitmentWithConfig(
        domain,
        SubdomainRegistrar.address,
        "0xe6bcec774acd54b71bd49ca5570f4bae074e7d983cad8a3162b480219adecdea",
        resolver.address,
        SubdomainRegistrar.address,
        {from: accounts[0]}
    )

    console.log('2 - commit: ', commitment)

    await controller.commit(commitment, {from: accounts[0]})

    console.log('3 - sleep 61 sec')

    await sleep(61);

    console.log('4 - registerWithConfig')

    await controller.registerWithConfig(
        domain,
        SubdomainRegistrar.address,
        duration,
        "0xe6bcec774acd54b71bd49ca5570f4bae074e7d983cad8a3162b480219adecdea",
        resolver.address,
        SubdomainRegistrar.address,
        {from: accounts[0], value: rentPrice}
    );

    console.log('5 - success')

    const address = await resolver.addr(namehash.hash(domain + '.one'));

    console.log('6 - resolved address: ', address, address === subdomainRegistrar.address);

    console.log('7 - domain owner: ', await ens.owner(namehash.hash(domain + '.one')), subdomainRegistrar.address);

    // let domainInfo = await subdomainRegistrar.query(sha3(domain), '');

    // console.log(domainInfo[0]);
    // console.log(domainInfo[1]);
    // console.log(domainInfo[2].toNumber());
    // console.log(domainInfo[3].toNumber());

    console.log('7-1', await subdomainRegistrar.owner(sha3(domain)));

    await subdomainRegistrar.configureDomain(domain, utils.toBN('10000000000000000'), 100000, {from: accounts[0]});

    console.log('8 - SUCCESS');

    const domainInfo = await subdomainRegistrar.query(sha3(domain), '');

    console.log(domainInfo[0]);
    console.log(utils.toBN(domainInfo[1]).toString());
    console.log(domainInfo[2].toNumber());
    console.log(domainInfo[3].toNumber());

    const tx = await subdomainRegistrar.register(sha3(domain), 'foo', accounts[0], accounts[0], resolver.address, {
        from: accounts[0],
        value: utils.toBN(domainInfo[1])
    });

    console.log('9 - subdomainRegistrar - SUCCESS');

    // console.log('11 - owner: ', await subdomainRegistrar.owner(sha3("foo2.crazy-test")));
    // console.log('10 - owner: ', await subdomainRegistrar.owner(sha3("foo2")));

    console.log(await ens.owner(namehash.hash('crazy-test.one')));
    console.log(await ens.owner(namehash.hash('foo.crazy-test.one')), accounts[0]);
    console.log(await resolver.addr(namehash.hash('crazy-test.one')), accounts[0]);
    console.log(await resolver.addr(namehash.hash('foo.crazy-test.one')), accounts[0]);
    // console.log(await ens.resolver(namehash.hash('foo.crazy-test.one')), accounts[0]);
    // console.log(await resolver.addr(namehash.hash('foo.test.eth')), accounts[1]);

    // console.log(tx.logs.length, 1);
    // console.log(tx.logs[0].event, 'NewRegistration');
    // console.log(tx.logs[0].args.label, sha3(domain));
    // console.log(tx.logs[0].args.subdomain, 'foo2');
    // console.log(tx.logs[0].args.owner, accounts[0]);
    // console.log(tx.logs[0].args.price, '10000000000000000');
    // console.log(tx.logs[0].args.referrer, accounts[0]);
}
