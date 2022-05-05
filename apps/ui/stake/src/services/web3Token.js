import {
  BigNumber,
  ethers,
  utils,
} from "ethers";

import {
  contractTokenAddress,
  contractTokenAbi,
} from "../conf";

async function getAddress () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const address = await provider.send("eth_requestAccounts", []);
  return address;
}

async function getBalance () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const address = await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const contractToken = new ethers.Contract(
    contractTokenAddress,
    contractTokenAbi,
    provider
  )
  const contractTokenWithSigner = contractToken.connect(signer);

  const balance = await contractToken.balanceOf(
    address
  );

  return balance;
}

export {
  contractTokenAddress,
  getAddress,
  getBalance,
};
