"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const { projects } = portfolioData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Recent <span className="text-purple-400">Projects</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mt-10 p-4 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={cn(
              "flex items-center justify-center w-full transition-all duration-300",
              // Increase min-height to accommodate larger tiles
              "min-h-[28rem] sm:min-h-[35rem]"
            )}
          >
            {/* 3D Card Container */}
            <motion.div
              layout
              onClick={() => toggleExpand(project.id)}
              whileHover={{ y: -5 }}
              className="relative flex items-center justify-center w-full h-full cursor-pointer"
            >
              {/* Card Background / Border Glow */}
              <div className={cn(
                "relative w-full h-full overflow-hidden rounded-3xl bg-[#13162D] border border-white/5 shadow-xl transition-all duration-300",
                expandedId === project.id ? "ring-2 ring-purple-500/50 scale-[1.02]" : "hover:border-purple-500/30"
              )}>
                
                {/* Image Area - Fixed height proportion */}
                <div className="relative w-full h-64 sm:h-80 bg-[#10132E] overflow-hidden group border-b border-white/5">
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5" />
                   <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex flex-col">
                  <div className="flex justify-between items-start gap-4">
                    <h1 className="font-bold text-xl md:text-2xl text-white line-clamp-1 flex-1">
                      {project.title}
                    </h1>
                    {expandedId === project.id ? (
                      <ChevronUp className="text-purple-400 shrink-0" />
                    ) : (
                      <ChevronDown className="text-slate-500 shrink-0" />
                    )}
                  </div>

                  <p className="font-light text-sm md:text-base text-[#BEC1DD] mt-3 line-clamp-2">
                    {project.des}
                  </p>

                  {/* Expanded Content: Key Features */}
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-4 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wider">Key Features</h4>
                          <ul className="space-y-2">
                            {project.key_features.map((feature, i) => (
                              <motion.li 
                                key={i}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm text-slate-300 flex items-start gap-2"
                              >
                                <span className="text-purple-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer: Tech Icons & Link */}
                  <div className="flex items-center justify-between mt-8 pt-4">
                    <div className="flex items-center pl-2">
                      {project.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-[#10132E] w-10 h-10 flex justify-center items-center -ml-2 first:ml-0 shadow-sm"
                        >
                          <img src={icon} alt="icon" className="p-2 w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>

                    <Link
                      href={project.link}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex justify-center items-center gap-2 group px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm sm:text-base text-purple-300 group-hover:text-purple-400 font-semibold whitespace-nowrap">
                        Check Live Site
                      </span>
                      <Navigation className="text-purple-300 group-hover:text-purple-400 transition-colors" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}