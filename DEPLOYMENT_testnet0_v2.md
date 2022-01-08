
Compiling your contracts...
===========================
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
    function _setOwner(bytes32 node, address owner) internal {
                                     ^-----------^
@ensdomains/ens/contracts/ENSRegistry.sol:117:5: The shadowed declaration is here:
    function owner(bytes32 node) public view returns (address) {
    ^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:47: Warning: This declaration shadows an existing declaration.
    function _setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
                                              ^--------------^
@ensdomains/ens/contracts/ENSRegistry.sol:131:5: The shadowed declaration is here:
    function resolver(bytes32 node) public view returns (address) {
    ^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:65: Warning: This declaration shadows an existing declaration.
    function _setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
                                                                ^--------^
@ensdomains/ens/contracts/ENSRegistry.sol:140:5: The shadowed declaration is here:
    function ttl(bytes32 node) public view returns (uint64) {
    ^ (Relevant source part starts here and spans across multiple lines).


> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'harmonytestnet0'
> Network id:      1666700000
> Block gas limit: 80000000 (0x4c4b400)


2_deploy_contracts.js
=====================

   Replacing 'ENSRegistry'
   -----------------------
   > transaction hash:    0x969134ee1f88cf9fa2ed4daf21b85bf03346e93ae43b25644f13bcb0e9214465
   > Blocks: 2            Seconds: 4
   > contract address:    0xe8db6e177EEC01f235510b4f51e3a1Fb8fC14A75
   > block number:        15890326
   > block timestamp:     1633571783
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             213.243163620801445074
   > gas used:            1080210 (0x107b92)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0216042 ETH


   Replacing 'PublicResolver'
   --------------------------
   > transaction hash:    0x9e40123878016d1200eb8c0c986d77cc853d47a030e0eb1234f2e1dded910a5a
   > Blocks: 3            Seconds: 4
   > contract address:    0x51cB90F5E47Bc02d84a97c744Bf54681a2D9e274
   > block number:        15890331
   > block timestamp:     1633571793
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             213.184677360801445074
   > gas used:            2924313 (0x2c9f19)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05848626 ETH


   Replacing 'BaseRegistrarImplementation'
   ---------------------------------------
   > transaction hash:    0x0ddebe2114efcf7fbdd5593fa840cf3d1f5874a36da1c44885bbdc271d56703c
   > Blocks: 3            Seconds: 4
   > contract address:    0xD1f46CE847a64E69E00097cB63B2143DF31A35e9
   > block number:        15890336
   > block timestamp:     1633571803
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             213.135796840801445074
   > gas used:            2444026 (0x254afa)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04888052 ETH

Start: Set resolver.one address for main Resolver
End: Set resolver.one address for main Resolver

   Replacing 'DummyOracle'
   -----------------------
   > transaction hash:    0x730c5d68040f9bf080642827e1b82e44e701f46ff4b44c894bba6862348b11e0
   > Blocks: 3            Seconds: 4
   > contract address:    0x20Ed9d2101f8F9B0D389319A0A391016c4B69116
   > block number:        15890346
   > block timestamp:     1633571823
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             213.131465520801445074
   > gas used:            117801 (0x1cc29)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00235602 ETH


   Replacing 'StablePriceOracle'
   -----------------------------
   > transaction hash:    0xacfbc6f8080dad656e84557db4b68b4086b37c2bed4ca7088e92099550f975af
   > Blocks: 2            Seconds: 4
   > contract address:    0x8A522296fB1D816FFB47769D860EAF5FBDBEe472
   > block number:        15890350
   > block timestamp:     1633571831
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             213.108244920801445074
   > gas used:            1161030 (0x11b746)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0232206 ETH


   Replacing 'SubdomainStorage'
   ----------------------------
   > transaction hash:    0x8ed68e6093d52226c67eeaac54bc8fa17af929f7af23471d60693ce8a76f610a
   > Blocks: 3            Seconds: 4
   > contract address:    0x52F0Bd93C4cc1c74BcD8a6fFa267F75FE0dF0D70
   > block number:        15890355
   > block timestamp:     1633571841
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             213.090658040801445074
   > gas used:            879344 (0xd6af0)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01758688 ETH


   Replacing 'EthRegistrarSubdomainRegistrar'
   ------------------------------------------
   > transaction hash:    0x2c31847e4e0aba9c42ee7193c9e21ddbb9ef810dbb57f16df6477cbad75d45f5
   > Blocks: 8            Seconds: 16
   > contract address:    0x04c09AbC757D89324134fb20663fD0b0DE8Ff4EF
   > block number:        15890360
   > block timestamp:     1633571851
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             213.007433200801445074
   > gas used:            4161242 (0x3f7eda)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08322484 ETH

registrar addController accounts[0]
register resolver
ens.setResolver resolver.one
ownedResolver.setAddr resolver.one
registrar.register crazy
ens.setResolver crazy.one
ownedResolver.setAddr crazy.one
registrar.approve crazy
registrar.removeController accounts[0]

   Replacing 'ETHRegistrarController'
   ----------------------------------
   > transaction hash:    0x702b9f4a140e274c49f8a26c45b8c401a22435f48f3900255de674f72bc2b072
   > Blocks: 2            Seconds: 4
   > contract address:    0x92a0eb44bBf22948B2392f220221159abAF3aAAA
   > block number:        15890415
   > block timestamp:     1633571961
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.951783960801445074
   > gas used:            2193020 (0x21767c)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0438604 ETH


   Replacing 'DefaultReverseResolver'
   ----------------------------------
   > transaction hash:    0x7e07e4fe93c127fc04f3fdaab6f4bf41ef6c6fab5c311e92d0c508556953723a
   > Blocks: 2            Seconds: 4
   > contract address:    0xD4255f97B19A6bee4eD4721890B393e46670bfA7
   > block number:        15890425
   > block timestamp:     1633571981
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.943051280801445074
   > gas used:            347166 (0x54c1e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00694332 ETH


   Replacing 'ReverseRegistrar'
   ----------------------------
   > transaction hash:    0x2f473c0c7511c6163e81b83cb0e91ed57e6c0702e44b6295a52e23f0fee35c3b
   > Blocks: 3            Seconds: 4
   > contract address:    0x2d042871b841AB1fF7D6d2771964f3362fB6Feea
   > block number:        15890430
   > block timestamp:     1633571991
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.928234000801445074
   > gas used:            740864 (0xb4e00)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01481728 ETH


   Replacing 'Root'
   ----------------
   > transaction hash:    0x2d4360959aad141b71237d85083564f655c1e3bf508b51dbfccde65e4748568b
   > Blocks: 2            Seconds: 4
   > contract address:    0x6E4cBDD23eC382eceBf2a707F584a68A5829668d
   > block number:        15890442
   > block timestamp:     1633572015
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.913717500801445074
   > gas used:            617028 (0x96a44)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01234056 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.33332088 ETH


3_0_register_user_subdomain.js
==============================
Owner account:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
User account:  undefined
---- yuriy.crazy.one registered: 
owner:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B true
address:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B true
available:  false true
nameExpires:  2022-10-07T02:01:09.000Z true
end:  75.064
---- FINISH -----
   -------------------------------------
   > Total cost:                   0 ETH


3_1_sub_domain_register_test.js
===============================
---- ONLY FOR LOCAL
   -------------------------------------
   > Total cost:                   0 ETH


4_domain_register_test.js
=========================
---- ONLY FOR LOCAL
   -------------------------------------
   > Total cost:                   0 ETH


Summary
=======
> Total deployments:   11
> Final cost:          0.33332088 ETH



Compiling your contracts...
===========================
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
    function _setOwner(bytes32 node, address owner) internal {
                                     ^-----------^
@ensdomains/ens/contracts/ENSRegistry.sol:117:5: The shadowed declaration is here:
    function owner(bytes32 node) public view returns (address) {
    ^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:47: Warning: This declaration shadows an existing declaration.
    function _setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
                                              ^--------------^
@ensdomains/ens/contracts/ENSRegistry.sol:131:5: The shadowed declaration is here:
    function resolver(bytes32 node) public view returns (address) {
    ^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:65: Warning: This declaration shadows an existing declaration.
    function _setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
                                                                ^--------^
@ensdomains/ens/contracts/ENSRegistry.sol:140:5: The shadowed declaration is here:
    function ttl(bytes32 node) public view returns (uint64) {
    ^ (Relevant source part starts here and spans across multiple lines).


> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'harmonytestnet0'
> Network id:      1666700000
> Block gas limit: 80000000 (0x4c4b400)


5_register_sefwallet.js
=======================

/home/quoc/Projects/subdomain-registrar/migrations/5_register_sefwallet.js:13
const sleep = (sec) => new Promise(resolve => setTimeout(resolve, 1000 * sec))
      ^

SyntaxError: Identifier 'sleep' has already been declared
    at new Script (vm.js:99:7)
    at Object.createScript (vm.js:249:10)
    at Object.file (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/require/require.js:93:1)
    at Migration._load (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:43:1)
    at Migration.run (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:171:1)
    at Object.runMigrations (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
    at Object.runFrom (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
    at runMigrations (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:257:1)
    at Object.run (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:227:1)
    at Command.run (/home/quoc/.config/yarn/global/node_modules/truffle/build/webpack:/packages/core/lib/command.js:136:1)
Truffle v5.1.67 (core: 5.1.67)
Node v13.14.0

Compiling your contracts...
===========================
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
    function _setOwner(bytes32 node, address owner) internal {
                                     ^-----------^
@ensdomains/ens/contracts/ENSRegistry.sol:117:5: The shadowed declaration is here:
    function owner(bytes32 node) public view returns (address) {
    ^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:47: Warning: This declaration shadows an existing declaration.
    function _setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
                                              ^--------------^
@ensdomains/ens/contracts/ENSRegistry.sol:131:5: The shadowed declaration is here:
    function resolver(bytes32 node) public view returns (address) {
    ^ (Relevant source part starts here and spans across multiple lines).

,@ensdomains/ens/contracts/ENSRegistry.sol:167:65: Warning: This declaration shadows an existing declaration.
    function _setResolverAndTTL(bytes32 node, address resolver, uint64 ttl) internal {
                                                                ^--------^
@ensdomains/ens/contracts/ENSRegistry.sol:140:5: The shadowed declaration is here:
    function ttl(bytes32 node) public view returns (uint64) {
    ^ (Relevant source part starts here and spans across multiple lines).


> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'harmonytestnet0'
> Network id:      1666700000
> Block gas limit: 80000000 (0x4c4b400)


5_register_sefwallet.js
=======================
NETWORK harmonytestnet0
registry 0xe8db6e177EEC01f235510b4f51e3a1Fb8fC14A75
Base Address 0xD1f46CE847a64E69E00097cB63B2143DF31A35e9
Public Resolver 0x51cB90F5E47Bc02d84a97c744Bf54681a2D9e274
Controller at address= 0x92a0eb44bBf22948B2392f220221159abAF3aAAA

   Replacing 'DummyOracle'
   -----------------------
   > transaction hash:    0xb737e414a14a0cd78261257d953162f5c555df3a55a37493e676faf00c49907f
   > Blocks: 2            Seconds: 4
   > contract address:    0x2382E9Cb9A66a5A1BC64b92189BE0BDfDB6ab7D3
   > block number:        15890549
   > block timestamp:     1633572229
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.899552340801445074
   > gas used:            117801 (0x1cc29)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00235602 ETH


   Replacing 'StablePriceOracle'
   -----------------------------
   > transaction hash:    0x1620cd2b4bb11003fb3ae33783d816162d527c3e2a0d243c61402c0ed4c95903
   > Blocks: 2            Seconds: 4
   > contract address:    0x21529A1906cCEBbaC76928Bc2b8622503593EFFe
   > block number:        15890553
   > block timestamp:     1633572237
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.876339420801445074
   > gas used:            1160646 (0x11b5c6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02321292 ETH


   Replacing 'SubdomainStorage'
   ----------------------------
   > transaction hash:    0x26fa69b168be1fbfe75d17ccd5fb504740286896023cd538d0a991122c59fb32
   > Blocks: 2            Seconds: 4
   > contract address:    0x0c7bE95eBDF95643F4CA45CF1779C4742a35aF17
   > block number:        15890558
   > block timestamp:     1633572247
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.858752540801445074
   > gas used:            879344 (0xd6af0)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01758688 ETH


   Replacing 'EthRegistrarSubdomainRegistrar'
   ------------------------------------------
   > transaction hash:    0xd29b3b637a4186c8495e518781cfcac1a73d4813967a112d532899d6a006c985
   > Blocks: 3            Seconds: 4
   > contract address:    0xd97316a91F6Ad9a3288C45653403d5F7A51723A8
   > block number:        15890563
   > block timestamp:     1633572257
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             212.775527700801445074
   > gas used:            4161242 (0x3f7eda)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08322484 ETH

subdomainRegistrar 0xd97316a91F6Ad9a3288C45653403d5F7A51723A8
Available on controller= true
rentprice= 31709791983764588000
Commitment 0x6277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e
0x6277d2c63e21889a3bf487353df67becf5a8de8f09f33311bd184b66e394d34e 0x7bb5c1f6d1a756e1d97fc950a17f07d905e1cb4d4d9a0bcc97c4c7b015877e43
sleep 61sec
registered 0xfcfeedf72de22f954460e381223f041e1730b0b872d2034974da1d6b88b55ccc
set resolver 0xc3d9be3a8ef86725f2c09de3a76940cc25596321af2ab0c4f7c611ebe119a3bc
set address 0xd334d2fa82abb846e1ed12f78d51c31b57bcd9cf939050b7714558a015107db5
Owner of sefwallet= 0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
{
  tx: '0x99616076aba89101e5a3fdf2bf42eb27c951d1b88c65538e0a59df2b1e298ea8',
  receipt: {
    blockHash: '0x99da85db69ad43a642e7e4f669e64055d0e10448211e879bb5eb2cc548fbc148',
    blockNumber: 15890617,
    contractAddress: null,
    cumulativeGasUsed: 47196,
    from: '0x1727adcce8f11e7b9cbdd065e5ab64158f8bce3b',
    gasUsed: 47196,
    logs: [ [Object] ],
    logsBloom: '0x00200000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000a00000000000000000000000000000200000000000000000000100000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080020000000000000000000000100000000000000000000000000000011000000000000000000000000000000000000000000008000000000000000000000000000010000000000000000000000000000000001000000000000000000000000000',
    status: true,
    to: '0xd1f46ce847a64e69e00097cb63b2143df31a35e9',
    transactionHash: '0x99616076aba89101e5a3fdf2bf42eb27c951d1b88c65538e0a59df2b1e298ea8',
    transactionIndex: 0,
    rawLogs: [ [Object] ]
  },
  logs: [
    {
      address: '0xD1f46CE847a64E69E00097cB63B2143DF31A35e9',
      blockHash: '0x99da85db69ad43a642e7e4f669e64055d0e10448211e879bb5eb2cc548fbc148',
      blockNumber: 15890617,
      logIndex: 0,
      removed: false,
      transactionHash: '0x99616076aba89101e5a3fdf2bf42eb27c951d1b88c65538e0a59df2b1e298ea8',
      transactionIndex: 0,
      id: 'log_317391a9',
      event: 'Approval',
      args: [Result]
    }
  ]
}
configureDomain {
  tx: '0x71519333adcfa1e7c676cee93686415b110f026b5ebbd3ebafefdad5ebd658fc',
  receipt: {
    blockHash: '0xd6a3d7fe1dd6cc9a8474809a548b513210b16a31c7c8207810ddbaaa340dcf7a',
    blockNumber: 15890620,
    contractAddress: null,
    cumulativeGasUsed: 200387,
    from: '0x1727adcce8f11e7b9cbdd065e5ab64158f8bce3b',
    gasUsed: 200387,
    logs: [ [Object] ],
    logsBloom: '0x00200000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000010000000000040801000000000000000010002000008200000000000000000000300000000000000000000000000000020000000000000000000000000000000000000000010000000000000000004000000000000000000000000000000000000000000000000000080000002000000000000000000100000000000000000000000080000051010000002001002000000000800000000004000000008000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000',
    status: true,
    to: '0xd97316a91f6ad9a3288c45653403d5f7a51723a8',
    transactionHash: '0x71519333adcfa1e7c676cee93686415b110f026b5ebbd3ebafefdad5ebd658fc',
    transactionIndex: 0,
    rawLogs: [ [Object], [Object], [Object] ]
  },
  logs: [
    {
      address: '0xd97316a91F6Ad9a3288C45653403d5F7A51723A8',
      blockHash: '0xd6a3d7fe1dd6cc9a8474809a548b513210b16a31c7c8207810ddbaaa340dcf7a',
      blockNumber: 15890620,
      logIndex: 2,
      removed: false,
      transactionHash: '0x71519333adcfa1e7c676cee93686415b110f026b5ebbd3ebafefdad5ebd658fc',
      transactionIndex: 0,
      id: 'log_4e714a61',
      event: 'DomainConfigured',
      args: [Result]
    }
  ]
}
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.12638066 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.12638066 ETH


