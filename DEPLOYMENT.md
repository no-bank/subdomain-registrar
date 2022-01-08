
Starting migrations...
======================
> Network name:    'harmonytestnet'
> Network id:      1666700003
> Block gas limit: 80000000 (0x4c4b400)


2_deploy_contracts.js
=====================

   Replacing 'ENSRegistry'
   -----------------------
   > transaction hash:    0x9c088751201f09ce37f7c87350b252f5eed3afd4818da80d4babac37f4f93ace
   > Blocks: 2            Seconds: 4
   > contract address:    0x4fb1C434101ced0773a3bc77D541B3465023639f
   > block number:        11511519
   > block timestamp:     1624835124
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             135.06167466
   > gas used:            1080210 (0x107b92)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0216042 ETH


   Replacing 'PublicResolver'
   --------------------------
   > transaction hash:    0x6af65140c2503186be038a0a5f31a0156d36692d0cdd9916b4266d00a83d52cd
   > Blocks: 3            Seconds: 4
   > contract address:    0x335b5b3b0Acdf3aFabA00F71a3c7090e73990818
   > block number:        11511524
   > block timestamp:     1624835134
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             135.0031884
   > gas used:            2924313 (0x2c9f19)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05848626 ETH


   Replacing 'BaseRegistrarImplementation'
   ---------------------------------------
   > transaction hash:    0x688ee49353b8fe652463486d7740efa73891b2e5f7537fe86df8c62a65fcad6c
   > Blocks: 3            Seconds: 4
   > contract address:    0x9f67EFeb284A31BA903675F08e9a25F45D0C35cF
   > block number:        11511529
   > block timestamp:     1624835144
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.95430788
   > gas used:            2444026 (0x254afa)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04888052 ETH

Start: Set resolver.one address for main Resolver
End: Set resolver.one address for main Resolver

   Replacing 'DummyOracle'
   -----------------------
   > transaction hash:    0x705b26ef498a5acf4f8525ea897a90ee8ce161a182064cfa69135e8241a131c7
   > Blocks: 2            Seconds: 4
   > contract address:    0x267068ecC3f2292A95E3d17be1b2b485D2Fd3f34
   > block number:        11511539
   > block timestamp:     1624835164
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.94997608
   > gas used:            117801 (0x1cc29)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00235602 ETH


   Replacing 'StablePriceOracle'
   -----------------------------
   > transaction hash:    0xe9d599d2efca13c29f784f28b3bfa2f5f75cf99d786b6d993974761dba019542
   > Blocks: 3            Seconds: 4
   > contract address:    0x565A0a6ad8b72A51561F5Bd1071b5f9972FcF934
   > block number:        11511544
   > block timestamp:     1624835174
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.92675548
   > gas used:            1161030 (0x11b746)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0232206 ETH


   Replacing 'SubdomainStorage'
   ----------------------------
   > transaction hash:    0xe9d22774d8a645b426a93ef9a5f4cc34950043f455276e4189536d709ae8adbb
   > Blocks: 2            Seconds: 4
   > contract address:    0x60B2049277096A7Be61EdAd5F857bDbDba555168
   > block number:        11511548
   > block timestamp:     1624835182
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.9091686
   > gas used:            879344 (0xd6af0)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01758688 ETH


   Replacing 'EthRegistrarSubdomainRegistrar'
   ------------------------------------------
   > transaction hash:    0xf7ca513462caafbdb9c27d3212f72eccd73efb011e0aff54f7860ccc3fcf752f
   > Blocks: 3            Seconds: 4
   > contract address:    0x9eC0d7d32CF5E340044317D5fdD0b1ecc74e43Cd
   > block number:        11511553
   > block timestamp:     1624835192
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.82594376
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
   > transaction hash:    0xb32908b635ae89428317d629ccb53648e34e26557c34f505cc8019c8d32b7c6d
   > Blocks: 2            Seconds: 4
   > contract address:    0x4910256b3A410d3503C6e068b254f626d6C3bE6C
   > block number:        11511605
   > block timestamp:     1624835296
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.77029428
   > gas used:            2193032 (0x217688)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04386064 ETH


   Replacing 'DefaultReverseResolver'
   ----------------------------------
   > transaction hash:    0x95a38b4262a8c067ee28054e658d807f8032d964ebcf008104c4fb135a72c1d3
   > Blocks: 3            Seconds: 5
   > contract address:    0xeCe703e3343E6a169b2760a97254264fB88D1563
   > block number:        11511615
   > block timestamp:     1624835316
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.7615616
   > gas used:            347166 (0x54c1e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00694332 ETH


   Replacing 'ReverseRegistrar'
   ----------------------------
   > transaction hash:    0x72570aa0adbd8311ee299621c6cf9a8ebae65ee6acb8101167e6d0f0f8bb9e90
   > Blocks: 2            Seconds: 4
   > contract address:    0x00a9cFD3977BC5755dddc171E2d6Fc54b88b604b
   > block number:        11511620
   > block timestamp:     1624835326
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.74674432
   > gas used:            740864 (0xb4e00)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01481728 ETH


   Replacing 'Root'
   ----------------
   > transaction hash:    0x3ab56074d903557ed4178fc7ae2eb60f09b5286e6187da00fdd5339913567382
   > Blocks: 2            Seconds: 4
   > contract address:    0xDDcA8e5C4F42771f9Eff8d47fF88A4B3E3B1e2FB
   > block number:        11511633
   > block timestamp:     1624835352
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             134.73222806
   > gas used:            617028 (0x96a44)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01234056 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.33332112 ETH


3_0_register_user_subdomain.js
==============================
Owner account:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
User account:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
---- yuriy.crazy.one registered: 
owner:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B true
address:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B true
available:  false true
nameExpires:  2022-06-27T23:09:52.000Z true
end:  53.992
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
> Final cost:          0.33332112 ETH
