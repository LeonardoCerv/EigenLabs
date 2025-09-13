import { mnemonicToAccount } from 'viem/accounts';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  console.log('🚀 Starting EigenX TEE Application...');
  console.log('📅 Timestamp:', new Date().toISOString());
  
  const mnemonic = process.env.MNEMONIC;
  
  if (!mnemonic) {
    console.error('❌ MNEMONIC environment variable is not set');
    process.exit(1);
  }
  
  try {
    // Generate account from mnemonic
    const account = mnemonicToAccount(mnemonic);
    console.log('✅ Wallet generated successfully');
    console.log('📱 Wallet address:', account.address);
    
    // Create a public client to interact with Sepolia testnet
    const publicClient = createPublicClient({
      chain: sepolia,
      transport: http()
    });
    
    // Get wallet balance
    const balance = await publicClient.getBalance({
      address: account.address,
    });
    
    console.log('💰 Balance:', balance.toString(), 'wei');
    console.log('💰 Balance in ETH:', (Number(balance) / 1e18).toFixed(6), 'ETH');
    
    // Get latest block number
    const blockNumber = await publicClient.getBlockNumber();
    console.log('🔗 Latest block number:', blockNumber.toString());
    
    console.log('✅ Application running successfully in TEE environment');
    console.log('🔒 Private mnemonic is securely handled within the trusted execution environment');
    
    // Keep the application running
    setInterval(() => {
      console.log('⏰ Heartbeat:', new Date().toISOString());
    }, 30000);
    
  } catch (error) {
    console.error('❌ Error in application:', error);
    process.exit(1);
  }
}

main().catch(console.error);
