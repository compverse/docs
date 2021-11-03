---
title: Fullnode
order: 1
nav:
  order: 2
  title: Developer
---

# How to Run A Fullnode on Compverse

> **Tip**
>
> Requirements:[install geth](/developer/install)

## Fullnodes Functions

- Stores the full blockchain history on disk and can answer the data request from the network.
- Receives and validates the new blocks and transactions.
- Verifies the states of every accounts.

## Supported Platforms

We support running a full node on `Linux`.

## Minimum Requirements

The hardware must meet certain requirements to run a full node.

- Ubuntu 20.04
- 500 GB of free disk space
- 4 cores of CPU and 8 gigabytes of memory (RAM).
- 10 Mib

## Settings

Sync Mode

- Fast Sync The default sync mode. Synchronizes a full node doing a fast synchronization by downloading the entire state
  database, requesting the headers first, and filling in block bodies and receipts afterward. Once the fast sync reaches
  the best block of the Ethereum network, it switches to full sync mode.

- Full Sync Synchronizes a full node starting at genesis, verifying all blocks and executing all transactions. This mode
  is a bit slower than the fast sync mode but comes with increased security.

## Steps to Run a Fullnode


Run the following command in the `geth` directory

- Console method of starting nodes

**mainnet**

```shell
geth --datadir node > geth.log &
```

**Pegasus testnet**

```shell
geth --testnet --datadir node >geth.log &
```

### Upgrade to Validator Node

#### 1. Create a Wallet

You can create a new wallet or import an existing one, then get some IRIS from the exchanges or anywhere else into the
wallet you just created, .e.g.

```shell
## create a new wallet and echo password
geth account new --datadir ./node
echo {your-password} > password.txt
```

#### 2. Confirm your node has caught-up

```shell
geth attach data/geth.ipc
> eth.syncing
false
```

#### 3. Start a validator node

**mainnnet**

```shell
geth --datadir ./node --unlock {your-validator-address} --password password.txt  --mine --allow-insecure-unlock
```

**testnet**

```shell
geth --testnet --datadir ./node --unlock {your-validator-address} --password password.txt  --mine --allow-insecure-unlock
```
