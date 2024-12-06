const ShoeTest = artifacts.require("ShoeTest"); // this loads the ShoeTest Json file into this variable, using artifacts which is globally available
module.exports = function (deployer, network, accounts) {
  console.log({ network });
  console.log({ accounts });
  deployer.deploy(ShoeTest, "0x3268EC9EbDaB412bB23add08E15Db733F1a4102F");
};
