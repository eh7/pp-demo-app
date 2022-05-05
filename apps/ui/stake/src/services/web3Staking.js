import {
  BigNumber,
  ethers,
  utils,
} from "ethers";

import {
  contractStakingAddress,
  contractStakingAbi,
} from "../conf";

const appData = {
  provider: null,
  address: null,
  signer: null,
  contractStaking: null,
  contractStakingWithSigner: null,
}

async function setupStakingContract () {
  appData.provider = new ethers.providers.Web3Provider(window.ethereum);
  appData.address = await appData.provider.send("eth_requestAccounts", []);
  appData.signer = appData.provider.getSigner();
  appData.contractStaking = new ethers.Contract(
    contractStakingAddress,
    contractStakingAbi,
    appData.provider
  )
  appData.contractStakingWithSigner = appData.contractStaking.connect(
    appData.signer
  );
}

export {
  contractStakingAddress,
};
