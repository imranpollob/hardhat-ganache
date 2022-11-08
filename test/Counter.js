const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", () => {
  let counter;

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy("My Counter App", 5);
  });

  describe("Deployment", () => {
    it("Should sets the name", async () => {
      expect(await counter.name()).to.equal("My Counter App");
    });

    it("Should set the initial count", async () => {
      expect(await counter.count()).to.equal(5);
    });
  });
});
