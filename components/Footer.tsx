"use client";

import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { full_name } = portfolioData.personal_information;

  return (
    <footer className="py-12 mt-12 border-t border-border/40 text-center">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {full_name}
        </p>
        <p className="text-xs text-muted-foreground/60">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}