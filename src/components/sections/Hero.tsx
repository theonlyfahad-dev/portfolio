"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-end justify-center overflow-hidden pb-20 pt-32"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 -z-20 w-full h-full"
      >
        <Image
          src="/images/hero-v2.jpg"
          alt={resumeData.personal.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity grayscale-[30%]"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Available worldwide
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-6 uppercase">
            {resumeData.personal.name.split(" ")[0]}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-white">
              {resumeData.personal.name.split(" ")[1]}
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light tracking-wide max-w-2xl">
            {resumeData.personal.role}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-end text-right gap-8 hidden md:flex"
        >
          <p className="text-lg text-muted-foreground/80 max-w-xs leading-relaxed">
            I build elegant, scalable applications with a strong focus on modern software engineering practices.
          </p>
          <Link 
            href="#projects"
            className="group flex items-center justify-center h-24 w-24 rounded-full border border-primary/30 hover:border-primary bg-background/50 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-primary/10"
          >
            <ArrowDownRight className="h-8 w-8 text-primary group-hover:rotate-[-45deg] transition-transform duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
