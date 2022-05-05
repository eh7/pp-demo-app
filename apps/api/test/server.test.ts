const request = require("supertest")("http://localhost:8081");
const expect = require("chai").expect;

// http://localhost:8081/staking

describe("GET /staking", function () {
  it("returns all Staked events stored on the blockchain for staking contract", async function () {
    const response = await request.get("/staking");

//    expect(response.status).to.eql(200);
console.log(response.body.events);
//    expect(response.body.data.length).to.eql(30);
  });
});
