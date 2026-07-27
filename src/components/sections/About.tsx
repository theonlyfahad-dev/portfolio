"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { MapPin, GraduationCap, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">
            01 / ABOUT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground">
              Engineer.<br />
              Problem Solver.<br />
              <span className="text-primary">Product Builder.</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-12">
              <p>
                {resumeData.personal.about}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium text-foreground">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-sm text-muted-foreground">Invertis University</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <p className="font-medium text-foreground">Based in {resumeData.personal.location}</p>
              </div>

              <div className="flex items-center gap-4">
                <Target className="w-5 h-5 text-muted-foreground" />
                <p className="font-medium text-foreground">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>
          
          {/* Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-lg overflow-visible group">
              <Image
                src="/images/about_portrait.jpg"
                alt="About"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center mix-blend-multiply"
                priority
              />
              
              {/* Decorative scribble / handwriting text */}
              <div className="absolute bottom-12 right-0 md:-right-8 font-mono text-muted-foreground text-sm leading-relaxed rotate-[-5deg] pointer-events-none opacity-50 uppercase tracking-widest text-right">
                CURIOUS<br />BUILD<br />IMPACT
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
