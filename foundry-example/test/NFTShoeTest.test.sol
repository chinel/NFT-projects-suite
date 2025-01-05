pragma solidity ^0.8.22;

import "forge-std/Test.sol";
import "../src/NftShoeTest.sol";

contract NFTTest is
    Test // here we create a new Contract that extends Test
{
    //2 functions are needed the setUp function and the test function

    ShoeTest shoeTest; //This creates an instance
    address testAddress; // Address to be passed to the contract

    // this function is created any time you run a test
    function setUp() public {
        // Use Foundry's vm.addr to get an address from a private key
        uint256 privateKey = 1; // You can change this to use a different address
        testAddress = vm.addr(privateKey);

        // Convert the address to a string for logging
        string memory addressAsString = vm.toString(testAddress);

        // Log the string representation of the address
        emit log(addressAsString);
        // Deploy the contract with the test address
        shoeTest = new ShoeTest(testAddress);
    }

    function testNameIsShoeTest() public view {
        assertEq(shoeTest.name(), "ShoeTest");
    }

    function testMintingNfts() public {
        //The msg.sender during a test defaults to the zero address (0x0) unless explicitly set using vm.prank or vm.startPrank. 
        vm.prank(testAddress);

        // Mint the NFT using `testAddress`
        shoeTest.safeMint(testAddress, "FLVJ");

        // Assert that the owner of token ID 0 is `testAddress`
        assertEq(
            shoeTest.ownerOf(0),
            testAddress,
            "Minting failed or owner mismatch"
        );
        assertEq(shoeTest.tokenURI(0), "https://www.jsonkeeper.com/b/FLVJ");
    }
}
