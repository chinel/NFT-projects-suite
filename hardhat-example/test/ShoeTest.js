const { expect } = require("chai");
const hre = require("hardhat"); // hardhat runtime environment

describe("ShoeTest", function () {
  it("Should mint a token", async function () {
    const ShoeTest = await hre.ethers.getContractFactory("ShoeTest"); //This retrieves the contract factory for the ShoeTest contract, which is used to deploy instances of it.
    const [owner, otherAccount] = await ethers.getSigners(); //Retrieves an array of Ethereum accounts provided by Hardhat. These are used for interacting with the contract.
    // Pass the owner's address to the constructor
    const ShoeTestInstance = await ShoeTest.deploy(owner.address); //Deploys a new instance of the ShoeTest. The owner's address is passed to the contract's constructor.
    await ShoeTestInstance.safeMint(otherAccount.address, "FLVJ");
    expect(await ShoeTestInstance.ownerOf(0)).to.equal(otherAccount.address);
  });

  it("Should fail to transfer token to the wrong address", async function () {
    const ShoeTest = await hre.ethers.getContractFactory("ShoeTest"); //This retrieves the contract factory for the ShoeTest contract, which is used to deploy instances of it.
    const [owner, otherAccount, notTheNFTOwner] = await ethers.getSigners(); //Retrieves an array of Ethereum accounts provided by Hardhat. These are used for interacting with the contract.
    // Pass the owner's address to the constructor
    const ShoeTestInstance = await ShoeTest.deploy(owner.address); //Deploys a new instance of the ShoeTest. The owner's address is passed to the contract's constructor.
    await ShoeTestInstance.safeMint(otherAccount.address, "FLVJ");
    expect(await ShoeTestInstance.ownerOf(0)).to.equal(otherAccount.address);
    await expect(
      ShoeTestInstance.connect(notTheNFTOwner).transferFrom(
        otherAccount.address,
        notTheNFTOwner.address,
        0
      )
    ).to.be.reverted; //If the error message is dynamic and changes depending on the context (e.g., different addresses or values), you can use the .to.be.reverted assertion instead of .to.be.revertedWith. This ensures that the test passes if the transaction reverts, regardless of the specific error message.
  });
});
