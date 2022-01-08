const ETHRegistrarController = artifacts.require(
  "@ensdomains/ethregistrar/ETHRegistrarController"
);
const PublicResolver = artifacts.require("@ensdomains/resolver/PublicResolver");
const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");
const namehash = require("eth-ens-namehash");

const sleep = (sec) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * sec));

module.exports = async function (deployer, network, accounts) {
  if (network !== "local") {
    console.log("---- ONLY FOR LOCAL");
    return;
  }

  console.log("Controller address: ", ETHRegistrarController.address);
  console.log("Resolver address: ", PublicResolver.address);

  console.log("User account: ", accounts[0]);

  const domain = "testing-123";
  const duration = 60 * 60 * 24 * 365; // 1 year

  const controller = await ETHRegistrarController.at(
    ETHRegistrarController.address
  );
  const resolver = await PublicResolver.at(PublicResolver.address);

  console.log("-- Test price Oracle");

  console.log("1 char", +(await controller.rentPrice("a", duration)) / 1e18);
  console.log("2 char", +(await controller.rentPrice("aa", duration)) / 1e18);
  console.log("3 char", +(await controller.rentPrice("aaa", duration)) / 1e18);
  console.log("4 char", +(await controller.rentPrice("aaaa", duration)) / 1e18);
  console.log(
    "5 char",
    +(await controller.rentPrice("aaaaa", duration)) / 1e18
  );
  console.log(
    "6 char",
    +(await controller.rentPrice("aaaaaa", duration)) / 1e18
  );
  console.log(
    "7 char",
    +(await controller.rentPrice("aaaaaaa", duration)) / 1e18
  );
  console.log(
    "8 char",
    +(await controller.rentPrice("aaaaaaaa", duration)) / 1e18
  );
  console.log(
    "9 char",
    +(await controller.rentPrice("aaaaaaaaa", duration)) / 1e18
  );
  console.log(
    "10 char",
    +(await controller.rentPrice("aaaaaaaaaa", duration)) / 1e18
  );

  console.log("New domain: ", domain);

  const rentPrice = await controller.rentPrice(domain, duration);

  console.log("rentPrice: ", Number(rentPrice) / 1e18);

  console.log("1 - makeCommitmentWithConfig");

  const commitment = await controller.makeCommitmentWithConfig(
    domain,
    accounts[0],
    "0xe6bcec774acd54b71bd49ca5570f4bae074e7d983cad8a3162b480219adecdea",
    resolver.address,
    accounts[0],
    { from: accounts[0] }
  );

  console.log("2 - commit: ", commitment);

  await controller.commit(commitment, { from: accounts[0] });

  console.log("3 - sleep 61 sec");

  await sleep(61);

  console.log("4 - registerWithConfig");

  await controller.registerWithConfig(
    domain,
    accounts[0],
    duration,
    "0xe6bcec774acd54b71bd49ca5570f4bae074e7d983cad8a3162b480219adecdea",
    resolver.address,
    accounts[0],
    { from: accounts[0], value: rentPrice }
  );

  console.log("5 - success");

  const ens = await ENS.at(ENS.address);

  const address = await resolver.addr(namehash.hash(domain + ".one"));
  const owner = await ens.owner(namehash.hash(domain + ".one"));

  console.log("6 - resolved address: ", address, address === accounts[0]);
  console.log("6 - resolved owner: ", owner, owner === accounts[0]);
};
