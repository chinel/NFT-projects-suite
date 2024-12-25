const ShoeTest = artifacts.require("ShoeTest"); // this loads the ShoeTest Json file into this variable, using artifacts which is globally available

//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ShoeTest);
  // await delay(1000); // 1-second delay before the next request (You can test the delay)
  const myContractInstance = await ShoeTest.deployed();

  // Further transactions or calls...
  //  await delay(1000); // Add delays where necessary
};
