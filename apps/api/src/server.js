// require('dotenv').config();

// const Web3Staking = require("./services/web3Staking");
const Router = require("./services/router");

async function initServerApi () {

//  const web3Staking = new Web3Staking();
//  const express = require('express');
//  const app = express();

  const router = new Router();
  router.listen();
}

initServerApi();

