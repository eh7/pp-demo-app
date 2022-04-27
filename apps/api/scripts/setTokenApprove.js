require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const stakingContractJson = require(process.env.CONTRACT_JSON_DIR + 'Staking.json');
const stakingContractAddress = stakingContractJson.networks[process.env.GANACHE_NETWORK_ID].address;

const contractJson = require(process.env.CONTRACT_JSON_DIR + 'Token.json');
const contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);

const setTokenApprove = async (wallet, amount) => {
  const tokenContract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    provider
  )
  const tokenWithSigner = tokenContract.connect(wallet);
  // await tokenWithSigner.approve(instance.address, 10);

  console.log(
    'approve:',
    await tokenWithSigner.approve(
      stakingContractAddress,
      amount,
    )
  );

  const balance = await tokenWithSigner.balanceOf(wallet.address);
  console.log('balance :: ', balance.toString());
}


async function run (owner, amount) {
  const mnemonic = process.env.GANACHE_PHRASE;
  const wallet = Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${owner}`);
  const walletConnected = wallet.connect(provider);
  // console.log("Address: " + wallet.address);
  await setTokenApprove(walletConnected, amount);

/*
  const accountsArray = await getAccounts();
  const accounts = accountsArray[0];
  const pkeys = accountsArray[1];
  // const walletPk = new ethers.Wallet(pkeys[0]);
  const walletPk = new ethers.Wallet(pkeys[
    (_ownerId) ? _ownerId : 0
  ]);
  const wallet = walletPk.connect(provider);
  console.log('walletPk.address:', walletPk.address);
*/
}

//run(0);
//
console.log(process.argv[2]);
run(
  (process.argv[2]) ? process.argv[2] : 0,
  (process.argv[3]) ? process.argv[3] : 10 
);
