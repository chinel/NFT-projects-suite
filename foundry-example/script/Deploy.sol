pragma solidity ^0.8.22;

import "forge-std/Script.sol";
import "../src/NftShoeTest.sol";

contract ShoeTestScript is Script {

    ShoeTest shoeTest; //This creates an instance
    address testAddress; // Address to be passed to the contract

    function setUp () public{
  // Use Foundry's vm.addr to get an address from a private key
        uint256 privateKey = 1; // You can change this to use a different address
        testAddress = vm.addr(privateKey);

    }

    function run () public{
        string memory seedPhrase = vm.readFile(".secret");//read the seedphrase
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);//get the seedphrase
        vm.startBroadcast(privateKey);
                // Deploy the contract with the test address
        shoeTest = new ShoeTest(testAddress);
        vm.stopBroadcast();

    }
}