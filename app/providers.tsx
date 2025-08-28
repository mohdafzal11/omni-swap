"use client";

import {
  DynamicContextProvider,
  FilterChain,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import {
  BitcoinIcon,
  EthereumIcon,
  FlowIcon,
  SolanaIcon,
} from "@dynamic-labs/iconic";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "8d795db9-e733-47a1-936d-c163cd24e624",
        walletConnectors: [EthereumWalletConnectors, SolanaWalletConnectors],
        initialAuthenticationMode: "connect-only",
        overrides: {
          views: [
            {
              type: "wallet-list",
              tabs: {
                items: [
                  {
                    label: { text: "All chains" },
                  },
                  {
                    label: { icon: <EthereumIcon /> },
                    walletsFilter: FilterChain("EVM"),
                    recommendedWallets: [{ walletKey: "phantomevm" }],
                  },
                  {
                    label: { icon: <SolanaIcon /> },
                    walletsFilter: FilterChain("SOL"),
                  },
                  {
                    label: { icon: <BitcoinIcon /> },
                    walletsFilter: FilterChain("BTC"),
                  },
                  {
                    label: { icon: <FlowIcon /> },
                    walletsFilter: FilterChain("FLOW"),
                  },
                ],
              },
            },
          ],
        },
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
