require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const contractJson = require(process.env.CONTRACT_JSON_DIR + 'Token.json');
const contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);

const tokenSendTo = async (wallet, reciever, amount) => {
  const stakingContract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    provider
  )
  const tokenContractWithSigner = stakingContract.connect(wallet);

  // const balance = await tokenContractWithSigner.balanceOf(wallet.address);
  console.log('reciever amount :: ', reciever.address, amount);
  const transfer = await tokenContractWithSigner.transfer(reciever.address, amount);
  console.log('transfer :: ', transfer);
}


async function run (sender, reciever, amount) {
  const mnemonic = process.env.GANACHE_PHRASE;
  const wallet = Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${sender}`);
  const walletConnected = wallet.connect(provider);
  // console.log("Address: " + wallet.address);

  const walletRecieve = Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${reciever}`);
  const walletRecieveConnected = walletRecieve.connect(provider);

  await tokenSendTo(walletConnected, walletRecieveConnected, amount);

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
console.log(
  `${process.argv[0]} ${process.argv[1]} <sender> <reciever> <amount>\n`,
);
if (!process.argv[4]) {
  process.exit(1);
}

run(
  (process.argv[2]) ? process.argv[2] : 0,
  (process.argv[3]) ? process.argv[3] : 1,
  (process.argv[4]) ? process.argv[4] : 10,
);
