import { useState, useEffect } from "react";
import { useAppKit } from "@reown/appkit/react";
import { useAppKitAccount, useAppKitBalance } from "@reown/appkit/react";
import { useDisconnect } from "@reown/appkit/react";
import {Chain , Token , SelectedToken , Balance} from "../types/token";
import { CHAINS } from "@/data/chain";
import { TOKENS } from "@/data/token";

function useWallet() {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount();
  const { open, close } = useAppKit();
  const { fetchBalance } = useAppKitBalance();
  const { disconnect } = useDisconnect();
  const [chains, setChain] = useState<Chain[]>(CHAINS || []);
  const [tokens, setTokens] = useState<Token[]>(TOKENS || []);  
  const [balance, setBalance] = useState<Balance | null>(null);
  const [fromChain, setFromChain] = useState<Chain | null>(CHAINS[0]);
  const [toChain, setToChain] = useState<Chain | null>(CHAINS[1]);
  const [fromToken , setFromToken] = useState<SelectedToken | null>(TOKENS[0]);
  const [toToken , setToToken] = useState<SelectedToken | null>(TOKENS[1]);

  const connectWallet = async () => {
    try {
      await open({ view: "Connect" });
    } catch (err) {
      console.error("Wallet connection error:", err);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();
    } catch (err) {
      console.error("Wallet disconnection error:", err);
    }
  };

  const getBalance = async () => {
    if (isConnected) {
      const response = await fetchBalance();
      if (response?.data) {
        setBalance(response.data);
      }
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return {
    address,
    balance,
    isConnected,
    caipAddress,
    status,
    embeddedWalletInfo,
    connectWallet,
    disconnectWallet,
    getBalance,
    chains,
    tokens, 
    fromChain ,
    setFromChain,
    toChain,
    setToChain,
    fromToken,
    setFromToken,
    toToken,
    setToToken
  };
}

export default useWallet;
