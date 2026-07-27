"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 pt-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">
                01 / {resumeData.personal.role}
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-foreground">
              {resumeData.personal.name.split(" ")[0]}
              <br />
              <span className="text-primary">
                {resumeData.personal.name.split(" ")[1]}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide leading-relaxed mb-12">
              I craft powerful, scalable and meaningful digital solutions with clean code and thoughtful design. Turning ideas into impact.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link 
                href="#projects"
                className="group flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-md hover:bg-primary transition-all font-medium uppercase tracking-widest text-sm"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="/resume.pdf"
                className="group flex items-center gap-3 border border-border text-foreground px-8 py-4 rounded-md hover:border-foreground transition-all font-medium uppercase tracking-widest text-sm"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Content: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end overflow-visible"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] overflow-visible">
              <Image
                src="/images/hero_portrait_whitebg.jpg"
                alt={resumeData.personal.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-right md:object-center mix-blend-multiply"
                style={{ filter: "contrast(1.05) brightness(1.02)" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
