"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const { technical_skills } = portfolioData;
  
  // Grouping for a better layout
  const categories = [
    { name: "Languages", skills: technical_skills.languages },
    { name: "Backend", skills: technical_skills.backend },
    { name: "Frontend", skills: technical_skills.frontend },
    { name: "AI / ML", skills: technical_skills.ai_ml },
    { name: "DevOps", skills: technical_skills.devops_cloud },
    { name: "Data", skills: technical_skills.data_infrastructure },
  ];

  return (
    <section id="skills" className="py-16 space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold tracking-tight"
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border border-border p-4 bg-card/50"
          >
            <h3 className="font-semibold mb-3 text-primary">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-gray-500/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
