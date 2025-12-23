"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg shadow-purple-500/10 pointer-events-auto overflow-x-auto max-w-full no-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium text-slate-300 transition-all duration-300 whitespace-nowrap",
              "hover:bg-white/10 hover:text-white hover:scale-105"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
