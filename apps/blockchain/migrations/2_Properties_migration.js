const Token = artifacts.require("Token");
const Staking = artifacts.require("Staking");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(Token, 1000);// * (10 ** 18));
  // console.log(Token.address);
  await deployer.deploy(Staking, Token.address);
};
