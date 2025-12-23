"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { getTechColor, cn } from "@/lib/utils";
import { Code2, Server, Layout, Brain, Cloud, Database } from "lucide-react";

export function Skills() {
  const { technical_skills } = portfolioData;

  const categories = [
    { name: "Languages", skills: technical_skills.languages, icon: Code2 },
    { name: "Frontend", skills: technical_skills.frontend, icon: Layout },
    { name: "Backend", skills: technical_skills.backend, icon: Server },
    { name: "AI / ML", skills: technical_skills.ai_ml, icon: Brain },
    { name: "DevOps & Cloud", skills: technical_skills.devops_cloud, icon: Cloud },
    { name: "Data Infrastructure", skills: technical_skills.data_infrastructure, icon: Database },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
       <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        My <span className="text-purple-400">Tech Stack</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
             {/* Hover Glow Effect */}
             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            {/* Card Content */}
            <div className="relative h-full rounded-2xl border border-white/10 bg-[#13162D] p-6 hover:border-purple-500/30 transition-colors duration-300 flex flex-col">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[#10132E] border border-white/10 text-purple-400 group-hover:text-purple-300 transition-colors shadow-inner">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-3 py-1.5 text-sm rounded-md font-medium border ring-1 ring-inset ring-opacity-20 transition-all duration-300 hover:scale-105 cursor-default shadow-sm",
                      getTechColor(skill)
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}