const { ethers, run, network } = require("hardhat");

async function main() {
  // ---- Deployment
  const contractFactory = await ethers.getContractFactory("Counter");
  const contract = await contractFactory.deploy("My Counter App", 5);
  await contract.deployed();
  console.log("Contract deployed to " + contract.address);

  // ---- Operations
  console.log(`Value of count: ${await contract.count()}`);
  console.log(`Value of name: ${await contract.name()}`);

  let tx;
  console.log("first increment");
  tx = await contract.increment();
  await tx.wait();
  console.log("second increment");
  tx = await contract.increment();
  await tx.wait();
  console.log(`Value of count after incrementing two times: ${await contract.count()}`);

  console.log("1st decrement");
  tx = await contract.decrement();
  // await tx.wait();
  console.log("2nd decrement");
  tx = await contract.decrement();
  // await tx.wait();
  console.log("3rd decrement");
  tx = await contract.decrement();
  await tx.wait();
  console.log(`Value of count after decrementing three times: ${await contract.count()}`);

  console.log("set name");
  tx = await contract.setName("New Name");
  await tx.wait();
  console.log(`Value of name after modifying: ${await contract.name()}`);

  // ---- Verify
  // if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
  //   console.log("Waiting for block confirmations...");
  //   await contract.deployTransaction.wait(4);
  //   await verify(contract.address, ["HH", 5]);
  // }
}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
