---
title: dumpconfig
---

## dumpconfig

The dumpconfig command shows configuration values.

### Command

```shell
dumpconfig [command options] [arguments...]
```

### Example

When the file name is not added, directly output to the console.

```shell
> geth --datadir node dumpconfig config.toml
> cat config.toml
[Eth]
NetworkId = 3476
SyncMode = "fast"
DiscoveryURLs = []
NoPruning = false
NoPrefetch = false
LightPeers = 100
UltraLightFraction = 75
DatabaseCache = 512
DatabaseFreezer = ""
TrieCleanCache = 256
TrieCleanCacheJournal = "triecache"
TrieCleanCacheRejournal = 3600000000000
TrieDirtyCache = 256
TrieTimeout = 3600000000000
SnapshotCache = 0
Preimages = true
EnablePreimageRecording = false
EWASMInterpreter = ""
EVMInterpreter = ""
RPCGasCap = 25000000
RPCTxFeeCap = 1e+00

[Eth.Miner]
GasFloor = 8000000
GasCeil = 8000000
GasPrice = 1000000000
Recommit = 3000000000
Noverify = false

[Eth.Ethash]
CacheDir = "ethash"
CachesInMem = 2
CachesOnDisk = 3
CachesLockMmap = false
DatasetDir = "C:\\Users\\Administrator\\AppData\\Local\\Ethash"
DatasetsInMem = 1
DatasetsOnDisk = 2
DatasetsLockMmap = false
PowMode = 0

[Eth.TxPool]
Locals = []
NoLocals = false
Journal = "transactions.rlp"
Rejournal = 3600000000000
PriceLimit = 1
PriceBump = 10
AccountSlots = 16
GlobalSlots = 4096
AccountQueue = 64
GlobalQueue = 1024
Lifetime = 10800000000000

[Eth.GPO]
Blocks = 20
Percentile = 60
MaxPrice = 500000000000

[Node]
DataDir = ".\\node\\"
IPCPath = "geth.ipc"
HTTPHost = ""
HTTPPort = 8545
HTTPVirtualHosts = ["localhost"]
HTTPModules = ["net", "web3", "eth"]
WSHost = ""
WSPort = 8546
WSModules = ["net", "web3", "eth"]
GraphQLVirtualHosts = ["localhost"]

[Node.P2P]
MaxPeers = 50
NoDiscovery = false
BootstrapNodes = []
BootstrapNodesV5 = []
StaticNodes = []
TrustedNodes = []
ListenAddr = ":30303"
EnableMsgEvents = false

[Node.HTTPTimeouts]
ReadTimeout = 30000000000
WriteTimeout = 30000000000
IdleTimeout = 120000000000
```

Modify the value you need to modify, at startup, configure through `--config`

```shell
> geth --config config.toml --datadir node
```
