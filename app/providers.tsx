"use client";

import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { useTheme } from "next-themes";

import { config } from "../wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const customDark = {
    ...darkTheme({
      accentColor: "#6366f1",
      accentColorForeground: "white",
      borderRadius: "large",
    }),
    colors: {
      ...darkTheme({
        accentColor: "#6366f1",
        accentColorForeground: "white",
        borderRadius: "large",
      }).colors,
      modalBackground: "#1d2438", 
      modalBorder: "#1e293b",    
      modalText: "#ffffff",
    },
  };

  const customLight = {
    ...lightTheme({
      accentColor: "#1d4ed8",
      accentColorForeground: "white",
      borderRadius: "large",
    }),
    colors: {
      ...lightTheme({
        accentColor: "#1d4ed8",
        accentColorForeground: "white",
        borderRadius: "large",
      }).colors,
      modalBackground: "#ffffff", 
      modalBorder: "#e2e8f0",
      modalText: "#0f172a",
    },
  };
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="wide"
          theme={theme === "dark" ? customDark : customLight}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Providers;
