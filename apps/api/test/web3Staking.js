const Web3Staking = require('../src/services/web3Staking');
const assert = require('assert');
const _ = require('underscore');

let web3Staking = null;
/*
const properties = [
  {
    id: 1,
    owner: '0xd03b9c07703bC73ccd1586E202C9DdF5af45e81C',
    URI: 'http://eh7.io/1.json',
  },
  {
    id: 2,
    owner: '0x92dAf44EE49DCdAA21e9dcb90ceb6bd50f20AC1A',
    URI: 'http://eh7.io/2.json',
  },
  {
    id: 3,
    owner: '0x92dAf44EE49DCdAA21e9dcb90ceb6bd50f20AC1A',
    URI: 'http://eh7.io/3.json',
  },
]

const bookings = [
  {
    id: 1,
    checkIn: (new Date("2022-03-12") / 1000),
    checkOut: (new Date("2022-03-13") / 1000),
    propertyId: 1,
    renter: '0x6b1527F6E2248A862061963b8c1BD013AcaCa5A6',
  },
  {
    id: 2,
    checkIn: (new Date("2022-03-12") / 1000),
    checkOut: (new Date("2022-03-13") / 1000),
    propertyId: 2,
    renter: '0x6b1527F6E2248A862061963b8c1BD013AcaCa5A6',
  },
  {
    id: 3,
    checkIn: (new Date("2022-03-17") / 1000),
    checkOut: (new Date("2022-03-19") / 1000),
    propertyId: 3,
    renter: '0x385D0A5969867d1ba7D93B27Da87B539dC23DCE6',
  },
  {
    id: 3,
    checkIn: (new Date("2022-03-17") / 1000),
    checkOut: (new Date("2022-03-19") / 1000),
    propertyId: 2,
    renter: '0x385D0A5969867d1ba7D93B27Da87B539dC23DCE6',
  },
]
*/

describe('web3Staking service testing', async function () {

  before(async function () {
//    mongod = await MongoMemoryServer.create();
//    uri = mongod.getUri() + 'testing';
  });

  after(async function () {
//    await database.mongoose.connection.close();
//    await mongod.stop();
  });

  /*
  it.skip('initialize database', async function () {
//    database = new Database(uri);
//    assert(database.mongoose.connection.readyState === 2, "Mongoose Connected");
  });
  */

  it('initialize web3Staking', async function () {
    web3Staking = new Web3Staking();
    assert.ok(
      await web3Staking.provider.ready,
      "web3Staking ethers connection ready"
    );
    assert.ok(
      web3Staking.stakingWithSigner,
      "web3Staking ethers connection ready this.stakingWithSigner,"
    );
  });

  it('check is staking active', async function () {
    if (await web3Staking.active()) {
      assert.ok(
        (await web3Staking.active()),
        "web3Staking.active is not true!!"
      );
    } else {
      assert.ok(
        (await web3Staking.activate()),
        "web3Staking.activate"
      );
      assert.ok(
        (await web3Staking.active()),
        "web3Staking.active is not true!!"
      );
    }
  });

  it('check stake() function', async function () {
    console.log(
      (await web3Staking.stake(10)),
      "check stake(10) function"
    );
  });

  it('check getWallets() function', async function () {
    assert.ok(
      (await web3Staking.getWallets()).length > 0,
      "check getWallets() function has no data"
    );
  });

  it('deactivate staking active', async function () {
    assert.ok(
      (await web3Staking.deactivate()),
      "web3Staking.deactivate"
    );
    assert.ok(
      (await web3Staking.active()) === false,
      "web3Staking.active is not false!!"
    );
  });

  it('getStakedStakingEvents', async function () {
    assert.ok(
      (await web3Staking.getStakedStakingEvents()).length > 0,
      "web3Staking.getStakedStakingEvents not greater than 0"
    );
  });

  it('getUnStakedStakingEvents', async function () {
    assert.ok(
      (await web3Staking.getUnStakedStakingEvents()).length > 0,
      "web3Staking.getUnStakedStakingEvents not greater than 0"
    );
  });

});

