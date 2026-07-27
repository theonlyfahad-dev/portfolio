"use client";

import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import { FileBadge, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

export function Achievements() {
  const [activeAchievementId, setActiveAchievementId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  if (!resumeData.achievements || resumeData.achievements.length === 0) {
    return null;
  }

  const activeAchievement = activeAchievementId !== null ? resumeData.achievements[activeAchievementId] : null;

  return (
    <section ref={sectionRef} id="achievements" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold block mb-4">
            05 / ACHIEVEMENTS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 relative items-start">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-5 relative">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-12">
              Milestones That<br />Drive Me
            </h2>
            
            <div className="relative border-l border-border pl-8 space-y-12">
              {resumeData.achievements.map((achievement, index) => {
                const isActive = activeAchievementId === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative cursor-pointer group"
                    onClick={() => setActiveAchievementId(index)}
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full border border-border bg-background transition-all duration-300 flex items-center justify-center">
                      <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-foreground'}`} />
                    </div>
                    {/* Active highlight pulse ring */}
                    {isActive && (
                      <div className="absolute -left-[41px] top-0.5 w-4 h-4 rounded-full border border-primary/30 animate-pulse pointer-events-none" />
                    )}

                    <div className="flex items-center gap-4 mb-1">
                      <span className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="text-sm text-muted-foreground font-medium mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/60 uppercase tracking-wide">
                      {achievement.organization}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certificate Viewer (Sticky) */}
          <div className="lg:col-span-7 relative h-auto lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:py-24">
            <div className="w-full max-w-[800px] aspect-[1.414/1] relative">
              
              <AnimatePresence mode="wait">
                {activeAchievementId === null ? (
                  // Empty State
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="absolute inset-0 rounded-xl border border-dashed border-border flex flex-col items-center justify-center text-center p-8 bg-muted/10"
                  >
                    <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                      <FileBadge className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm max-w-[200px]">
                      Click on any achievement to reveal the certificate
                    </p>
                    {/* Hand-drawn arrow mock */}
                    <svg className="absolute top-1/4 right-1/4 w-12 h-12 text-muted-foreground/50 opacity-50 hidden sm:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 80 Q 50 20 80 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <path d="M65 15 L 80 20 L 75 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </motion.div>
                ) : (
                  // Cinematic Sequence Viewer
                  <motion.div
                    key={`viewer-${activeAchievementId}`}
                    className="absolute inset-0 rounded-sm transform-gpu perspective-[2000px] shadow-sm bg-background"
                  >
                    <div className="w-full h-full relative overflow-hidden border border-border">
                      {/* Top bar */}
                      <div className="absolute top-0 left-0 w-full h-8 bg-muted/20 border-b border-border/50 z-50 flex items-center justify-between px-4">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-border" />
                          <div className="w-2 h-2 rounded-full bg-border" />
                          <div className="w-2 h-2 rounded-full bg-border" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1 cursor-pointer hover:text-foreground" onClick={() => setActiveAchievementId(null)}>
                          Close <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>

                      {/* Animation Wrapper */}
                      <div className="absolute inset-0 top-8 bg-background overflow-hidden flex items-center justify-center">
                        
                        {/* 1. Base Blueprint Background (fades out at 1.5s) */}
                        <motion.div 
                          className="absolute inset-0 bg-blue-50/30 z-0"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{ duration: 1.0, delay: 1.5, ease: "easeInOut" }}
                        />

                        {/* 2. Technical Grid (fades out at 1.5s) */}
                        <motion.div 
                          className="absolute inset-0 opacity-20 z-10 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.4, 0] }}
                          transition={{ duration: 2.5, times: [0, 0.2, 1], ease: "easeInOut" }}
                          style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                            backgroundPosition: 'center center'
                          }}
                        />

                        {/* 3. SVG Blueprint Drafting Lines (0.5s - 1.5s) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                          <motion.rect x="5%" y="5%" width="90%" height="90%" fill="none" stroke="rgba(0,0,0, 0.3)" strokeWidth="1" strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 2.0, delay: 0.5, times: [0, 0.5, 1], ease: "easeInOut" }} />
                          <motion.rect x="30%" y="20%" width="40%" height="10%" fill="none" stroke="rgba(0,0,0, 0.3)" strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 1.8, delay: 0.7, times: [0, 0.5, 1], ease: "easeInOut" }} />
                          <motion.line x1="25%" y1="45%" x2="75%" y2="45%" stroke="rgba(0,0,0, 0.2)" strokeWidth="1" 
                            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 0.9, times: [0, 0.6, 1] }} />
                          <motion.circle cx="80%" cy="80%" r="6%" fill="none" stroke="rgba(0,0,0, 0.3)" strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 1.8, delay: 0.8, times: [0, 0.6, 1] }} />
                        </svg>

                        {/* 4. Real Certificate Materialization (1.5s - 3.0s) */}
                        <motion.div
                          className="absolute inset-[2%] z-30 bg-white overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center rounded-sm"
                          initial={{ opacity: 0, filter: "blur(2px) grayscale(100%) contrast(150%)" }}
                          animate={{ opacity: 1, filter: "blur(0px) grayscale(0%) contrast(100%)" }}
                          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={activeAchievement?.image || ""}
                              alt={activeAchievement?.title || "Certificate"}
                              fill
                              className="object-contain"
                              sizes="(max-width: 1200px) 90vw, 800px"
                              priority
                            />
                          </div>
                        </motion.div>

                        {/* 5. Golden Light Sweep (3.0s - 4.0s) */}
                        <motion.div 
                          className="absolute inset-0 z-40 pointer-events-none mix-blend-overlay overflow-hidden"
                          initial={{ left: "-100%", opacity: 0 }}
                          animate={{ left: ["-100%", "100%"], opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, delay: 2.8, ease: "easeInOut" }}
                          style={{ background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 45%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 55%, transparent 80%)", width: "200%" }}
                        />

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
