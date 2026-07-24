"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      {/* Cinematic Background for Projects Section */}
      <div className="absolute inset-0 -z-20 w-full h-full opacity-20 pointer-events-none">
        <Image
          src="/images/projects.jpg"
          alt="Projects Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Works.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {resumeData.projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Project Card */}
              <Card className="glass border-border/20 overflow-hidden transition-all duration-700 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 relative">
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <CardContent className="relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 z-10">
                  
                  {/* Left Column: Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6 text-primary">
                        <Code2 className="h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {project.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm uppercase tracking-widest font-mono text-muted-foreground mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground/90">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-150 transition-transform duration-500" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex gap-4 mt-8 pt-8 border-t border-border/50">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono hover:text-primary transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon className="h-4 w-4" /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono hover:text-primary transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Tech Stack Visualization */}
                  <div className="lg:w-[40%] bg-black/40 rounded-sm border border-white/5 p-8 flex flex-col justify-center group-hover:bg-black/60 group-hover:border-primary/20 transition-all duration-700">
                    <h4 className="text-sm uppercase tracking-widest font-mono text-muted-foreground mb-6 text-center">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary-foreground text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
