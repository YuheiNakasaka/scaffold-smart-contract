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
