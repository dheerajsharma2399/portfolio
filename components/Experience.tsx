"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { work_experience } = portfolioData;

  return (
    <section id="experience" className="py-16 space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold tracking-tight"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-12">
        {work_experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative border-l-2 border-border/50 pl-8 ml-3 space-y-4"
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-background bg-primary" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-lg text-muted-foreground">{job.company}</p>
              </div>
              <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                {job.start_date} — {job.end_date}
              </span>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
              {job.key_achievements.map((achievement, i) => (
                <li key={i} className="pl-1">
                  {achievement}
                </li>
              ))}
            </ul>
            
             <div className="flex flex-wrap gap-2 pt-2">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
