"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Logo from "./logo";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border py-10 mt-auto">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-10"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold"
            >
              <Logo />
            </motion.div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold">OmniLink</h1>
              <div>
                <Badge>v2.0</Badge>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-2">PRODUCTS</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {["Swap", "Liquidity Pools", "Analytics", "API"].map(
                (item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="transition-colors"
                  >
                    <Link href="#" className="hover:text-foreground">
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-2">RESOURCES</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {[
                "Documentation",
                "Security Audits",
                "Bug Bounty",
                "Brand Assets",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="transition-colors"
                >
                  <Link href="#" className="hover:text-foreground">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-2">COMMUNITY</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {["Discord", "Twitter", "GitHub", "Blog"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="transition-colors"
                >
                  <Link href="#" className="hover:text-foreground">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center items-center gap-3"
        >
          {["Audited", "Insured", "99.9% Uptime"].map((badge, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Badge
                variant="outline"
                className="rounded-full border-primary text-primary"
              >
                {badge}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          <span className="text-chart-1 mr-2">● All systems operational</span> ·
          © 2025 OmniLink Protocol. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
