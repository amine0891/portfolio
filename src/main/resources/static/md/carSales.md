# Car Sales and Traceability on Blockchain

## Introduction

Blockchain and NFTs (Non-Fungible Tokens) are reshaping how physical assets are represented and exchanged digitally. This project focuses on building a decentralized application (DApp) to manage and display vehicles as NFTs using React, Web3, and Ethereum smart contracts.

### Project Objective

The goal is to build an innovative platform that streamlines the sale and registration of vehicles, with manufacturer-certified ownership records and a full audit trail of all previous owners.

- **Vehicle minting**: Create vehicles as NFTs and associate them with a specific user.
- **Vehicle detail display**: Retrieve and display comprehensive data for each vehicle.
- **Reduced intermediaries**: Minimize the number of parties involved in transactions to lower costs.
- **Cryptocurrency payments**: Broaden payment options beyond traditional methods.
- **Full ownership traceability**: Provide a transparent, immutable history of all previous owners.

---

## Installation

### Ganache

1. **GUI version**: Download the graphical interface from the official Truffle website.
2. **CLI version**: Install via npm:
```bash
   npm install -g ganache
```
3. **Direct download**: Available at [archive.trufflesuite.com/ganache](https://archive.trufflesuite.com/ganache/).

### MetaMask

1. Install the MetaMask browser extension from the Chrome Web Store.
2. Create a new wallet or import an existing one.
3. Configure MetaMask accounts using the private keys from your Ganache accounts.

### Node.js and Truffle

1. **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
2. **Truffle**:
```bash
   npm install -g truffle
```

---

## Getting Started

1. **Launch Ganache** to spin up a local blockchain development environment.

2. **Install dependencies** — navigate to the `car-sale-blockchain` directory and run:
```bash
   npm install
```

3. **Deploy contracts** — configure the deployment script for your local Ganache network, then run:
```bash
   truffle migrate --reset
```

4. **Start the frontend** — return to the project root and run:
```bash
   npm start
```

---

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Create an account or sign in to an existing one.
3. Browse the platform and begin minting vehicles.
4. Complete transactions using the available cryptocurrency payment options.

---

## Technology Stack

- **Solidity smart contracts**: Core logic implemented in the `CarFactory` contract.
- **Node.js**: Backend runtime environment.
- **React**: Frontend user interface.
- **ethers.js / web3.js**: Ethereum connection and interaction layer.

---

## Platform Overview

### 1. Create a Vehicle

Allows users to mint new vehicles on the platform through an intuitive, straightforward interface.

![Create a vehicle](images/create-car.png)

### 2. My Vehicles

Displays all vehicles owned by the connected wallet. Listed vehicles are automatically made available for purchase by other users.

![My vehicles](images/my_car.png)

### 3. Available Vehicles

Browse all vehicles currently listed on the platform. Any vehicle can be purchased by clicking the "Buy" button.

![Available vehicles](images/acceuil.png)

### 4. Ownership History

Users can view the complete chain of ownership for any vehicle by clicking "Show History", which opens a dedicated view listing all previous owners in chronological order.

![Ownership history](images/car-history.png)

---

## Conclusion

This blockchain-based vehicle platform aims to modernize the automotive resale market by making transactions faster, more transparent, and more secure. By eliminating unnecessary intermediaries and leveraging immutable on-chain records, the application delivers both cost efficiency and trust to every party involved.
