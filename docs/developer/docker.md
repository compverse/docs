---
title: Docker
---

# Using Docker

### Quick Start

```shell
docker run \
  -p 30303:30303 \
  -p 8545:8545 \
  --name compverse \
  -d \
  -v /opt/chain/:/data \
  compverse/geth:latest --datadir /data
```

### Generate Account
You can create a new wallet or import an existing one, then get some IRIS from the exchanges or anywhere else into the
wallet you just created, .e.g.

```shell
## create a new wallet and echo password
docker run -it --rm -v /opt/chain/:/data compverse/geth:latest --datadir /data account new
echo {your password} > /opt/chain/passowrd.txt
```

### Start a validator node

```shell
docker run \
  -p 30303:30303 \
  --name compverse \
  -d \
  -v /opt/chain/:/data \
  compverse/geth:latest --datadir /data --unlock {your-validator-address} --password /data/password.txt  --mine --allow-insecure-unlock
```
