"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Title & Image */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold mb-4 block">
                02 / EXPERIENCE
              </span>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-12 text-foreground leading-[1.1]">
                Professional <br />
                <span className="text-primary">Experience.</span>
              </h2>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden mix-blend-multiply"
              >
                <Image
                  src="/images/experience_portrait.jpg"
                  alt="Experience"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 py-8">
            <div className="relative border-l border-border pl-8 ml-2 sm:ml-4 space-y-16">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Minimal Timeline Dot */}
                  <span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-border group-hover:scale-[2] group-hover:bg-primary transition-all duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                    <span className="text-xs font-mono tracking-widest text-primary uppercase font-medium">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-foreground transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground font-medium mb-4">
                    {exp.company}
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
