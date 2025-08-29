import { Token } from "../types/token";

export const TOKENS: Token[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    logo: "/logos/eth.png",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
    decimals: 18,
  },
  {
    name: "Binance Smart Chain",
    symbol: "BNB",
    logo: "/logos/bnb.png",
    address: "0xBB4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
    decimals: 18,
  },
  {
    name: "Arbitrum One",
    symbol: "ARB",
    logo: "/logos/arb.png",
    address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1", // WETH on Arbitrum
    decimals: 18,
  },
  {
    name: "Base",
    symbol: "BASE",
    logo: "/logos/base.png",
    address: "0x4200000000000000000000000000000000000006", // WETH on Base
    decimals: 18,
  },
  {
    name: "Solana",
    symbol: "SOL",
    logo: "/logos/solana.png",
    address: "So11111111111111111111111111111111111111112", // Wrapped SOL
    decimals: 9,
  },
];
