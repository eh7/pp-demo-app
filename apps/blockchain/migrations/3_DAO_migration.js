const MyToken = artifacts.require("MyToken");
const MyGovernor = artifacts.require("MyGovernor");
const web3 = require("web3");
const BN = web3.utils.BN;

module.exports = async function(deployer, network, accounts) {
  // const supply = 1000 * (10 ** 18);
  // const supply = 10000000;
//  const supply = 10000000;
//  await deployer.deploy(MyToken, supply);// * (10 ** 18));
  await deployer.deploy(
    MyToken,
    (web3.utils.toWei("1000000", "ether")).toString()
  );
  //const supply = new BN(web3.utils.toWei("1", "ether"));
  //const supply = BigInt(web3.utils.toWei("1", "ether"));
  //await deployer.deploy(MyToken, supply);// * (10 ** 18));
  // console.log(MyToken.address);

  await deployer.deploy(MyGovernor, MyToken.address);

  /*
  console.log(
    web3.utils.toWei("1", "ether"),
    new BN(web3.utils.toWei("1", "ether")),
    BigInt(web3.utils.toWei("1", "ether"))
  );
  */
};
