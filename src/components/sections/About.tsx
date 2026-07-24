"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";

const words = ["Innovation.", "Creativity.", "Curiosity."];

function AnimatedTypewriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let typingSpeed = 100;
    if (isDeleting) typingSpeed = 50;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="inline-flex min-w-[220px] sm:min-w-[360px]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
        {currentText}
      </span>
      <span className="animate-pulse text-primary ml-1 -translate-y-1">|</span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
              <Image
                src="/images/about-3d-relaxed.jpg"
                alt="About"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale-[20%]"
              />
            </div>
            
            {/* Decorative typography behind image */}
            <div className="absolute -left-12 -bottom-12 text-[10rem] font-black text-white/[0.02] -z-10 select-none pointer-events-none">
              WHO
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                Biography
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 flex flex-wrap items-center gap-x-4">
                <span>Driven by</span> <AnimatedTypewriter />
              </h2>
            </div>
            
            <div className="space-y-6 text-lg sm:text-xl text-muted-foreground/90 font-light leading-relaxed max-w-3xl">
              <p>
                {resumeData.personal.about}
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/50 pt-12">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-2">Location</p>
                <p className="text-xl font-medium">{resumeData.personal.location}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-2">Area of Interest</p>
                <p className="text-xl font-medium">Software Engineering &bull; AI Applications &bull; Business Analysis</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
