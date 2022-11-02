# Hardhat Ganache

Required Softwares:
- Node ^18

Steps to follow

```bash
npm init -y
npm install --save-dev hardhat
npx hardhat
```
Then select `Create a JavaScript project`

and press enter (y) for the following options.


View available `hardhat` commands
```bash
npx hardhat
```

Essential commands
```bash
# Compiles the entire project, building all artifacts
npx hardhat compile 
# Starts a JSON-RPC server on top of Hardhat Network
npx hardhat node 
# Runs a user-defined script after compiling the project
npx hardhat run SCRIPT
npx hardhat run scripts/deploy.js --network localhost
# Runs mocha tests
npx hardhat test
# Generates a code coverage report for tests
npx hardhat coverage
# Using the gas reporter
REPORT_GAS=true npx hardhat test
# Verifies contract on Etherscan
npx hardhat verify --network goerli <address> <unlock time>
# Clears the cache and deletes all artifacts
npx hardhat clear
```