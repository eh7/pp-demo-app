const Router = require('../src_js/services/router');

const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');

const express = require('express');
const _ = require('underscore');

const app = express();

let router = null;

describe('router testing', async function () {

  before(async function () {
//    mongod = await MongoMemoryServer.create();
//    uri = mongod.getUri() + 'testing';
  });

  after(async function () {
//    await database.mongoose.connection.close();
//    await mongod.stop();
  });

  /*
  it('initialize database', async function () {
//    database = new Database(uri);
//    assert(database.mongoose.connection.readyState === 2, "Mongoose Connected");
  });
  */

  it('initialize router', async function () {
    router = new Router();
    assert.ok(router, "router is not initialized!!");
//console.log(router);
//    assert(router, "router initialize okay");
  });

  it('test routes', async function () {
    // console.log(router.routes());
  });

/*
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

