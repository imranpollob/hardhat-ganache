const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", () => {
  let counter;

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy("My Counter App", 5);
  });

  describe("Constructor", () => {
    it("Should sets the name", async () => {
      expect(await counter.name()).to.equal("My Counter App");
    });

    it("Should set the initial count", async () => {
      expect(await counter.count()).to.equal(5);
    });
  });

  describe("Operations", () => {
    it("Should increment the count", async () => {
      const trx = await counter.increment();
      await trx.wait();
      expect(await counter.count()).to.equal(6);
    });

    it("Should decrement the count", async () => {
      const trx = await counter.decrement();
      await trx.wait();
      expect(await counter.count()).to.equal(4);
    });

    it("Should set the name", async () => {
      const trx = await counter.setName("Pollob");
      await trx.wait();
      expect(await counter.name()).to.equal("Pollob");
    });
  });
});
