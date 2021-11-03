---
title: Consensus
---

## Compverse Consensus Engine

(a) Compverse uses BPoS consensus mechanism, featuring low transaction cost, low transaction latency, high transaction concurrency, and supports up to 21 verifier nodes.

BPoS is a combination of PoA and Pos. To become a verifier, you need to submit a proposal first and wait for other active verifiers to vote, and after more than half of them pass, you are eligible to become a verifier. Any address can pledge an address that is eligible to become a verifier, and after the verifier's pledge volume ranks in the top 21, it will become an active verifier in the next epoch.

All active verifiers are ranked according to predetermined rules and take turns to be out of the block. If a verifier does not get out of the block in time in its own block-out round, active verifiers who have not participated in block-out operations in the past n/2 (n is the number of active verifiers) blocks are randomly blocked out. At least n/2+1 active verifiers work properly to ensure the proper operation of the blockchain.

### Glossary

- validator: Be responsible for packaging the transactions on the chain；
- main validator：That is, a group of verifiers currently responsible for packaging blocks, with a maximum of 21。
- backup validator：Backup verifier: when the active verifier is kicked out of the active verifier list due to disconnection, the alternative verifier will make up for it according to the ranking, with a maximum of 11。
- epoch：The time interval in blocks. At present, 1epoch = 200 blocks (about 50 minutes) on the 'Compverse'. At the end of each epoch, the blockchain will interact with the system contract to update the active verifier；

### System Contract

- Code: [compverse-system-contracts](https://github.com/compverse/system-contracts)

The management of the current verifier is done by the system contract. The current system contracts are

- Proposal Be responsible for managing the access qualification of the verifier, and managing the proposal and voting of the verifier;
- Validators Be responsible for ranking management of verifiers and distributing block awards;
- Punish Be responsible for punishing the main verifier who does not work normally;
- StakePool Be responsible for submitting security deposit, drawing reward, user pledge and pledge reward to the verifier;
- AddressList Be responsible for transaction blacklist and deployment contract whitelist;
- Incentive Be responsible for the calculation of incentive distribution;

Blockchain invocation of system contracts.

- At the end of each block, the `Validators` contract is invoked to distribute the fees for all transactions in the block to active validators;
- When it is found that the validator does not work normally, it will call the 'push' contract to punish the verifier, and call the removevalidatorincoming of the stakepool to deduct the verifier's bonus;
- at the end of each epoch, the `Validators` contract is invoked to update the active validator, based on the ranking.

### Validator

After the verifier passes the proposal, it needs to create a `StakePool` through the `Validators` contract. The verifier needs to submit a deposit through the `StakePool` before it can officially become an active verifier. The user's pledge on its `StakePool` is valid. And the profit of the verifier comes from the pledge income of the user.

See the following table for specific regulations:

| nodeType   | number | profit                                                                                               | bond        |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------- | ----------- |
| mainNode   | 21     | Draw the user's pledge income (40% (block reward + handling fee)) in proportion to governance rights | 50,000 CVERSE |
| backupNode | 11     | Draw the pledge income of users in proportion (10% (block reward + handling fee))                    | 50,000 CVERSE |

### Staking

User pledge regulation

- Pledge method: users can select the appropriate node to pledge through the user pledge website. Nodes are ranked according to the pledge amount of users. The top 21 nodes are the main nodes, and the 22nd-32nd nodes are alternative nodes.
- Pledge cycle: users can pledge at any time.
- Exit mechanism: after clicking exit pledge, the Compverse exiting the pledge will no longer have income, and this part of the pledge can be withdrawn only after block 17280 (about 3 days). Exiting will affect the ranking of nodes.

### Punishment

Whenever it is found that the verifier does not output the block according to the preset, the push contract will be automatically called at the end of the block to count the verifier. When the count reaches 48, all the income of the verifier is confiscated. When the count reaches 96, remove the verifier from the list of active verifiers, and the verifier will enter the imprisonment period 17280 (about 3 days). During the imprisonment period, the user's operations will not be affected, such as deposit, withdrawal and withdrawal. Before the verifier resubmits the deposit, the user pledge on the stakepool will be invalid and have no income. If the verifier wants to be in prison, the withdrawal deposit cannot be operated. After the end of the term of imprisonment, it can be activated again by submitting a security deposit. If the security deposit is insufficient, it needs to be supplemented first.
