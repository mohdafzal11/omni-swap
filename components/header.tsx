"use client";

import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Settings,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [openNetwork, setOpenNetwork] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-white font-bold">
            <Logo />
          </div>
          <span className="text-lg sm:text-xl font-semibold">OmniLink</span>
          <Badge className="text-xs sm:text-sm">v2.0</Badge>
        </motion.div>

        <div className="sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-8 w-8"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden sm:flex items-center space-x-2"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full h-10 w-10"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Dialog open={openSettings} onOpenChange={setOpenSettings}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-background/95 text-foreground border-border rounded-2xl shadow-xl p-6">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl font-semibold text-center">
                  Settings
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium">
                    Dark mode
                  </span>
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium">
                    Allow notifications
                  </span>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium">
                    Token Risk Scanning
                  </span>
                  <Switch defaultChecked />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 text-sm h-10">
          </Button> */}
          <ConnectButton />

        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-background/95 border-b border-border px-2 py-4"
          >
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-2 text-sm h-10"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsMenuOpen(false);
                }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>

              <Dialog open={openSettings} onOpenChange={setOpenSettings}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-start gap-2 text-sm h-10"
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </Button>
                </DialogTrigger>
              </Dialog>

              <Dialog open={openNetwork} onOpenChange={setOpenNetwork}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-start gap-2 text-sm h-10"
                  >
                    <span>Select Network</span>
                    <span>
                      {" "}
                      {openNetwork ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </Button>
                </DialogTrigger>
              </Dialog>

             <ConnectButton/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
