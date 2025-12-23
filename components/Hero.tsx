"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { full_name, summary, links, contact } = portfolioData.personal_information;

  return (
    <section id="about" className="pt-32 pb-20">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
             <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {full_name}
            </h1>
            <h2 className="text-2xl text-muted-foreground font-medium">
              Software Engineer & Backend Specialist
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={links.github}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <Github size={20} />
              GitHub
            </Link>
            <Link
              href={links.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </Link>
            {/* 
              Resume Link points to /resume.pdf 
              The user will mount their local folder containing 'resume.pdf' to /app/public inside the container.
            */}
             <a
              href="/Dheeraj_Fullstack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors cursor-pointer"
            >
              <FileDown size={20} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
