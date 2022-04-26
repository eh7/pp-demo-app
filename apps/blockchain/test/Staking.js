const Staking = artifacts.require("Staking");
const Token = artifacts.require("Token");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');
const _ = require('lodash');

contract('Staking', async (accounts) => {

  it('does activate and deactivate work', async () => {
    const token = await Token.deployed();
    const instance = await Staking.deployed();
  //   console.log(instance);
     console.log(await instance.owner());
     console.log(await instance.active());
     await instance.activate();
     console.log(await instance.active());
     await instance.deActivate();
     console.log(await instance.active());
     console.log(await token.decimals());
// TODO :: transfer test tokens to accounts for tests 
// TODO :: test functions get correct responses
    // console.log(token);
    // console.log(await instance.getWallets());
    // console.log(await .getWallets());
    // console.log(await token.totalSupply());
  });

  it('does wallet work', async () => {
    const token = await Token.deployed();
    const instance = await Staking.deployed();
    console.log(
      (await token.balanceOf(accounts[0])).toNumber()
    );
  });

});
