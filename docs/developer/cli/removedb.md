---
title: removedb
---

## Removedb

Remove blockchain and state databases

```shell script
geth removedb --datadir value
```

Options:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       Data directory for the databases and keystore (default: "/home/ubuntu/.ethereum")
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/geth# geth removedb --datadir node2/
Remove full node state database (/root/geth/node2/geth/chaindata)? [y/n] y
Remove full node state database (/root/geth/node2/geth/chaindata)? [y/n] y
INFO [12-21|17:06:13.807] Database successfully deleted            path=/root/geth/node2/geth/chaindata elapsed=23.122ms
Remove full node ancient database (/root/geth/node2/geth/chaindata/ancient)? [y/n] y
Remove full node ancient database (/root/geth/node2/geth/chaindata/ancient)? [y/n] y
INFO [12-21|17:06:17.880] Database successfully deleted            path=/root/geth/node2/geth/chaindata/ancient elapsed="278.718µs"
INFO [12-21|17:06:17.880] Light node database missing              path=/root/geth/node2/geth/lightchaindata
```
