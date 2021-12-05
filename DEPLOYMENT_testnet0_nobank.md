(base) okudajuntanoMacBook-puro:subdomain-registrar okudajunta$ truffle migrate --network harmonytestnet0 --f 5 --reset
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

> Network name: 'harmonytestnet0'
> Network id: 1666700000
> Block gas limit: 80000000 (0x4c4b400)

# 5_register_nobank.js

NETWORK harmonytestnet0
registry 0x51766DEF619112F76dF1FD7C361e0C6F47eE19de
Base Address 0x61ddFeff86923B39207e2C0A50977f6A76C73C7B
Public Resolver 0xf046697010509cc5BeB952eF4CeD1dE210a7977f
Controller at address= 0x82ee6596D7E30d384AF9F7A0552fCa55adD7A008
accounts[0] address= 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c
accounts[0] balance= 1984914212819999999295
SEF_NODE= 0xd7263e54a4c14d6960525b7575aa9f2377f0d88a678747a004bcf2856398941e
Available on controller= true
rentprice= 1000000000000000047168
Commitment 0x2cbab1467a6ecf25902b0698e0b05ae86935edca59c615ab13041ef8ce00c213
0x2cbab1467a6ecf25902b0698e0b05ae86935edca59c615ab13041ef8ce00c213 0x91cbf5ae3c33647054de3314f065d175261607424eb2635913f670bf3a0d6961
sleep 70sec
registered 0xc7292831905fb044ecc1781085647ee0eb2415589abd27ae2fb4cace2c71eba9
set resolver 0xacc377a4c22d7478e4f85a4154c2849cac691b2fe52b64b963abaee8e77260f4
Owner of nobank= 0x72A87f0551B4A9f89E7c96dD122A7DC81D169b6c

---

> Total cost: 0 undefined

# Summary

> Total deployments: 0
> Final cost: 0 undefined
