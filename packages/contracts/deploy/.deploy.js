module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const deployed = await deploy("<CONTRACT NAME>", {
    from: deployer,
    // EXAMPLE:
    // args: [
    //   "MyNFT",
    // ]
    args: ["<CONTRACT ARGS>"],
    log: true,
  });

  const fs = require("fs");
  const contractDir = __dirname + "/../../frontend/src/contracts";

  fs.writeFileSync(
    contractDir + "/contract-address.json",
    JSON.stringify({ address: deployed.address }, undefined, 2)
  );

  const artifact = artifacts.readArtifactSync("Greeter");
  fs.writeFileSync(
    contractDir + "/hardhat-contracts.json",
    JSON.stringify(artifact, null, 2)
  );
};
module.exports.tags = ["<CONTRACT NAME>"];
