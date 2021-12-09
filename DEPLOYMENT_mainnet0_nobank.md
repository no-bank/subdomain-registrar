(base) okudajuntanoMacBook-puro:subdomain-registrar okudajunta$ truffle migrate --network harmonymainnet --f 5 --to 5 --reset
Warning: Both truffle-config.js and truffle.js were found. Using truffle-config.js.

# Compiling your contracts...

> Compiling ./contracts/deps.sol
> Compilation warnings encountered:

    @ensdomains/ens/contracts/ENS.sol:31:31: Warning: This declaration shadows an existing declaration.
    function isApprovedForAll(address owner, address operator) external view returns (bool);
                              ^-----------^

@ensdomains/ens/contracts/ENS.sol:27:5: The shadowed declaration is here:
function owner(bytes32 node) external view returns (address);
^-----------------------------------------------------------^

,@ensdomains/ens/contracts/ENSRegistry.sol:159:31: Warning: This declaration shadows an existing declaration.
function isApprovedForAll(address owner, address operator) external view returns (bool) {
^-----------^
@ensdomains/ens/contracts/ENSRegistry.sol:117:5: The shadowed declaration is here:
function owner(bytes32 node) public view returns (address) {
^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:163:38: Warning: This declaration shadows an existing declaration.
function \_setOwner(bytes32 node, address owner) internal {
^-----------^
@ensdomains/ens/contracts/ENSRegistry.sol:117:5: The shadowed declaration is here:
function owner(bytes32 node) public view returns (address) {
^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:47: Warning: This declaration shadows an existing declaration.
function \_setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
^--------------^
@ensdomains/ens/contracts/ENSRegistry.sol:131:5: The shadowed declaration is here:
function resolver(bytes32 node) public view returns (address) {
^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:65: Warning: This declaration shadows an existing declaration.
function \_setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
^--------^
@ensdomains/ens/contracts/ENSRegistry.sol:140:5: The shadowed declaration is here:
function ttl(bytes32 node) public view returns (uint64) {
^ (Relevant source part starts here and spans across multiple lines).

> Everything is up to date, there is nothing to compile.

Warning: Both truffle-config.js and truffle.js were found. Using truffle-config.js.

# Starting migrations...

> Network name: 'harmonymainnet'
> Network id: 1666600000
> Block gas limit: 80000000 (0x4c4b400)

# 5_register_nobank.js

NETWORK harmonymainnet
registry 0x3fa4135B88cE1035Fed373F0801118a3340B37e7
Base Address 0x27f18e91DB75C57aE00B75F0103F8036ee23E330
Public Resolver 0x48D421c223E32B68a8973ef05e1314C97BBbc4bE
Controller at address= 0xbed36523cc78c8093cd0e4a6730e4c60bdc48b05
accounts[0] address= 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c
accounts[0] balance= 98930456309999999953
SEF_NODE= 0xd7263e54a4c14d6960525b7575aa9f2377f0d88a678747a004bcf2856398941e

Replacing 'DummyOracle'

---

> transaction hash: 0x0d26b290324e1d165aa66d7ab7f2fd00fdd8bf4d396bdc119c3546416f6bbf84
> Blocks: 2 Seconds: 4
> contract address: 0xF8A610f0ad3A7290F153f60a9B48A5C6064a97C2
> block number: 20261689
> block timestamp: 1639025674
> account: 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c
> balance: 98.929278299999999953
> gas used: 117801 (0x1cc29)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.00117801 ETH

Replacing 'StablePriceOracle'

---

> transaction hash: 0x50271f2ef10290151c6f15804e88ff7e82126681759f2be6139af51cbb800c11
> Blocks: 2 Seconds: 4
> contract address: 0xE1a85D6E50b9c5aA8d06Fba3bDCe145b9A9B312b
> block number: 20261694
> block timestamp: 1639025684
> account: 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c
> balance: 98.917671839999999953
> gas used: 1160646 (0x11b5c6)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.01160646 ETH

Replacing 'SubdomainStorage'

---

> transaction hash: 0xcaa08804e2b06ed391099b0a5e0d8a4f6976a183817ed9b1496c547433f86882
> Blocks: 3 Seconds: 4
> contract address: 0x0Fe115d4888A65bf194738Bc4367C73D8d6FF32C
> block number: 20261697
> block timestamp: 1639025690
> account: 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c
> balance: 98.908878399999999953
> gas used: 879344 (0xd6af0)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.00879344 ETH

Replacing 'EthRegistrarSubdomainRegistrar'

---

> transaction hash: 0x156922db463a725d4c1ab684ee7aa595365394b2c48cbabd667984a1e3563e4c
> Blocks: 1 Seconds: 4
> contract address: 0x164aB73fD7aEb5a9fA5085DC10FC2A224393e454
> block number: 20261701
> block timestamp: 1639025698
> account: 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c
> balance: 98.868326569999999953
> gas used: 4055183 (0x3de08f)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.04055183 ETH

subdomainRegistrar 0x164aB73fD7aEb5a9fA5085DC10FC2A224393e454
Available on controller= true
rentprice= 50000000000000002358
Commitment 0x1e167e8cf0cd58095552929d0eb7583cffb9ff8c06356f1ed42329001405a4c9
0x1e167e8cf0cd58095552929d0eb7583cffb9ff8c06356f1ed42329001405a4c9 0x9800c2c2febf37fe8e32bc60b7cae1e92badead3608cc685d9525944b0a60e4b
sleep 70sec
registered 0xbfd48a7257a244595986452fecc75cc6cf91c9334c37f057aaa29024b772c454
set resolver 0xc74e48e8b697caf263a38ec2c1f9a30ea95205eb29e76e60566958c1e00edc98
subdomainRegistrar.address 0x164aB73fD7aEb5a9fA5085DC10FC2A224393e454
set address 0x3413f6bc116e7658395cd2425339273bf0e8a09f041ac077d572a47bf71f1161
Owner of nobank= 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c
0x428feff5d5f7a088d5d8f8cfd59fb202eafb65bb77b4ba7ed3cb271bbc5d15c5
configureDomain 0x2cb7ed1632438d59858275f9d76b62475e376638ad7b248e272c553326094a6f

> Saving artifacts

---

> Total cost: 0.06212974 ETH

# Summary

> Total deployments: 4
> Final cost: 0.06212974 ETH
