const chainId = 5777;

const Staking = require("./contracts/Staking.json");
const Token = require("./contracts/Token.json");

const contractStakingAddress = Staking.networks[chainId].address;
const contractStakingAbi = Staking.abi;

const contractTokenAddress = Token.networks[chainId].address;
const contractTokenAbi = Token.abi;

export {
  contractStakingAddress,
  contractStakingAbi,
  contractTokenAddress,
  contractTokenAbi,
};
