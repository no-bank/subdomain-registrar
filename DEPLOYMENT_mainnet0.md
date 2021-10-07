
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
> Network name:    'harmonymainnet'
> Network id:      1666600000
> Block gas limit: 80000000 (0x4c4b400)


5_register_sefwallet.js
=======================
NETWORK harmonymainnet
registry 0x3fa4135B88cE1035Fed373F0801118a3340B37e7
Base Address 0x27f18e91DB75C57aE00B75F0103F8036ee23E330
Public Resolver 0x48D421c223E32B68a8973ef05e1314C97BBbc4bE
Controller at address= 0xbed36523cc78c8093cd0e4a6730e4c60bdc48b05

   Deploying 'DummyOracle'
   -----------------------
   > transaction hash:    0xa7afff03d5551d5ac29757b8037594d06d2622dee4f0a7fd567a9b7f0088ea22
   > Blocks: 2            Seconds: 4
   > contract address:    0xAf506813685fF41206506822ea9099C10dF8BF71
   > block number:        17902279
   > block timestamp:     1633612595
   > account:             0x257455D4AB8d71E813E36942Bba7BbD1B7f15031
   > balance:             263.050327573109648396
   > gas used:            117801 (0x1cc29)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00235602 ETH


   Deploying 'StablePriceOracle'
   -----------------------------
   > transaction hash:    0xbe3d9d4cbfbc06ba1dcc7427a0b0d2ea45d3c2cad3c40af6ea42c16933497a32
   > Blocks: 2            Seconds: 4
   > contract address:    0xA637eF7b0802146682a84A938D07eE6dcd5F1D54
   > block number:        17902283
   > block timestamp:     1633612603
   > account:             0x257455D4AB8d71E813E36942Bba7BbD1B7f15031
   > balance:             263.027114653109648396
   > gas used:            1160646 (0x11b5c6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02321292 ETH


   Deploying 'SubdomainStorage'
   ----------------------------
   > transaction hash:    0xada6a3290dacad402b1b6e295218b07eb5f7c756fb0578ca5683652a8c31616f
   > Blocks: 2            Seconds: 4
   > contract address:    0x6e0cd3D11dA20a2533f1EEE89c3D3571ae609281
   > block number:        17902287
   > block timestamp:     1633612611
   > account:             0x257455D4AB8d71E813E36942Bba7BbD1B7f15031
   > balance:             263.009527773109648396
   > gas used:            879344 (0xd6af0)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01758688 ETH


   Deploying 'EthRegistrarSubdomainRegistrar'
   ------------------------------------------
   > transaction hash:    0xac265d5fb7d81936c692f511b864adf51f347fbcc4a3b38cbe7ea394347896fa
   > Blocks: 2            Seconds: 4
   > contract address:    0x58B1c498A734b27D21A6E22eE11c7454bf95e01E
   > block number:        17902291
   > block timestamp:     1633612619
   > account:             0x257455D4AB8d71E813E36942Bba7BbD1B7f15031
   > balance:             262.926302933109648396
   > gas used:            4161242 (0x3f7eda)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08322484 ETH

subdomainRegistrar 0x58B1c498A734b27D21A6E22eE11c7454bf95e01E
Available on controller= true
rentprice= 31709791983764588000
Commitment 0x30d75fb6c7ee829f2c235c628bced3ac195db041a892e742ea1590559d63ca1c
0x30d75fb6c7ee829f2c235c628bced3ac195db041a892e742ea1590559d63ca1c 0x82e0b99642acf2ae6b78aa32b296eb9fb831c242777b7499d6cc3ea20b19f3dd
sleep 70sec
registered 0xad7a6be5ea738212426092bcf619faca781c993ab4cf707405d238470836867e
set resolver 0x650e4913e948c267ef0739c5f620a03dab62f072d4ff66006ee997a2c58cec3c
set address 0x7950f2a9872431f28956d497b72d56baee493022edd8a5a435e7590fcf837e20
Owner of sefwallet= 0x257455D4AB8d71E813E36942Bba7BbD1B7f15031
{
  tx: '0x3e06b9dfa4c2a55423630f681ee7d8f24b75d8bfcc9afb2ca4628d6237c6e708',
  receipt: {
    blockHash: '0x182a2b1f521e6e56203304f83797d48b13ed1ee257c077c59c9c6e1d0c46d518',
    blockNumber: 17902345,
    contractAddress: null,
    cumulativeGasUsed: 47196,
    from: '0x257455d4ab8d71e813e36942bba7bbd1b7f15031',
    gasUsed: 47196,
    logs: [ [Object] ],
    logsBloom: '0x00200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000001000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000008000000000000000000000000000000000020000000000000000000000000000400000000000000000000000000000000400020000000000000000000000000000000000000000000000000000000000000010000000000000000000000000004000001000004000000800000000000000',
    status: true,
    to: '0x27f18e91db75c57ae00b75f0103f8036ee23e330',
    transactionHash: '0x3e06b9dfa4c2a55423630f681ee7d8f24b75d8bfcc9afb2ca4628d6237c6e708',
    transactionIndex: 0,
    rawLogs: [ [Object] ]
  },
  logs: [
    {
      address: '0x27f18e91DB75C57aE00B75F0103F8036ee23E330',
      blockHash: '0x182a2b1f521e6e56203304f83797d48b13ed1ee257c077c59c9c6e1d0c46d518',
      blockNumber: 17902345,
      logIndex: 0,
      removed: false,
      transactionHash: '0x3e06b9dfa4c2a55423630f681ee7d8f24b75d8bfcc9afb2ca4628d6237c6e708',
      transactionIndex: 0,
      id: 'log_54a4b6c6',
      event: 'Approval',
      args: [Result]
    }
  ]
}
configureDomain {
  tx: '0xde11da0944f6be7d85014389a0ad45971f762cd70f809144e6e33950062ea80d',
  receipt: {
    blockHash: '0x4ae173a0aeeb18fb3518fa8681cfd036c63720fcb4df16a443233099b77f3e61',
    blockNumber: 17902348,
    contractAddress: null,
    cumulativeGasUsed: 185387,
    from: '0x257455d4ab8d71e813e36942bba7bbd1b7f15031',
    gasUsed: 185387,
    logs: [ [Object] ],
    logsBloom: '0x00200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040010000000000048000000000000000010000002000008000001000000000000000300000000000000000400000000000000000000000000000000000000000000000000100010000002000000000000000000000000000000008000000000000000000000000040000000000002000000000000000000000000400000000000000000000000040000000400021002000000000800000000004000000000000000000000000000000000000000000000000000000000000000004000001000004000000800000000000000',
    status: true,
    to: '0x58b1c498a734b27d21a6e22ee11c7454bf95e01e',
    transactionHash: '0xde11da0944f6be7d85014389a0ad45971f762cd70f809144e6e33950062ea80d',
    transactionIndex: 0,
    rawLogs: [ [Object], [Object], [Object] ]
  },
  logs: [
    {
      address: '0x58B1c498A734b27D21A6E22eE11c7454bf95e01E',
      blockHash: '0x4ae173a0aeeb18fb3518fa8681cfd036c63720fcb4df16a443233099b77f3e61',
      blockNumber: 17902348,
      logIndex: 2,
      removed: false,
      transactionHash: '0xde11da0944f6be7d85014389a0ad45971f762cd70f809144e6e33950062ea80d',
      transactionIndex: 0,
      id: 'log_90e5e760',
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


Using network 'harmonymainnet'.

Using registry= 0x3fa4135B88cE1035Fed373F0801118a3340B37e7 sefwallet.one
subregistrar? 0x58B1c498A734b27D21A6E22eE11c7454bf95e01E
{
  address: '0x0000000000000000000000000000000000000000',
  rentPrice: '1000000000000000000',
  subdomainRegistrar: '0x58B1c498A734b27D21A6E22eE11c7454bf95e01E'
}
ReferenceError: ens_address is not defined
    at module.exports (/home/quoc/Projects/subdomain-registrar/scripts/test_register.js:78:41)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
Using network 'harmonymainnet'.

Using registry= 0x3fa4135B88cE1035Fed373F0801118a3340B37e7 sefwallet.one
subregistrar? 0x58B1c498A734b27D21A6E22eE11c7454bf95e01E
{
  address: '0x0000000000000000000000000000000000000000',
  rentPrice: '1000000000000000000',
  subdomainRegistrar: '0x58B1c498A734b27D21A6E22eE11c7454bf95e01E'
}
Public Resolver 0x48D421c223E32B68a8973ef05e1314C97BBbc4bE
Resolver= 0x48D421c223E32B68a8973ef05e1314C97BBbc4bE
{
  tx: '0x37a3f67ae628da8fcb46c8f2d8aa382c5ebe7e6a2edfffcfbc809cfc8304caf9',
  receipt: {
    blockHash: '0x5de10863d41ce5842f433754cd403cede9098e9e2f769913f881069cdadc05bb',
    blockNumber: 17902671,
    contractAddress: null,
    cumulativeGasUsed: 195814,
    from: '0x257455d4ab8d71e813e36942bba7bbd1b7f15031',
    gasUsed: 195814,
    logs: [ [Object] ],
    logsBloom: '0x00200000000000000000020100000100000000000100000000000000100000008000000000000000800000000000100000000000040010000000000008020000000000000010000040000000000000000000000004000100080000000000000400000000000000000004000300008004000000000400000000100000020000000000000000000000000100000010000000000000000000010200000040000200000004000002000028000000040000000004000000000000008000040000000400020000000000000000000000004000000000000000000000000000000000000000000002000000000000000000004000001000000000000100000000000000',
    status: true,
    to: '0x58b1c498a734b27d21a6e22ee11c7454bf95e01e',
    transactionHash: '0x37a3f67ae628da8fcb46c8f2d8aa382c5ebe7e6a2edfffcfbc809cfc8304caf9',
    transactionIndex: 0,
    rawLogs: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  },
  logs: [
    {
      address: '0x58B1c498A734b27D21A6E22eE11c7454bf95e01E',
      blockHash: '0x5de10863d41ce5842f433754cd403cede9098e9e2f769913f881069cdadc05bb',
      blockNumber: 17902671,
      logIndex: 6,
      removed: false,
      transactionHash: '0x37a3f67ae628da8fcb46c8f2d8aa382c5ebe7e6a2edfffcfbc809cfc8304caf9',
      transactionIndex: 0,
      id: 'log_83786701',
      event: 'NewRegistration',
      args: [Result]
    }
  ]
}
Using network 'harmonymainnet'.

Using registry= 0x3fa4135B88cE1035Fed373F0801118a3340B37e7 sefwallet.one
{ address: '0x257455D4AB8d71E813E36942Bba7BbD1B7f15031' }
