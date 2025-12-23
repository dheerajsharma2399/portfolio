"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const { projects } = portfolioData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold tracking-tight"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden flex flex-col cursor-pointer",
              expandedId === project.id ? "ring-1 ring-primary/50" : ""
            )}
            onClick={() => toggleExpand(project.id)}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {project.title.charAt(0)}
                </div>
                <div className="flex gap-2 items-center">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                {project.title}
                {expandedId === project.id ? (
                  <ChevronUp size={16} className="text-muted-foreground" />
                ) : (
                  <ChevronDown size={16} className="text-muted-foreground" />
                )}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-muted-foreground border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
                 {project.tech.length > 4 && (
                   <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-muted-foreground border border-white/10">
                     +{project.tech.length - 4}
                   </span>
                )}
              </div>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                        {project.key_features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}