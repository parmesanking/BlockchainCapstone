# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Instructions to run tests:  

```
cd eth-contracts
npm install
make sure you have ganache-cli running 
```
```
ganache-cli -a 50 -e 1000 -p 8545
```
```
truffle test test/TestSolnSquareVerifier.js 
truffle test test/TestSquareVerifier.js 
truffle test test/TestERC721Mintable.js 
```
#  Deployed contract references:
 

```
   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xd628628e894b5c5a58afb21e7b233e892b178e0bddebb7dd87d231dfbbfec44c
   > Blocks: 0            Seconds: 4
   > contract address:    0xf3cb96474064F55E5f6420714367AaE0A26Ee739
   > block number:        4416047
   > block timestamp:     1558370250
   > account:             0x6ec31d7061aAB163D19a9f2B02847D27096A6b9b
   > balance:             15.885189104
   > gas used:            1774806
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03549612 ETH
```

```
   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x4f2e6f512786e5d596823adfe7a973479f6e9651918469eac30ce3148fe9323f
   > Blocks: 0            Seconds: 8
   > contract address:    0x3bfA4261EBE0D0020519CA04564Cc7221E225f86
   > block number:        4416048
   > block timestamp:     1558370265
   > account:             0x6ec31d7061aAB163D19a9f2B02847D27096A6b9b
   > balance:             15.801028124
   > gas used:            4208049
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08416098 ETH
```

Contract ABI:
./eth-contract/build/contracts/AGOContract.json 

OpenSea marketplace:
https://rinkeby.opensea.io/category/AGOContract

 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
