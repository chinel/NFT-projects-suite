// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.21;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import "@ganache/console.log/console.sol";

contract ShoeTest is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor()
        ERC721("ShoeTest", "STK")
        Ownable(msg.sender)
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://www.jsonkeeper.com/b/";
    }

     //this dummy function is for testing out how console logs works in development after migrating the contract
    function buyToken () public payable{
     uint256 tokenId = _nextTokenId;
     console.log("got here-->", tokenId, msg.value);
     require(msg.value == tokenId * 0.1 ether, "Wrong amount of funds sent.");
     _nextTokenId++;

      _safeMint(msg.sender, tokenId);
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}