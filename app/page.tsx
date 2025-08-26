"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, DollarSign, ArrowDownUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [fromToken, setFromToken] = useState({
    symbol: "BNB",
    chain: "BNB Chain",
    icon: <Coins className="w-8 h-8 text-yellow-500" />,
  });
  const [toToken, setToToken] = useState({
    symbol: "CAKE",
    chain: "BNB Chain",
    icon: <DollarSign className="w-8 h-8 text-pink-500" />,
  });

  const handleSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 gap-6 transition-colors
      ${
        isDark
          ? "bg-background"
          : "bg-gradient-to-br from-white via-gray-50 to-gray-100"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg"
      >
        <div className="flex items-center gap-2 mt-8 mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold">OmniSwap Pro</h1>
          <div>
            <Badge>v2.0</Badge>
          </div>
        </div>
        <Card className="rounded-3xl border shadow-lg">
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  24H VOLUME
                </p>
                <p className="text-lg sm:text-xl font-bold text-primary">
                  $2.4B
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  TVL
                </p>
                <p className="text-lg sm:text-xl font-bold text-primary">
                  $8.7B
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  USERS
                </p>
                <p className="text-lg sm:text-xl font-bold text-primary">
                  156K
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg"
      >
        <Card className="rounded-3xl border shadow-lg">
          <CardContent className="space-y-4 p-4 sm:p-6">
            <div className="rounded-xl p-4 flex items-center justify-between bg-muted/50">
              <div>
                <div className="text-sm text-muted-foreground">From</div>
                <div className="flex items-center gap-2 font-semibold text-lg">
                  {fromToken.icon}
                  <span>{fromToken.symbol}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {fromToken.chain}
                </p>
              </div>
              <Input
                type="number"
                placeholder="0.00"
                className="w-24 sm:w-32 bg-transparent text-right font-bold text-lg sm:text-xl border-0 focus-visible:ring-0"
              />
            </div>

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
              <div>
                <div className="text-sm text-muted-foreground">To</div>
                <div className="flex items-center gap-2 font-semibold text-lg">
                  {toToken.icon}
                  <span>{toToken.symbol}</span>
                </div>
                <p className="text-sm text-muted-foreground">{toToken.chain}</p>
              </div>
              <Input
                type="number"
                placeholder="0.00"
                className="w-24 sm:w-32 bg-transparent text-right font-bold text-lg sm:text-xl border-0 focus-visible:ring-0"
              />
            </div>

            <div className="rounded-xl p-4 space-y-4 bg-muted/50">
              <div className="flex justify-between text-sm">
                <span className="underline text-primary cursor-pointer">
                  Slippage Tolerance
                </span>
                <span className="bg-muted px-3 py-1 rounded-md text-sm text-primary font-medium">
                  Auto: 0.50%
                </span>
              </div>
              <Button className="w-full rounded-xl font-semibold text-lg py-5 sm:py-6">
                Connect Wallet
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
