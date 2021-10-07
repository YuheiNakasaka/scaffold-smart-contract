require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("./tasks/faucet");

const privateKey =
  process.env.PRIVATE_KEY ||
  "0x0000000000000000000000000000000000000000000000000000000000000000"; // this is to avoid hardhat error

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    localhost: {
      timeout: 50000,
    },
    hardhat: {},
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.MAINNET_INFURA_KEY}`,
    //   accounts: [`${process.env.MAINNET_DEPLOYER_PRIV_KEY}`],
    // },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.ROPSTEN_INFURA_KEY}`,
    //   accounts: [`${process.env.ROPSTEN_DEPLOYER_PRIV_KEY}`],
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.RINKEBY_INFURA_KEY}`,
    //   accounts: [`${process.env.RINKEBY_DEPLOYER_PRIV_KEY}`],
    // },
    // polygon: {
    //   url: "https://polygon-mainnet.infura.io/v3/${process.env.POLYGON_INFURA_KEY}",
    //   accounts: [privateKey],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    // mumbai: {
    //   url: "https://polygon-mumbai.infura.io/v3/${process.env.MUMBAI_INFURA_KEY}",
    //   accounts: [privateKey],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
  },
};
