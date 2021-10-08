# scaffold-smart-contract

### Set up root/

```shell
$ yarn install
```

### Set up contracts/

```shell
$ cd packages/contracts/
$ yarn install
```

- Edit `packages/contracts/.hardhat.config.js` to `packages/contracts/hardhat.config.js`. And add settings of testnet or mainnet if needed.

```shell
$ mv packages/contracts/.hardhat.config.js packages/contracts/hardhat.config.js
```

- Edit `packages/contracts/scripts/.create-deploy.js` to `packages/contracts/scripts/create-deploy.js`. And add settings of Contracts.
- Edit `packages/contracts/scripts/.update-deploy.js` to `packages/contracts/scripts/update-deploy.js`. And add settings of Contracts.

```shell
$ mv packages/contracts/scripts/.create-deploy.js packages/contracts/scripts/create-deploy.js
$ mv packages/contracts/scripts/.update-deploy.js packages/contracts/scripts/update-deploy.js
```

### Set up frontend/

```shell
$ cd packages/frontend/
$ yarn install
```

### Start development

In root directory,

```shell
$ yarn dev
```

- Run a hardhat node in localhost and deploy contracts to it.
- Run a frontend app and `localhost:3000` are opened.

- And you want to get faucet to do some transactions.
  - It's required to be running the hardhat node.
  - It's required to be connecting to your wallet in localhost.

```shell
# ex) yarn faucet 0xf0000000000000000000000000000000000000000
$ yarn faucet YOUR_LOCAL_WALLET_ADDRESS
```

### Update a contract

With [Upgrading smart contracts](https://docs.openzeppelin.com/learn/upgrading-smart-contracts) pattern, it's possible to update the contract with the state unchanged.

- Copy `packages/contracts/contracts/Greeter.sol` to `packages/contracts/contracts/GreeterV002.sol`
- Edit `packages/contracts/contracts/GreeterV002.sol`
- If you want to add or modify codes, create `packages/contracts/contracts/GreeterV003.sol` and do the same things.
- And run the below command,

```shell
$ yarn deploy-update
```

## TroubleShooting

### Error of `Received invalid block tag 2. Latest block number is 1`

You need to disconnect your wallet with localhost. And once you connect the other network(like Rinkby or Ropsten) and reconnect localhost again, the error will not be occured.
