const Staking = artifacts.require("Staking");
const Token = artifacts.require("Token");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');
const _ = require('lodash');

const getStakeSettings = async (instance, accounts) => {
  const staked = await instance.staked(accounts[0]);
  const stakedTime = await instance.stakedTime(accounts[0]);
  const unStaked = await instance.unStaked(accounts[0]);
  const unStakedTime = await instance.unStakedTime(accounts[0]);
  console.log(
    staked.toString(),
    stakedTime.toString(),
    unStaked.toString(),
    unStakedTime.toString()
  );
}

contract('Staking', async (accounts) => {

  it('does activate and deactivate work', async () => {
    const token = await Token.deployed();
    const instance = await Staking.deployed();
    assert(await instance.active() === false, "should be not active");
    await instance.activate();
    assert(await instance.active() === true, "should be active");
    await instance.deActivate();
    assert(await instance.active() === false, "should be not active");
    //console.log(await instance.active());
    //console.log(await token.decimals());
  });

  let token;
  let instance;

  it('test initialization', async () => {
    token = await Token.deployed();
    instance = await Staking.deployed();
  });

  it('testing balance is correct for owner', async () => {
    // owner should have balance of
    // (web3.utils.toWei("1000000", "ether")).toString()
    // 
    assert(
      (await token.balanceOf(accounts[0])).toString() === (web3.utils.toWei("1000000", "ether")).toString(),
      "balance should have (web3.utils.toWei(\"1000000\", \"ether\")"
    );
  });

  it('testing stake function modifiers', async () => {
    try {
      const stakeReturn = await instance.stake(
        10,
      );
    } catch (e) {
      assert(e.reason === 'Staking Contract is not active', "Staking contract should be inactive");
    }

    await instance.activate();

    try {
      const stakeReturn = await instance.stake(
        9,
      );
    } catch (e) {
      // console.log(e);
      assert(e.reason === 'stake should be more than 9', "Staking contract should be inactive");
    }

    try {
      const stakeReturn = await instance.stake(
        1000001,
      );
    } catch (e) {
      // console.log(e);
      assert(e.reason === 'stake should be less than 1,000,001', "Staking contract should be inactive");
    }
  });

  it('testing stake function fails on balance lower than stake amount', async () => {
    try {
      const stakeReturn = await instance.stake(
        10,
	{ from: accounts[1] }
      );
    } catch (e) {
      assert(e.reason === 'balance of msg.sender should be equal or more than amount to stake', "Stake token balance to not enough for specied stake amount");
    }
  });

  it('testing stake function', async () => {
    assert(
      (await token.balanceOf(instance.address)).toString() === '0',
      "constract balance does not equal 0",
    );

    await token.approve(instance.address, 10);

    const stakeReturn = await instance.stake(
      10,
    );

    // check Staked event triggered
    truffleAssert.eventEmitted(stakeReturn, 'Staked', (ev) => {
      // console.log(ev);
      // return true;
      return (
        ev.wallet === accounts[0] &&
        ev.amount.toNumber() === 10
      );
    });

    assert(
      (await token.balanceOf(instance.address)).toString() === '10',
      "constract balance does not equal 10",
    );
  
    await getStakeSettings(instance, accounts);

    await token.transfer(accounts[1], 10);
    console.log(
      (await token.balanceOf(accounts[1])).toString()
    );
    await token.approve(instance.address, 10, { from: accounts[1] });
    const stakeReturn1 = await instance.stake(
      10,
      { from: accounts[1] }
    );
    console.log(
      (await token.balanceOf(accounts[1])).toString()
    );

    console.log(
      "Wallets:",
      await instance.getWallets.call()
      // instance
    );

    const getWallets = await instance.getWallets()
    truffleAssert.eventEmitted(getWallets, 'Debug', (ev) => {
      console.log(ev);
//      console.log(ev.balance.toString());
      return true;
    });


/*
    const staked = await instance.staked(accounts[0]);
    const stakedTime = await instance.stakedTime(accounts[0]);
    const unStaked = await instance.unStaked(accounts[0]);
    const unStakedTime = await instance.unStakedTime(accounts[0]);
    console.log(
      staked.toString(),
      stakedTime.toString(),
      unStaked.toString(),
      unStakedTime.toString()
    );
*/
    const unStakeReturn = await instance.unstake();
    // console.log(unStakeReturn);

    // check UnStaked event triggered
    truffleAssert.eventEmitted(unStakeReturn, 'UnStaked', (ev) => {
      // console.log(ev);
      // return true;
      return (
        ev.wallet === accounts[0] &&
        ev.amount.toNumber() === 10
      );
    });

    await getStakeSettings(instance, accounts);

/*
    const staked = await instance.staked(accounts[0]);
    const stakedTime = await instance.stakedTime(accounts[0]);
    const unStaked = await instance.unStaked(accounts[0]);
    const unStakedTime = await instance.unStakedTime(accounts[0]);
    console.log(
      staked.toString(),
      stakedTime.toString(),
      unStaked.toString(),
      unStakedTime.toString()
    );

//    console.log(
//      "constract balance: ",
//      (await token.balanceOf(instance.address)).toString()
//    );
*/

//    truffleAssert.eventEmitted(stakeReturn, 'Debug', (ev) => {
//      console.log(ev.amount.toString());
//      console.log(ev.balance.toString());
//      return true;
//    });

    /*
    await truffleAssert.reverts(
      await instance.stake(
        10,
      ),
      "Staking Contract is not ctive"
    );

    // stake(uint amount)
    const stakeReturn = await instance.stake(
      10,
    );

    await truffleAssert.reverts(
      stakeReturn,
      "Staking Contract is not active"
    );

//      {
//        from: owner
//        // value: web3.utils.toWei('0.1'),
//      }
//    );


    // check Staked event triggered
    truffleAssert.eventEmitted(property, 'Staked', (ev) => {
      console.log(ev);
      // return true;
//      return (
//        ev.owner === owner &&
//        ev.propertyURI === URI &&
//        ev.newPropertyId.toNumber() === propertyId
//      );
    });
    */

  });

});
