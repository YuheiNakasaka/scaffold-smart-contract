module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("<CONTRACT NAME>", {
    from: deployer,
    // EXAMPLE:
    // args: [
    //   "MyNFT",
    // ]
    args: ["<CONTRACT ARGS>"],
    log: true,
  });
};
module.exports.tags = ["<CONTRACT NAME>"];
