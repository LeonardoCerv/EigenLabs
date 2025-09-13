# EigenX TEE Application

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Viem](https://img.shields.io/badge/Viem-000000?style=for-the-badge&logo=ethereum&logoColor=white)](https://viem.sh/)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethereum.org/)
[![Sepolia](https://img.shields.io/badge/Sepolia_Testnet-FF6B35?style=for-the-badge&logo=ethereum&logoColor=white)](https://sepolia.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![TEE](https://img.shields.io/badge/Trusted_Execution_Environment-FF4500?style=for-the-badge&logo=security&logoColor=white)](https://en.wikipedia.org/wiki/Trusted_execution_environment)
[![EigenX](https://img.shields.io/badge/EigenX_Platform-00D4AA?style=for-the-badge&logo=data&logoColor=white)](https://github.com/Layr-Labs/eigenx-cli)

> A cutting-edge TypeScript application running in a Trusted Execution Environment (TEE) on the EigenX platform, featuring secure Ethereum wallet management and real-time blockchain interactions.

## 🔥 Features

- **🔐 Secure TEE Execution**: Runs in a trusted execution environment ensuring privacy and security
- **💰 Ethereum Integration**: Full wallet management with Viem library
- **🌐 Sepolia Testnet**: Real-time connection to Ethereum Sepolia test network
- **📊 Live Monitoring**: Continuous balance and block number tracking
- **🎨 Modern CLI**: Beautiful colored output with ASCII art and progress indicators
- **🐳 Docker Ready**: Containerized deployment for easy scaling
- **⚡ TypeScript**: Type-safe development with modern JavaScript features

## 🚀 Quick Start

### Prerequisites

- **Node.js** (>=18.0.0) - [Download](https://nodejs.org/)
- **Docker** - [Download](https://www.docker.com/get-started/)
- **Sepolia ETH** for deployment
  - [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
  - [Alchemy Faucet](https://sepoliafaucet.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/LeonardoCerv/EigenLabs.git
cd EigenLabs

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env and add your MNEMONIC
```

### Development

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

### Docker Deployment

```bash
# Build Docker image
docker build -t eigenx-tee-app .

# Run locally
docker run --rm --env-file .env eigenx-tee-app
```

## 🏗️ Architecture

```
EigenX TEE Application
├── 🔑 Secure Wallet Generation
├── 🌐 Sepolia Network Connection
├── 💰 Real-time Balance Monitoring
├── 🔗 Live Block Tracking
└── ⏰ Continuous Health Monitoring
```

## 📋 Environment Variables

Create a `.env` file with:

```env
MNEMONIC=your_12_word_mnemonic_phrase_here
```

## 🚀 Deployment to EigenX

```bash
# Authenticate with EigenX
eigenx auth generate --store

# Deploy your application
eigenx app deploy your-username/eigenx-tee-app
```

## 📊 Monitoring & Management

```bash
# List your applications
eigenx app list

# View application logs
eigenx app logs your-app-name

# Get application info
eigenx app info your-app-name

# Stop/start/terminate applications
eigenx app stop your-app-name
eigenx app start your-app-name
eigenx app terminate your-app-name
```

## 🔧 Development

### Project Structure

```
EigenLabs/
├── src/
│   └── index.ts          # Main application entry point
├── Dockerfile            # Container configuration
├── package.json          # Node.js dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

### Building

```bash
npm run build  # Compile TypeScript to JavaScript
npm start      # Run the compiled application
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [EigenX Platform](https://github.com/Layr-Labs/eigenx-cli) - For the amazing TEE infrastructure
- [Viem](https://viem.sh/) - Ethereum library for TypeScript
- [Layr Labs](https://www.layr-labs.com/) - For pioneering decentralized infrastructure

## 📞 Support

- 📧 [Create an Issue](https://github.com/LeonardoCerv/EigenLabs/issues)
- 📖 [EigenX Documentation](https://github.com/Layr-Labs/eigenx-cli/blob/main/README.md)
- 🌐 [Sepolia Testnet](https://sepolia.dev/)

---

<div align="center">

**Built with ❤️ using TypeScript, Viem, and EigenX TEE**

[![Stars](https://img.shields.io/github/stars/LeonardoCerv/EigenLabs?style=social)](https://github.com/LeonardoCerv/EigenLabs/stargazers)
[![Forks](https://img.shields.io/github/forks/LeonardoCerv/EigenLabs?style=social)](https://github.com/LeonardoCerv/EigenLabs/network/members)

</div>
