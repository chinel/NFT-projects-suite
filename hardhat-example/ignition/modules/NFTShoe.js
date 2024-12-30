// const hre = require("hardhat");

// async function main() {
//   const ShoeTest = await hre.ethers.getContractFactory("ShoeTest");
//   const shoeTestInstance = await ShoeTest.deploy();
//   await shoeTestInstance.deployed();
//   console.log(`Contract deployed to: ${shoeTestInstance.address}`);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ShoeTestModule", (m) => {
  // Define the contract deployment

  // Example: Constructor arguments
  const arg1 = m.getParameter(
    "arg1",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );

  const shoeTest = m.contract("ShoeTest", [arg1]);

  // Return the deployed contract for potential further use
  return { shoeTest };
});
