import { mnemonicToAccount } from 'viem/accounts';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import dotenv from 'dotenv';

dotenv.config();

import chalk from 'chalk';

async function main() {
  // Cool ASCII Banner
  console.log(chalk.cyan.bold(`
╔════════════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ███████╗██╗ ██████╗ ███████╗███╗   ██╗██╗  ██╗    ████████╗███████╗███████╗ ║
║  ██╔════╝██║██╔════╝ ██╔════╝████╗  ██║╚██╗██╔╝    ╚══██╔══╝██╔════╝██╔════╝  ║
║  █████╗  ██║██║  ███╗█████╗  ██╔██╗ ██║ ╚███╔╝       ██║   █████╗  █████╗   ║
║  ██╔══╝  ██║██║   ██║██╔══╝  ██║╚██╗██║ ██╔██╗       ██║   ██╔══╝  ██╔══╝   ║
║  ███████╗██║╚██████╔╝███████╗██║ ╚████║██╔╝ ██╗       ██║   ███████╗███████╗ ║
║  ╚══════╝╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝      ╚═╝   ╚══════╝╚══════╝  ║
║                                                                        ║
║                    🔐 TRUSTED EXECUTION ENVIRONMENT 🔐                  ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════════════╝
  `));

  console.log(chalk.yellow('🚀 Initializing EigenX TEE Application...'));
  console.log(chalk.gray('📅 Timestamp:'), chalk.white(new Date().toISOString()));
  console.log('');

  const mnemonic = process.env.MNEMONIC;

  if (!mnemonic) {
    console.log(chalk.red.bold('❌ CRITICAL ERROR: MNEMONIC environment variable is not set'));
    console.log(chalk.red('💡 Please set your MNEMONIC in the .env file'));
    process.exit(1);
  }

  try {
    console.log(chalk.blue('🔑 Generating secure wallet from mnemonic...'));
    // Generate account from mnemonic
    const account = mnemonicToAccount(mnemonic);
    console.log(chalk.green('✅ Wallet generated successfully'));
    console.log(chalk.magenta('📱 Wallet Address:'), chalk.white.bold(account.address));
    console.log('');

    console.log(chalk.blue('🌐 Connecting to Sepolia testnet...'));
    // Create a public client to interact with Sepolia testnet
    const publicClient = createPublicClient({
      chain: sepolia,
      transport: http()
    });
    console.log(chalk.green('✅ Connected to Sepolia network'));
    console.log('');

    console.log(chalk.blue('💰 Fetching wallet balance...'));
    // Get wallet balance
    const balance = await publicClient.getBalance({
      address: account.address,
    });

    console.log(chalk.green('✅ Balance retrieved'));
    console.log(chalk.yellow('💰 Balance:'), chalk.white.bold(balance.toString()), chalk.gray('wei'));
    console.log(chalk.yellow('💰 Balance in ETH:'), chalk.white.bold((Number(balance) / 1e18).toFixed(6)), chalk.gray('ETH'));
    console.log('');

    console.log(chalk.blue('🔗 Fetching latest block information...'));
    // Get latest block number
    const blockNumber = await publicClient.getBlockNumber();
    console.log(chalk.green('✅ Block data retrieved'));
    console.log(chalk.yellow('🔗 Latest Block Number:'), chalk.white.bold(blockNumber.toString()));
    console.log('');

    console.log(chalk.green.bold('🎉 APPLICATION RUNNING SUCCESSFULLY IN TEE ENVIRONMENT'));
    console.log(chalk.cyan('🔒 Your private mnemonic is securely handled within the trusted execution environment'));
    console.log(chalk.gray('⏰ Heartbeat active - monitoring every 30 seconds'));
    console.log('');

    // Keep the application running
    setInterval(() => {
      console.log(chalk.gray('💓 Heartbeat:'), chalk.white(new Date().toISOString()));
    }, 30000);

  } catch (error) {
    console.log(chalk.red.bold('❌ ERROR IN APPLICATION:'));
    console.log(chalk.red(error));
    process.exit(1);
  }
}

main().catch(console.error);
