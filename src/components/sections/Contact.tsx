"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block font-semibold">
              07 / CONTACT
            </span>
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 text-foreground leading-[1.1]">
              Let's build <br />
              <span className="text-primary">something.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-md font-light leading-relaxed">
              Open for new opportunities and interesting projects. Let's connect and create exceptional digital experiences together.
            </p>
            
            <div className="space-y-8">
              <a 
                href={`mailto:${resumeData.personal.email}`}
                className="group flex items-center gap-6 p-4 -ml-4 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-background border border-transparent group-hover:border-border transition-all">
                  <Mail className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-1 font-semibold">Email</p>
                  <p className="text-lg font-medium text-foreground">{resumeData.personal.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6 p-4 -ml-4">
                <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-1 font-semibold">Location</p>
                  <p className="text-lg font-medium text-foreground">{resumeData.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-border flex gap-8">
              <a 
                href={resumeData.personal.github} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="font-mono text-sm tracking-wide uppercase font-semibold">GitHub</span>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </a>
              <a 
                href={resumeData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="font-mono text-sm tracking-wide uppercase font-semibold">LinkedIn</span>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:h-[700px] aspect-[3/4] lg:aspect-auto rounded-sm overflow-hidden group perspective-[2000px] border border-border"
          >
            <div className="absolute inset-0 w-full h-full transform-gpu transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              
              {/* Background Base (White for light theme) */}
              <div className="absolute inset-0 bg-white" />

              {/* Blueprint Grid (Light Theme) */}
              <motion.div 
                className="absolute inset-0 opacity-10"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.1, transition: { duration: 1 } } }}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                  backgroundPosition: 'center center'
                }}
              />

              {/* Drafting Lines (Light Theme) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <motion.rect
                  x="20" y="20" width="calc(100% - 40px)" height="calc(100% - 40px)"
                  fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="4 4"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } } }}
                />
                <motion.path
                  d="M 20 700 Q 150 350 300 150 T 600 700"
                  fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.3, transition: { duration: 2, ease: "easeInOut", delay: 1 } } }}
                />
              </svg>

              {/* Engineering Annotations */}
              <motion.div 
                className="absolute top-8 right-8 font-mono text-[10px] text-muted-foreground/60 text-right z-20 leading-tight"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 1.5 } } }}
              >
                <div>PROJECT: DIGITAL IDENTITY</div>
                <div>SCALE: 1:1</div>
                <div>STATUS: INITIATED</div>
              </motion.div>
              <motion.div 
                className="absolute bottom-8 left-8 font-mono text-[10px] text-primary z-20 leading-tight"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 1.5 } } }}
              >
                <div>ENGINEER: FAHAD KHAN</div>
                <div>SYS: ONLINE</div>
              </motion.div>

              {/* The Real Image */}
              <motion.div
                className="absolute inset-[20px] z-20 overflow-hidden mix-blend-multiply"
                variants={{
                  hidden: { opacity: 0, filter: "brightness(2) grayscale(100%) contrast(0.5) blur(8px)" },
                  visible: { opacity: 1, filter: "brightness(1) grayscale(0%) contrast(1) blur(0px)", transition: { duration: 2, delay: 2.5, ease: "easeOut" } }
                }}
              >
                <Image
                  src="/images/contact_portrait.jpg"
                  alt="Contact Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Scanning Line Reveal (Light Theme) */}
              <motion.div
                className="absolute left-0 right-0 z-30 pointer-events-none"
                variants={{
                  hidden: { top: "0%", opacity: 0 },
                  visible: { 
                    top: ["0%", "100%", "100%"], 
                    opacity: [0, 1, 0],
                    transition: { duration: 2.5, delay: 2, ease: "easeInOut" } 
                  }
                }}
                style={{ height: "150px", background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.02) 90%, rgba(239, 68, 68, 0.2))" }}
              >
                <div className="absolute bottom-0 w-full h-[1px] bg-primary shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              </motion.div>

              {/* Hover Interactions: Scan line */}
              <div className="absolute inset-0 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <motion.div 
                  className="w-full h-[1px] bg-primary/20 shadow-[0_0_10px_rgba(239,68,68,0.3)] absolute top-0"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
