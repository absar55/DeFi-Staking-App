# 💎🚀 DeFi Staking App – Custom Cryptocurrency with Max Supply & Staking 🚀💎

<p align="center">
  <img src="https://img.shields.io/badge/Blockchain-Ethereum-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Smart%20Contract-Solidity-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Frontend-React-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/DeFi-Staking-purple?style=for-the-badge" />
</p>

---

## 🏆 Overview

The **DeFi Staking App** is a **blockchain-powered platform** where I have created my **own cryptocurrency** with a **fixed maximum coin supply**.  
Users can **stake** their tokens, earn **rewards**, and participate in the decentralized financial ecosystem with **trustless smart contracts**.

Built on **Ethereum-compatible blockchain**, the application ensures **security, transparency, and decentralization** while providing an **intuitive UI** for all types of users.

---

## ✨ Features

### 🔹 Custom Cryptocurrency
- **Token Standard:** ERC-20 compliant
- **Fixed Supply:** Immutable maximum coin cap to prevent inflation.
- **Ownership:** Controlled and deployed via smart contracts.

### 🔹 Staking Mechanism
- **Flexible Staking:** Stake and unstake at any time.
- **APY Rewards:** Earn interest on your staked tokens.
- **Auto Rewards Distribution:** Rewards are calculated and distributed by the smart contract.

### 🔹 Security & Transparency
- **Immutable Contracts:** Once deployed, no alterations possible.
- **Open Source Smart Contracts:** Fully verifiable on Etherscan.
- **Non-Custodial:** Users hold their own private keys.

### 🔹 User-Friendly UI
- **Real-Time Balances**
- **Stake/Unstake in One Click**
- **Responsive Design** for mobile and desktop.

---

## 🛠 Tech Stack

| Layer           | Technology Used |
|-----------------|-----------------|
| **Blockchain**  | Ethereum (Solidity Smart Contracts) |
| **Frontend**    | React.js, TailwindCSS |
| **Backend**     | Node.js, Express.js |
| **Wallet**      | MetaMask Integration |
| **Database**    | MongoDB |
| **Deployment**  | Vercel (Frontend), Heroku/Render (Backend) |
| **Smart Contract Deployment** | Hardhat / Truffle |

---

## 📜 Smart Contract Details

- **Token Name:** MyCryptoToken (MCT)
- **Symbol:** `MCT`
- **Total Supply:** `MAX_SUPPLY` (Immutable)
- **Staking Contract:** Distributes rewards based on staking duration & amount.
🖥 Installation & Setup
🔹 Prerequisites
Node.js & npm

MetaMask wallet

Hardhat / Truffle

Ethereum testnet (Goerli/Polygon Mumbai)


📊 Tokenomics
Parameter	Value
Total Supply	1,000,000 MCT
Staking APY	12%
Reward Distribution	Every block
Minimum Stake	10 MCT

🛡 Security Measures
No Owner Privileges on minting after deployment.

Audited Contracts for common vulnerabilities.

Time-Lock Functions for sensitive actions.

🎯 Roadmap
✅ Phase 1 – Token creation & staking contract deployment
✅ Phase 2 – UI/UX development & wallet integration
🔄 Phase 3 – Mainnet deployment & liquidity pool creation
🔄 Phase 4 – Cross-chain staking & governance token


🤝 Contributing
We welcome contributions! Please fork the repo, create a branch, and submit a pull request.

📄 License
This project is licensed under the MIT License – see the LICENSE.md file for details.

💬 Contact
📧 Email: mabsarkhalid@gmail.com



**Core Functions:**
```solidity
function stake(uint256 amount) public;
function unstake(uint256 amount) public;
function claimRewards() public;
function getStakedAmount(address user) public view returns (uint256);
function getRewards(address user) public view returns (uint256);
