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

- Edit `packages/contracts/deploy/.deploy.js` to `packages/contracts/deploy/deploy.js`. And add settings of Contracts.

```shell
$ mv packages/contracts/deploy/.deploy.js packages/contracts/deploy/deploy.js
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

## Trouble Shooting

### Error of `Received invalid block tag 2. Latest block number is 1`

You need to disconnect your wallet with localhost. And once you connect the other network(like Rinkby or Ropsten) and reconnect localhost again, the error will not be occured.
