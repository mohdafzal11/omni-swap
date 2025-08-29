import { useState, useEffect } from "react";
import { useAppKit } from "@reown/appkit/react";
import { useAppKitAccount, useAppKitBalance } from "@reown/appkit/react";
import { useDisconnect } from "@reown/appkit/react";

interface Balance {
  symbol: string;
  balance: string;
}

function useWallet() {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } =
    useAppKitAccount();
  const { open, close } = useAppKit();
  const { fetchBalance } = useAppKitBalance();
  const { disconnect } = useDisconnect();
  const [balance, setBalance] = useState<Balance | null>();

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
      setBalance(response.data);
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
    getBalance
  };
}

export default useWallet;
