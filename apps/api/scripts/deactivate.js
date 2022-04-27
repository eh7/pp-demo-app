require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const contractJson = require(process.env.CONTRACT_JSON_DIR + 'Staking.json');
const contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);

const activate = async (wallet) => {
  const stakingContract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    provider
  )
  const stakingWithSigner = stakingContract.connect(wallet);

  const activate_func = await stakingWithSigner.deActivate();
  // console.log('activate_func :: ', activate_func);

  let active = await stakingWithSigner.active();
  console.log('active:', active);

//  active = await stakingWithSigner.active();
//  console.log('active:', active);
}


async function run (owner) {
  const mnemonic = process.env.GANACHE_PHRASE;
  const wallet = Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${owner}`);
  const walletConnected = wallet.connect(provider);
  // console.log("Address: " + wallet.address);
  await activate(walletConnected);
}

run(0);
