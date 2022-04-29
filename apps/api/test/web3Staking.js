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

  it.skip('initialize database', async function () {
//    database = new Database(uri);
//    assert(database.mongoose.connection.readyState === 2, "Mongoose Connected");
    /*
    await  properties.forEach(async (property) => {
      await database.saveProperty(propertiy);
    });
    await bookings.forEach(async (booking) => {
      await database.saveBooking(booking);
    });
    */
  });

  it('initialize web3Staking', async function () {
    web3Staking = new Web3Staking();
//    console.log(await web3Staking.provider.getBlock());
//    console.log(await web3Staking.walletConnected.provider.getBlock(1));
    console.log(await web3Staking.walletConnected.provider.getNetwork());
    assert(
      web3Staking.walletConnected.provider.connection.url === 'http://127.0.0.1:7545',
      "web3Staking initialized okay"
    );
//    assert(
//      await web3Staking.web3.eth.net.isListening(),
//      "web3Staking initialized okay"
//    );
  });

  it.skip('getPropertyEvents', async function () {
    const propertyAddedList = await web3Staking.getPropertyEvents();
    console.log(propertyAddedList.length);
  });
	
//    const propertyBookedList = await this.getPropertyBookingEvents();

/*
  it('getPastPropertiesLogs', async function () {
    const propertyAddedEvents = await web3Staking.getPastPropertiesLogs();
    console.log(propertyAddedEvents);
  });

  const property = {
    id: 1,
    owner: '0xd03b9c07703bC73ccd1586E202C9DdF5af45e81C',
    URI: 'http://eh7.io/1.json',
  }

  const booking = {
    id: 1,
    checkIn: (new Date("2022-03-12") / 1000),
    checkOut: (new Date("2022-03-13") / 1000),
    propertyId: 1,
    renter: '0x6b1527F6E2248A862061963b8c1BD013AcaCa5A6',
  }

  before(async function () {
    mongod = await MongoMemoryServer.create();
    uri = mongod.getUri() + 'testing';
  });

  after(async function () {
    await database.mongoose.connection.close();
    await mongod.stop();
  });

  it('initialize', async function () {
    database = new Database(uri);
    assert(database.mongoose.connection.readyState === 2, "Mongoose Connected");
  });

  it('dropProperties', async function () {
    const dropProperties = await database.dropProperties();
    assert(dropProperties.acknowledged, "dropProperties worked");
  });

  it('dropBookings', async function () {
    const dropBookings = await database.dropBookings();
    assert(dropBookings.acknowledged, "dropBookings worked");
  });

  it('getProperties', async function () {
    const getProperties = await database.getProperties();
    assert(_.isEqual(getProperties, []), "getProperties worked")
  });

  it('getBookings', async function () {
    const getBookings = await database.getBookings();
    assert(_.isEqual(getBookings, []), "getBookings worked")
  });

  it('saveProperty(propertyData)', async function () {
    const saveProperty = await database.saveProperty(property);
    assert(
      _.isEqual(saveProperty.id, property.id),
      "saveProperty worked - id okay"
    );
    assert(
      _.isEqual(saveProperty.owner, property.owner),
      "saveProperty worked - owner okay"
    );
    assert(
      _.isEqual(saveProperty.URI, property.URI),
      "saveProperty worked - URI okay"
    );
  });

  it('getProperty(id)', async function () {
    const getProperty = await database.getProperty(1);
    assert(
      _.isEqual(getProperty.id, property.id),
      "getProperty worked - id okay"
    );
    assert(
      _.isEqual(getProperty.owner, property.owner),
      "getProperty worked - owner okay"
    );
    assert(
      _.isEqual(getProperty.URI, property.URI),
      "getProperty worked - URI okay"
    );
  });

  it('getPropertiesForOwner(id)', async function () {
    const getPropertiesForOwner = await database.getPropertiesForOwner(
      property.owner
    );
    assert(
      getPropertiesForOwner.length === 1,
      "1 property in Properties collection"
    );
    getPropertiesForOwner.map((p, i) => {
      assert(
        p.URI == property.URI,
        "returned property URI equals URI"
      );
      assert(
        p.owner == property.owner,
        "returned property owner equals owner"
      );
    });
  });

  // async saveBooking (data) {
  it('saveBooking(propertyData)', async function () {
    const saveBooking = await database.saveBooking(booking);
    assert(
      _.isEqual(saveBooking.id, booking.id),
      "saveBooking worked - id okay"
    );
    assert(
      _.isEqual(saveBooking.renter, booking.renter),
      "saveBooking worked - owner okay"
    );
    assert(
      _.isEqual(saveBooking.propertyId, booking.propertyId),
      "saveBooking worked - propertyId okay"
    );
    assert(
      saveBooking.checkIn === booking.checkIn &&
      saveBooking.checkOut === booking.checkOut,
      "saveBooking worked - checkIn and checkOut okay"
    );
  });

  it('getBooking(id)', async function () {
    const getBooking = await database.getBooking(
      booking.id
    );
    assert(
      getBooking.id === booking.id,
      "getBooking worked - id's match okay"
    );
  });

  it('getBookingsForProperty(propertyId)', async function () {
    const getBookingsForProperty = await database.getBookingsForProperty(
      property.id
    );
    assert(
      getBookingsForProperty[0].renter === booking.renter,
      "getBookingsForProperty worked - renters match okay"
    );
  });

  it('getBookingsForRenter(propertyId)', async function () {
    const getBookingsForRenter = await database.getBookingsForRenter(
      booking.renter
    );
    assert(
      getBookingsForRenter[0].renter === booking.renter,
      "getBookingsForRenter worked - renters match okay"
    );
  });
*/

});

