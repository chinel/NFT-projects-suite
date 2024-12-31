require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
const path = require("path");

const mnemonic = fs
  .readFileSync(path.join(__dirname, ".secret"))
  .toString()
  .trim();

const ALCHEMY_API_KEY = fs
  .readFileSync(path.join(__dirname, ".alchemy"))
  .toString()
  .trim();

const ETHER_SCAN_API_KEY = fs
  .readFileSync(path.join(__dirname, ".etherscan"))
  .toString()
  .trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
      },
    },
  },
  etherscan: {
    apiKey: ETHER_SCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
  solidity: "0.8.22",
};
