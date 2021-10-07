const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("NFT basic test", async function () {
    const [signer, badSigner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("Greeter");
    const nft = await NFT.deploy();
    await nft.deployed();
  });
});
