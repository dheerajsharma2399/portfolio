"use client";

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
    <header className="flex justify-center py-6 mb-8">
      <nav className="flex items-center gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}