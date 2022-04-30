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
require('dotenv').config();
var ethers = require('ethers').ethers;
var Wallet = ethers.Wallet;
var contractJson = require('../' + process.env.CONTRACT_JSON_DIR + 'Staking.json');
var contractAddress = contractJson.networks[process.env.GANACHE_NETWORK_ID].address;
var mnemonic = process.env.GANACHE_PHRASE;
module.exports = /** @class */ (function () {
    function Web3Staking() {
        this.provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_URI);
        this.wallet = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");
        this.walletConnected = this.wallet.connect(this.provider);
        this.stakingContract = new ethers.Contract(contractAddress, contractJson.abi, this.provider);
        this.stakingWithSigner = this.stakingContract.connect(this.walletConnected);
        // console.log("init done", this.walletConnected.address);
    }
    Web3Staking.prototype.getUnStakedStakingEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var logsUnStaked, unStakedEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.queryFilter("UnStaked", 0)];
                    case 1:
                        logsUnStaked = _a.sent();
                        unStakedEvents = logsUnStaked.map(function (ev, index, myArr) {
                            // console.log('unStakedEvents:', ev.args);
                            var newEvent = {
                                'wallet': ev.args.wallet,
                                'amount': ev.args.amount,
                                'time': ev.args.time
                            };
                            return newEvent;
                        });
                        return [2 /*return*/, unStakedEvents];
                }
            });
        });
    };
    Web3Staking.prototype.getStakedStakingEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var logsStaked, stakedEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.queryFilter("Staked", 0)];
                    case 1:
                        logsStaked = _a.sent();
                        stakedEvents = logsStaked.map(function (ev, index, myArr) {
                            var newEvent = {
                                'wallet': ev.args.wallet,
                                'amount': ev.args.amount,
                                'time': ev.args.time
                            };
                            return newEvent;
                        });
                        return [2 /*return*/, stakedEvents];
                }
            });
        });
    };
    Web3Staking.prototype.getWallets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wallets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.getWallets()];
                    case 1:
                        wallets = _a.sent();
                        // console.log('getWallets :: ', wallets);
                        return [2 /*return*/, wallets];
                }
            });
        });
    };
    Web3Staking.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var activate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.activate()];
                    case 1:
                        activate = _a.sent();
                        // console.log('activate :: ', activate);
                        return [2 /*return*/, activate];
                }
            });
        });
    };
    Web3Staking.prototype.deactivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deactivate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.deActivate()];
                    case 1:
                        deactivate = _a.sent();
                        // console.log('deactivate :: ', deactivate);
                        return [2 /*return*/, deactivate];
                }
            });
        });
    };
    Web3Staking.prototype.active = function () {
        return __awaiter(this, void 0, void 0, function () {
            var active;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.active()];
                    case 1:
                        active = _a.sent();
                        // console.log('active :: ', active);
                        return [2 /*return*/, active];
                }
            });
        });
    };
    Web3Staking.prototype.stake = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stake;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.stake(10)];
                    case 1:
                        stake = _a.sent();
                        // console.log('stake :: ', stake);
                        return [2 /*return*/, stake];
                }
            });
        });
    };
    Web3Staking.prototype.unstake = function () {
        return __awaiter(this, void 0, void 0, function () {
            var unstake;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stakingWithSigner.unstake()];
                    case 1:
                        unstake = _a.sent();
                        // console.log('unstake :: ', unstake);
                        return [2 /*return*/, (unstake)];
                }
            });
        });
    };
    return Web3Staking;
}());
