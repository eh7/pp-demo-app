require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const contractJson = require('../' + process.env.CONTRACT_JSON_DIR + 'Staking.json');
const contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
const mnemonic = process.env.GANACHE_PHRASE;

module.exports = class Web3Staking {

  constructor () {
    this.provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);
    this.wallet = Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/0`);
    this.walletConnected = this.wallet.connect(this.provider);

    this.stakingContract = new ethers.Contract(
      contractAddress,
      contractJson.abi,
      this.provider
    )
    this.stakingWithSigner = this.stakingContract.connect(this.walletConnected);

    console.log("init done", this.walletConnected.address);
  }

/*
  await getStakedStakingEvents(walletConnected);
  await getUnStakedStakingEvents(walletConnected);
*/

  async getUnStakedStakingEvents () {
    /*
    const stakingContract = new ethers.Contract(
      contractAddress,
      contractJson.abi,
      provider
    )
    const stakingWithSigner = stakingContract.connect(this.walletConnected);
    */

    const logsUnStaked = await this.stakingWithSigner.queryFilter("UnStaked", 0);

    const unStakedEvents = logsUnStaked.map(function(ev, index, myArr) {
      // console.log('unStakedEvents:', ev.args);
      const newEvent = {
        'wallet': ev.args.wallet,
        'amount': ev.args.amount,
        'time': ev.args.time
      }
      return newEvent;
    });

    return unStakedEvents;
  }

  async getStakedStakingEvents () {
    /*
    const stakingContract = new ethers.Contract(
      contractAddress,
      contractJson.abi,
      provider
    )
    const stakingWithSigner = stakingContract.connect(this.walletConnected);
    */

    const logsStaked = await this.stakingWithSigner.queryFilter("Staked", 0);

    const stakedEvents = logsStaked.map(function(ev, index, myArr) {
      // console.log('stakedEvents:', ev.args);
      const newEvent = {
        'wallet': ev.args.wallet,
        'amount': ev.args.amount,
        'time': ev.args.time
      }
      return newEvent;
    });
    
    return stakedEvents;
  }

  async getWallets () {
    /*
    const stakingContract = new ethers.Contract(
      contractAddress,
      contractJson.abi,
      provider
    )
    const stakingWithSigner = stakingContract.connect(this.walletConnected);
    */

    const wallets = await this.stakingWithSigner.getWallets();
    console.log('getWallets :: ', wallets);
    return wallets;
  }

  async activate () {
    /*
    const stakingContract = new ethers.Contract(
      contractAddress,
      contractJson.abi,
      provider
    )
    const stakingWithSigner = stakingContract.connect(this.walletConnected);
    */
    const activate = await this.stakingWithSigner.activate();
    console.log('activate :: ', activate);
    return activate;
  }

  async active () {
    /*
    const stakingContract = new ethers.Contract(
      contractAddress,
      contractJson.abi,
      provider
    )
    const stakingWithSigner = stakingContract.connect(this.walletConnected);
    */
    const active = await this.stakingWithSigner.active();
    console.log('active :: ', active);
    return active;
  }

}
