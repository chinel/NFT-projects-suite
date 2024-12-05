const ShoeTest = artifacts.require("ShoeTest"); // this loads the ShoeTest Json file into this variable, using artifacts which is globally available
module.exports = function (deployer, network, accounts) {
  console.log({ network });
  console.log({ accounts });
  deployer.deploy(ShoeTest, "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
};
