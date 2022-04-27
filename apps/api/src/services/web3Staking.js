require('dotenv').config();

const { ethers } = require('ethers');
const Wallet = ethers.Wallet;

const mnemonic = process.env.GANACHE_PHRASE;
//const wallet = Wallet.fromMnemonic(mnemonic);//, "m/44’/60’/0’/0/1");
const wallet0 = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");
const wallet1 = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/1");
const wallet2 = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/2");
const wallet3 = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/3");
console.log("Address0: " + wallet0.address);
console.log("Address0: " + wallet0.privateKey);
console.log("Address0: " + wallet0.publicKey);
console.log("Address1: " + wallet1.address);
console.log("Address2: " + wallet2.address);
console.log("Address3: " + wallet3.address);

//const HDWallet = require("@truffle/hdwallet-provider");
//const HDKey = require('hdkey');
//const bip39 = require('bip39');
//const Utils  = require('ethereumjs-utils');

//var Web3 = require('web3');
//let web3Provider = null;
//if (process.env.ETH_ENV === 'development') {
//  web3Provider = new Web3.providers.HttpProvider(process.env.RINKEBY_URI)
//} else {
//  web3Provider = new Web3.providers.HttpProvider(process.env.GANACHE_URI)
//}
//const web3 = new Web3(web3Provider);

//console.log(web3Provider);
//process.exit();

module.exports = class Web3Staking {

}
