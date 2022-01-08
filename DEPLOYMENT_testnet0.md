Starting migrations...
======================
> Network name:    'harmonytestnet0'
> Network id:      1666700000
> Block gas limit: 80000000 (0x4c4b400)


2_deploy_contracts.js
=====================

   Deploying 'ENSRegistry'
   -----------------------
   > transaction hash:    0x5ea55ba374e8abdde9ed8b9702c0738978a8d550f0cfca06be0db1abb5a368e9
   > Blocks: 3            Seconds: 4
   > contract address:    0x51766DEF619112F76dF1FD7C361e0C6F47eE19de
   > block number:        12862153
   > block timestamp:     1627488516
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             325.189838641510120509
   > gas used:            1080210 (0x107b92)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0216042 ETH


   Deploying 'PublicResolver'
   --------------------------
   > transaction hash:    0x3062f6e3a3550cf61bae27c31e431850d99986c8c3240332ad31c9ed6971bbe5
   > Blocks: 3            Seconds: 4
   > contract address:    0xf046697010509cc5BeB952eF4CeD1dE210a7977f
   > block number:        12862158
   > block timestamp:     1627488526
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             325.131352381510120509
   > gas used:            2924313 (0x2c9f19)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05848626 ETH

ENS= 0x51766DEF619112F76dF1FD7C361e0C6F47eE19de

   Deploying 'BaseRegistrarImplementation'
   ---------------------------------------
   > transaction hash:    0xdf1fc22ffe6a4c86c5b923a9be53aaa69e47615beda69423ec6d4ae9406ebe96
   > Blocks: 2            Seconds: 4
   > contract address:    0x61ddFeff86923B39207e2C0A50977f6A76C73C7B
   > block number:        12862163
   > block timestamp:     1627488536
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             325.082471861510120509
   > gas used:            2444026 (0x254afa)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04888052 ETH

Start: Set resolver.one address for main Resolver
End: Set resolver.one address for main Resolver

   Deploying 'DummyOracle'
   -----------------------
   > transaction hash:    0x56e690d5cf779e54be8f299763f67cc3a5b501a7ed4ea98e51c5d4c741a28cc9
   > Blocks: 3            Seconds: 4
   > contract address:    0x4587c6c3d333fEc76689b666872484E6b71a19eF
   > block number:        12862174
   > block timestamp:     1627488558
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             325.078140061510120509
   > gas used:            117801 (0x1cc29)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00235602 ETH


   Deploying 'StablePriceOracle'
   -----------------------------
   > transaction hash:    0xc45ab1c328474299281050d86f7f2c775aa582ff41bf239ed0d8bba7092fa2b6
   > Blocks: 3            Seconds: 4
   > contract address:    0x0EE4a9033F2483c268a0C314003b8a134361a026
   > block number:        12862179
   > block timestamp:     1627488568
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             325.054919461510120509
   > gas used:            1161030 (0x11b746)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0232206 ETH


   Deploying 'SubdomainStorage'
   ----------------------------
   > transaction hash:    0x06164d201621dcadad9eb3b39a3e3c36afe6e32887576f088a3ed516f5f17ef2
   > Blocks: 2            Seconds: 4
   > contract address:    0xa1449cCdD4e45479f27bcd19bbFF490A37640b69
   > block number:        12862184
   > block timestamp:     1627488578
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             325.037332581510120509
   > gas used:            879344 (0xd6af0)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01758688 ETH


   Deploying 'EthRegistrarSubdomainRegistrar'
   ------------------------------------------
   > transaction hash:    0x52695f508b571645ee32106f0d1407a57882701e6012eefe8e2755a9de197fd3
   > Blocks: 2            Seconds: 4
   > contract address:    0x726b97602bf97615650E358570d36b259197DA47
   > block number:        12862189
   > block timestamp:     1627488588
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             324.954107981510120509
   > gas used:            4161230 (0x3f7ece)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0832246 ETH

registrar addController accounts[0]
register resolver
ens.setResolver resolver.one
ownedResolver.setAddr resolver.one
registrar.register crazy
ens.setResolver crazy.one
ownedResolver.setAddr crazy.one
registrar.approve crazy
registrar.removeController accounts[0]

   Deploying 'ETHRegistrarController'
   ----------------------------------
   > transaction hash:    0xedc1427cc1700c4d03bb16345a0cd1d1cdac78f27b72fafb2e768798889f035c
   > Blocks: 2            Seconds: 4
   > contract address:    0x82ee6596D7E30d384AF9F7A0552fCa55adD7A008
   > block number:        12862241
   > block timestamp:     1627488692
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             324.898458741510120509
   > gas used:            2193020 (0x21767c)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0438604 ETH


   Deploying 'DefaultReverseResolver'
   ----------------------------------
   > transaction hash:    0xd5f5ae3c132a1a78a12b493ae0688e6df1d8e8ef4f4cafb53ffa7ca222dfb373
   > Blocks: 3            Seconds: 4
   > contract address:    0x6cD5Aaf909B105E1F63356a6A0b9cD33958bc855
   > block number:        12862251
   > block timestamp:     1627488712
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             324.889726061510120509
   > gas used:            347166 (0x54c1e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00694332 ETH


   Deploying 'ReverseRegistrar'
   ----------------------------
   > transaction hash:    0x15ce9d1bbd6ef2d7d6e7fd729890728ecc66518adf77b84c715cccc892847537
   > Blocks: 2            Seconds: 4
   > contract address:    0xd3B15781cde2e4d4584949438F73fda38e72bf82
   > block number:        12862256
   > block timestamp:     1627488722
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             324.874908781510120509
   > gas used:            740864 (0xb4e00)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01481728 ETH


   Deploying 'Root'
   ----------------
   > transaction hash:    0x3c4217e0f2a42b36a24828c9875ce313b981ac4b93fa89cc590694eb3e4015ea
   > Blocks: 2            Seconds: 4
   > contract address:    0x9e51e6546bB58bc42C5C456B18606f23DCf3879C
   > block number:        12862268
   > block timestamp:     1627488746
   > account:             0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
   > balance:             324.860392281510120509
   > gas used:            617028 (0x96a44)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01234056 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.33332064 ETH


3_0_register_user_subdomain.js
==============================
Owner account:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
User account:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B
---- yuriy.crazy.one registered: 
owner:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B true
address:  0x1727adCCe8F11E7b9cbDd065e5ab64158F8BcE3B true
available:  false true
nameExpires:  2022-07-28T16:13:08.000Z true
end:  54.103
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
> Final cost:          0.33332064 ETH
