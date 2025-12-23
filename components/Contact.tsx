"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const { contact, links } = portfolioData.personal_information;

  return (
    <section id="contact" className="py-16 space-y-8 border-t border-white/10 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-6"
      >
        <h2 className="text-2xl font-bold tracking-tight">Get In Touch</h2>
        <p className="text-muted-foreground max-w-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
           <Link
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <Mail size={20} className="text-primary" />
            <span>{contact.email}</span>
          </Link>
          

        </div>

        <div className="flex gap-4 pt-4">
           <Link href={links.github} target="_blank" className="p-2 text-muted-foreground hover:text-white transition-colors">
             <Github size={24} />
           </Link>
           <Link href={links.linkedin} target="_blank" className="p-2 text-muted-foreground hover:text-blue-400 transition-colors">
             <Linkedin size={24} />
           </Link>
        </div>
      </motion.div>
    </section>
  );
}
