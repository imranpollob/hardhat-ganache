const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", () => {
  describe("Deployment", () => {
    let Counter;
    let counter;

    beforeEach(async () => {
      Counter = await ethers.getContractFactory("Counter");
      counter = Counter.deploy("My Counter App", 5);
    });
    it("Should set the name", async () => {
      expect(await counter.getName()).to.equal("My Counter App");
    });

    it("Should set the initial count", async () => {
      expect(await counter.count()).to.equal(5);
    });
  });
});
