"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Logo from "./logo";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">
            <Logo />
          </div>
          <span className="text-xl sm:text-2xl font-semibold">OmniLink</span>
          <Badge>v2.0</Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden lg:flex items-center space-x-6 text-sm gap-10"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="text-base text-chart-1 font-bold">30s</div>
            <div className="text-xs text-muted-foreground font-normal">
              VS 10-60MIN
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-base text-chart-2 font-bold">40-100x</div>
            <div className="text-xs text-muted-foreground font-normal">
              MORE EFFICIENT
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" text-base text-chart-3 font-bold">0.05%</div>
            <span className="text-xs text-muted-foreground font-normal">
              VS 0.3% FEES
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center space-x-2 sm:space-x-3"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <div className="hidden sm:block">
            <Select defaultValue="ethereum">
              <SelectTrigger className="w-[140px] bg-accent/50 text-foreground rounded-full border">
                <SelectValue placeholder="Select chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ethereum">Ethereum</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 sm:px-6 shadow-md text-sm sm:text-base">
            Connect Wallet
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
