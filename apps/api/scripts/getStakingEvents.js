require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const contractJson = require(process.env.CONTRACT_JSON_DIR + 'Staking.json');
const contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);

const getUnStakedStakingEvents = async (wallet) => {
  const stakingContract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    provider
  )
  const stakingWithSigner = stakingContract.connect(wallet);

  const logsUnStaked = await stakingWithSigner.queryFilter("UnStaked", 0);

  const unStakedEvents = logsUnStaked.map(function(ev, index, myArr) {
    console.log('unStakedEvents:', ev.args);
  });

  console.log('getUnStakedStakingEvents :: ');
}

const getStakedStakingEvents = async (wallet) => {
  const stakingContract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    provider
  )
  const stakingWithSigner = stakingContract.connect(wallet);

  const logsStaked = await stakingWithSigner.queryFilter("Staked", 0);

  const stakedEvents = logsStaked.map(function(ev, index, myArr) {
    console.log('stakedEvents:', ev.args);
  });

/*
  const propertyEvents = properties.map(function(ev, index, myArr) {
    const newEvent = {
      'id': ev.args.newPropertyId,
      'URI': ev.args.propertyURI,
      'owner': ev.args.owner
    }
    return newEvent;
  });
*/
  console.log('getStakedStakingEvents :: ');
}


async function run () {
  const mnemonic = process.env.GANACHE_PHRASE;
  const wallet = Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/0`);
  const walletConnected = wallet.connect(provider);
  // console.log("Address: " + wallet.address);
  await getStakedStakingEvents(walletConnected);
  await getUnStakedStakingEvents(walletConnected);

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

run();
