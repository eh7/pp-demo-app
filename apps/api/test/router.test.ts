import { Router } from '../src/services/router';
// import { Router } from '../services/router';
import { expect } from 'chai';
import 'mocha';

import express, { Application } from 'express';
// import underscore as _ from 'underscore';

const assert = require('assert');

const app = express();

/*
const Router = require('../src_js/services/router');

const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');

const express = require('express');
const _ = require('underscore');

const app = express();
*/

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


  it('initialize router', async function () {
    router = new Router();
    assert.ok(router, "router is not initialized!!");
//console.log(router);
//    assert(router, "router initialize okay");
  });

  it('test routes', async function () {
    // console.log(router.routes());
  });

});
