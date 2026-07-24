"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-black/50">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Image & Title */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                Career
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-12">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Experience.</span>
              </h2>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 hover:bg-transparent transition-colors duration-700" />
                <Image
                  src="/images/experience-v3.jpg"
                  alt="Experience Environment"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale-[30%] hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Right Column: Timeline */}
          <div className="lg:col-span-7">
            <div className="relative border-l border-border/50 pl-8 ml-4 space-y-20 py-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:scale-150 group-hover:bg-primary transition-all duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <span className="text-sm font-mono tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <p className="text-xl text-muted-foreground/80 font-medium mb-6">
                    {exp.company}
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
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
