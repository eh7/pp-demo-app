const Token = artifacts.require("Token");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');
const _ = require('lodash');

contract('Token', async (accounts) => {

  let instance;

  it('does token deploy', async () => {
    instance = await Token.deployed();
    //console.log(instance);
    //console.log(await instance.totalSupply());
  });

});
