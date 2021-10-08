const { ethers, upgrades } = require("hardhat");
const functionName = "<CONTRACT NAME>";

async function main() {
  const Contract = await ethers.getContractFactory(functionName);
  const constract = await upgrades.deployProxy(
    Contract,
    // EXAMPLE:
    // ["MyNFT"]
    ["<CONTRACT ARGS>"],
    { initializer: "initialize" }
  );
  const deployed = await constract.deployed();

  // Copying ABIs to frontend.
  const fs = require("fs");
  const contractDir = __dirname + "/../../frontend/src/contracts";

  fs.writeFileSync(
    contractDir + "/contract-address.json",
    JSON.stringify({ address: deployed.address }, undefined, 2)
  );

  const artifact = artifacts.readArtifactSync(functionName);
  fs.writeFileSync(
    contractDir + "/hardhat-contracts.json",
    JSON.stringify(artifact, null, 2)
  );
}

main();
