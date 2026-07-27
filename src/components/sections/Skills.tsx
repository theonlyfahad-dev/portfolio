"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Code2 } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold block mb-4">
            03 / SKILLS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            My Tech Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Languages & Web Dev) */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Languages</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-foreground" /> Python</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-foreground" /> C</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-foreground" /> JavaScript</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Web Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>

          {/* Center Graphic: Engineering Circular Visualization */}
          <div className="lg:col-span-6 flex justify-center py-12 lg:py-0 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Outer thin dashed ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dashed border-border rounded-full"
              />
              
              {/* Middle thin solid ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border border-border/80 rounded-full flex items-center justify-center"
              >
                {/* Orbiting dots */}
                <div className="absolute top-0 w-1.5 h-1.5 bg-foreground rounded-full -translate-y-1/2" />
                <div className="absolute bottom-1/4 right-0 w-1 h-1 bg-primary rounded-full translate-x-1/2" />
              </motion.div>
              
              {/* Inner dotted ring with red accent dots */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-28 border-[0.5px] border-dotted border-muted-foreground rounded-full"
              >
                <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-primary rounded-full" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary rounded-full" />
              </motion.div>

              {/* Central Code Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-background rounded-full border border-border flex items-center justify-center shadow-sm z-10">
                  <Code2 className="w-6 h-6 text-foreground" />
                </div>
              </div>
              
              {/* Technical drafting lines crossing through */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/50 -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-border/50 -translate-x-1/2" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/30 -translate-y-1/2 rotate-45" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/30 -translate-y-1/2 -rotate-45" />
              </div>
            </div>
          </div>

          {/* Right Column (Databases & Tools) */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Databases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>MySQL</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Tools & Technologies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Jupyter Notebook</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Core Concepts Row */}
        <div className="mt-16 pt-12 border-t border-border flex flex-wrap gap-4 justify-center">
          {resumeData.skills.concepts.map((concept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-2 rounded-md border border-border text-sm font-medium text-foreground bg-background hover:border-foreground transition-colors cursor-default"
            >
              {concept}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
