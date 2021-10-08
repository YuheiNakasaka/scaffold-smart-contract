const { ethers, upgrades } = require("hardhat");
const functionName = "<CONTRACT NAME VERSION XXX>";
const fs = require("fs");

async function main() {
  const contractDir = __dirname + "/../../frontend/src/contracts";
  const addressesFile = contractDir + "/contract-address.json";
  if (!fs.existsSync(addressesFile)) {
    console.error("You need to deploy your contract first");
    return;
  }
  const addressJson = fs.readFileSync(addressesFile);
  const json = JSON.parse(addressJson);
  const address = json.address;

  const Contract = await ethers.getContractFactory(functionName);
  const constract = await upgrades.upgradeProxy(address, Contract);
  const deployed = await constract.deployed();

  // Copying ABIs to frontend.
  const artifact = artifacts.readArtifactSync(functionName);
  fs.writeFileSync(
    contractDir + "/hardhat-contracts.json",
    JSON.stringify(artifact, null, 2)
  );
}

main();
