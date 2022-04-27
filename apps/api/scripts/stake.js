require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const contractJson = require(process.env.CONTRACT_JSON_DIR + 'Staking.json');
const contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);

const addStake = async (amount, wallet) => {
  const stakingContract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    provider
  )
  const stakingWithSigner = stakingContract.connect(wallet);

  const stake = stakingWithSigner.stake(
    amount
  );
  console.log('Add Stake :: ' + stake);
  return stake;
}


async function run (amount, owner) {
  const mnemonic = process.env.GANACHE_PHRASE;
  const wallet = Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${owner}`);
  // console.log("Address: " + wallet.address);
  await addStake(amount, wallet);
}

if (!process.argv[3]) {
  console.log(`USAGE: node ${process.argv[1]} <amount> <OWNER_ID (0-9)>`);
} else {
  const amount = process.argv[2];
  const ownerId = process.argv[3];

  console.log("RUNNING WITH: ", amount, owner);

  run(amount, owner);
}
