const MONAD_CHAIN_ID = '0x279f'; // 10239 in hex
const MONAD_CHAIN_NAME = 'Monad Testnet';
const MONAD_RPC = 'https://testnet-rpc.monad.xyz';
const MONAD_EXPLORER = 'https://testnet.monadexplorer.com/';

export const connectWallet = async () => {
  if (!window.ethereum) {
    alert('MetaMask not detected');
    return null;
  }

  try {
    // Request wallet connection
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    const address = accounts[0];
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    // If not on Monad Testnet, prompt to switch
    if (chainId !== MONAD_CHAIN_ID) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: MONAD_CHAIN_ID }]
        });
      } catch (switchError) {
        // If Monad not added to MetaMask, add it
        if (switchError.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: MONAD_CHAIN_ID,
              chainName: MONAD_CHAIN_NAME,
              rpcUrls: [MONAD_RPC],
              nativeCurrency: {
                name: 'Monad',
                symbol: 'MON',
                decimals: 18
              },
              blockExplorerUrls: [MONAD_EXPLORER]
            }]
          });
        } else {
          alert('Failed to switch to Monad Testnet');
          return null;
        }
      }
    }

    return { address };
  } catch (error) {
    console.error('Wallet connection failed:', error);
    return null;
  }
};