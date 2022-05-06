require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const contractJson = require(process.env.CONTRACT_JSON_DIR + 'Token.json');
const contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);

const getTokenBalance = async (wallet) => {
  const stakingContract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    provider
  )
  //const stakingWithSigner = stakingContract.connect(wallet);

  const balance = await stakingContract.balanceOf(wallet);
  console.log('address :: ', wallet);
  console.log('balance :: ', balance.toString());
}


async function run (owner) {
  await getTokenBalance(owner);

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
console.log(process.argv[1] + " " + process.argv[2]);
run(
  (process.argv[2]) ? process.argv[2] : '0xd03b9c07703bc73ccd1586e202c9ddf5af45e81c'
);
