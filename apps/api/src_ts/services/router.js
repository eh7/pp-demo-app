"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Router = void 0;
require('dotenv').config();
//const express = require('express');
var express_1 = require("express");
//const Web3Staking = require("./web3Staking");
var web3Staking_1 = require("./web3Staking");
var web3Staking;
var app = (0, express_1.express)();
//module.exports = class Router {
var Router = /** @class */ (function () {
    function Router() {
        this.app = app;
        web3Staking = new web3Staking_1.Web3Staking();
        // console.log('Router init');
    }
    Router.prototype.routes = function () {
        this.app.get('/', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = "<br>\
        <a href='/'>/</a><br>\
        <a href='/staking'>/staking</a><br>\
        <a href='/unStaking'>/unStaking</a><br>\
        <a href='/wallets'>/wallet/address</a><br>\
        <a href='/wallet/address'>/wallet/address</a><br>\
        <a href='/active'>/active</a><br>\
        <a href='/activate'>/activate</a><br>\
        <a href='/deActivate'>/deActivate</a><br>\
        ";
                    res.send('Staking API 0.0.1<br> <h3>' + endpoint + '</h3>');
                    return [2 /*return*/];
                });
            });
        });
        this.app.get('/staking', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var events;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, web3Staking.getStakedStakingEvents()];
                        case 1:
                            events = _a.sent();
                            //console.log(web3Staking.getUnStakedStakingEvents());
                            res.setHeader('Content-Type', 'application/json');
                            res.json({
                                staking: 'events',
                                events: events
                            });
                            return [2 /*return*/];
                    }
                });
            });
        });
        this.app.get('/unStaking', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var events;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, web3Staking.getUnStakedStakingEvents()];
                        case 1:
                            events = _a.sent();
                            res.setHeader('Content-Type', 'application/json');
                            res.json({
                                unStaking: 'events',
                                events: events
                            });
                            return [2 /*return*/];
                    }
                });
            });
        });
        this.app.get('/wallets', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var wallets, address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, web3Staking.getWallets()];
                        case 1:
                            wallets = _a.sent();
                            address = req.params.address;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({
                                wallets: wallets
                            });
                            return [2 /*return*/];
                    }
                });
            });
        });
        this.app.get('/wallet/:address', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var wallets, address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, web3Staking.getWallets()];
                        case 1:
                            wallets = _a.sent();
                            address = req.params.address;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({
                                wallet: 'info',
                                address: address,
                                wallets: wallets
                            });
                            return [2 /*return*/];
                    }
                });
            });
        });
        this.app.get('/active', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var activate;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, web3Staking.active()];
                        case 1:
                            activate = _a.sent();
                            res.setHeader('Content-Type', 'application/json');
                            res.json({
                                active: active
                            });
                            return [2 /*return*/];
                    }
                });
            });
        });
        this.app.get('/activate', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var activate;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, web3Staking.activate()];
                        case 1:
                            activate = _a.sent();
                            res.setHeader('Content-Type', 'application/json');
                            res.json({
                                activate: activate
                            });
                            return [2 /*return*/];
                    }
                });
            });
        });
        this.app.get('/deActivate', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    res.setHeader('Content-Type', 'application/json');
                    res.json({
                        active: 'status'
                    });
                    return [2 /*return*/];
                });
            });
        });
        /*
            this.app.get('/', async function (req, res) {
              const endpoint = "<br>\
                <a href='/properties'>/properties</a><br>\
                <a href='/property/1'>/property/:id</a><br>\
                <a href='/bookings'>/bookings</a><br>\
                <a href='/bookings/1'>/bookings/:propertyId</a><br>\
                <a href='/booking/2'>/booking/:id</a><br>\
                <a href='/properties/owner/0x4086f4c8d405c8fD576F80a1f84b067E864F7082'>/properties/owner/:id</a><br>\
                <a href='/bookings/renter/0xE34D29abaA500dd7582f407cA01CC365ca188E90'>/bookings/renter/:id</a>\
                <a href='/bookings/renter/0xF143Ca2024898260d57bcD33E4A18eFb3A1C9E3d'>/bookings/renter/:id</a>\
                ";
              res.send('Properties API 0.0.1<br> <h3>' + endpoint + '</h3>');
            })
        
            this.app.get('/properties', async function (req, res) {
              let properties = await database.getProperties();
              res.setHeader('Content-Type', 'application/json');
              res.json(properties);
            })
        
            this.app.get('/property/:id', async function (req, res) {
              const property = await database.getProperty(req.params.id);
              res.json(property);
            })
        
            this.app.get('/bookings', async function (req, res) {
              const bookings = await database.getBookings();
              res.json(bookings);
            })
        
            this.app.get('/bookings/:propertyId', async function (req, res) {
              const bookings = await database.getBookingsForProperty(req.params.propertyId);
              res.json(bookings);
            })
        
            this.app.get('/booking/:id', async function (req, res) {
              const booking = await database.getBooking(req.params.id);
              res.json(booking);
            })
        
            // getPropertiesForOwner
            this.app.get('/properties/owner/:id', async function (req, res) {
              const properties = await database.getPropertiesForOwner(req.params.id);
              res.json(properties);
            })
        
            // getBookingsForRenter
            this.app.get('/bookings/renter/:id', async function (req, res) {
              const bookings = await database.getBookingsForRenter(req.params.id);
              res.json(bookings);
            })
        
            this.app.get('/a/:id', function (req, res) {
              console.log('uri str -> /a/' + req.params.id);
              res.send('properties /a/:id id = ' + req.params.id);
            })
        */
    };
    Router.prototype.listen = function () {
        this.routes();
        var server = app.listen(8081, function () {
            var host = "localhost";
            var port = server.address().port;
            console.log("\n\nExpress router app listening at http://%s:%s\n\n", host, port);
            console.table({
                Info: "Express router app listening",
                URL: "http://".concat(host, ":").concat(port)
            });
        });
    };
    return Router;
}());
exports.Router = Router;
