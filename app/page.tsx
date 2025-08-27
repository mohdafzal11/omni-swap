"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Coins,
  DollarSign,
  ArrowDownUp,
  Bitcoin,
  ChevronDown,
  ChevronUp,
  XCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Token = {
  symbol: string;
  chain: string;
  icon: React.ReactNode;
  balance: string;
};

type TokenModalProps = {
  onSelect: (token: Token) => void;
  title: string;
  tokens: Token[];
  selectedToken: Token;
};

const TokenModal = ({ onSelect, title, tokens, selectedToken }: TokenModalProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTokens = tokens.filter((token) =>
    token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 font-semibold text-lg cursor-pointer">
          {selectedToken.icon}
          <span>{selectedToken.symbol}</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </DialogTrigger>
      <DialogContent
        className={`w-[400px] sm:w-[450px] bg-card rounded-2xl p-4 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Search token..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 bg-muted rounded-xl p-2 text-foreground"
        />
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {filteredTokens.length > 0 ? (
            filteredTokens.map((token) => (
              <div
                key={token.symbol}
                onClick={() => {
                  onSelect(token);
                }}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                  selectedToken.symbol === token.symbol
                    ? "bg-muted"
                    : "hover:bg-muted"
                }`}
              >
                {token.icon}
                <div>
                  <div className="font-semibold">{token.symbol}</div>
                  <div className="text-sm text-muted-foreground">
                    {token.chain}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center gap-2 p-4 text-muted-foreground justify-center">
              <XCircle className="w-5 h-5" />
              <span>No tokens found</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [fromToken, setFromToken] = useState<Token>({
    symbol: "ETH",
    chain: "Ethereum",
    icon: <Bitcoin className="w-6 h-6 text-blue-400" />,
    balance: "0 ETH",
  });
  const [toToken, setToToken] = useState<Token>({
    symbol: "USDC",
    chain: "Ethereum",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    balance: "0 USDC",
  });

  const [showRouting, setShowRouting] = useState(true);
  const [enableTrade, setEnableTrade] = useState(false);

  const tokens: Token[] = [
    {
      symbol: "ETH",
      chain: "Ethereum",
      icon: <Bitcoin className="w-6 h-6 text-blue-400" />,
      balance: "0 ETH",
    },
    {
      symbol: "BNB",
      chain: "BNB Chain",
      icon: <Coins className="w-6 h-6 text-yellow-500" />,
      balance: "0 BNB",
    },
    {
      symbol: "USDT",
      chain: "Ethereum",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      balance: "0 USDT",
    },
    {
      symbol: "USDC",
      chain: "Ethereum",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      balance: "0 USDC",
    },
  ];

  const handleSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 gap-6 transition-colors ${
        isDark
          ? "bg-background text-white"
          : "bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg"
      >
        <Card className="rounded-3xl border shadow-lg">
          <CardContent className="space-y-4 p-4 sm:p-6">
            {/* You Pay */}
            <div className="rounded-xl p-4 flex items-center justify-between bg-muted/50">
              <div className="text-sm text-muted-foreground">You pay</div>
              <div className="text-sm text-muted-foreground">
                Balance: {fromToken.balance}
              </div>
            </div>
            <div className="rounded-xl p-4 flex items-center justify-between bg-muted">
              <TokenModal
                onSelect={(token) => setToToken(token)}
                title="Select Token to Pay"
                tokens={tokens}
                selectedToken={fromToken}
              />
              <Input
                type="number"
                placeholder="0"
                min={0}
                className="remove-arrows w-24 sm:w-32 bg-transparent text-right font-bold text-lg sm:text-xl border-0 focus-visible:ring-0"
              />
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <Button
                size="icon"
                onClick={handleSwap}
                className="rounded-full shadow-md w-12 h-12 sm:w-14 sm:h-14"
                variant="secondary"
              >
                <ArrowDownUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>

            <div className="rounded-xl p-4 flex items-center justify-between bg-muted/50">
              <div className="text-sm text-muted-foreground">You receive</div>
              <div className="text-sm text-muted-foreground">
                Balance: {toToken.balance}
              </div>
            </div>
            <div className="rounded-xl p-4 flex items-center justify-between bg-muted">
              <TokenModal
                onSelect={(token) => setToToken(token)}
                title="Select Token to Receive"
                tokens={tokens}
                selectedToken={toToken}
              />
              <Input
                type="number"
                min={0}
                placeholder="0"
                className="remove-arrows w-24 sm:w-32 bg-transparent text-right font-bold text-lg sm:text-xl border-0 focus-visible:ring-0"
              />
            </div>

            <div className="rounded-xl p-4 flex items-center justify-between bg-muted/50">
              <div className="text-sm text-yellow-400">+0 POINTS</div>
              <div className="text-sm text-muted-foreground">ETA: 36s</div>
            </div>

            <div className="rounded-xl p-4 bg-muted">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={enableTrade}
                    onChange={(e) => setEnableTrade(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm">Trade and Send to Another Address</span>
                </div>
                <button
                  onClick={() => setShowRouting(!showRouting)}
                  className="flex items-center gap-1 text-sm text-muted-foreground"
                >
                  <span>Routing</span>
                  {showRouting ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              <AnimatePresence>
                {showRouting && enableTrade && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-xl p-4 flex flex-col gap-3 bg-muted/70">
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <div className="flex items-center gap-2">
                          {fromToken.icon}
                          <span>{fromToken.chain.toUpperCase()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {toToken.icon}
                          <span>{toToken.chain.toUpperCase()}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {fromToken.icon}
                          <span className="text-sm">0 {fromToken.symbol}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">→</span>
                          <div className="rounded-full bg-yellow-500 p-1">
                            <Coins className="w-4 h-4 text-black" />
                          </div>
                          <span className="text-muted-foreground">→</span>
                        </div>

                        <div className="flex items-center gap-2">
                          {toToken.icon}
                          <span className="text-sm">0 {toToken.symbol}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button className="w-full rounded-xl font-semibold text-lg py-5 sm:py-6 bg-primary text-primary-foreground">
              Connect Wallet
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
