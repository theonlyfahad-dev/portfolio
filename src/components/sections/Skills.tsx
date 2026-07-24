"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export function Skills() {
  const skillCategories = [
    { title: "Languages", items: resumeData.skills.languages },
    { title: "Frameworks & Tools", items: [...resumeData.skills.frameworks, ...resumeData.skills.tools] },
    { title: "Databases", items: resumeData.skills.databases },
    { title: "AI & APIs", items: resumeData.skills.aiAndApis },
    { title: "Core Concepts", items: resumeData.skills.concepts },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Arsenal.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass relative overflow-hidden p-8 rounded-sm border border-border/10 hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Subtle Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <h3 className="relative text-xl font-mono font-medium tracking-wide mb-8 text-foreground group-hover:text-primary transition-colors z-10">
                <span className="text-primary mr-2">0{idx + 1}.</span> {category.title}
              </h3>
              
              <div className="relative flex flex-col gap-4 z-10">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-muted-foreground/80">{skill}</span>
                    </div>
                    {/* Animated proficiency bar visualization */}
                    <div className="h-[2px] w-full bg-background rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (skillIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary/50 to-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
