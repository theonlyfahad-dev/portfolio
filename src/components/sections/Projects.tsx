"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Generic Mock Browser Graphic component for project cards
const MockBrowser = ({ title }: { title: string }) => (
  <div className="w-full aspect-[4/3] bg-muted/30 rounded-t-lg border-b border-border/50 p-4 flex flex-col group-hover:bg-muted/50 transition-colors">
    <div className="flex gap-1.5 mb-4">
      <div className="w-2 h-2 rounded-full bg-border/80" />
      <div className="w-2 h-2 rounded-full bg-border/80" />
      <div className="w-2 h-2 rounded-full bg-border/80" />
    </div>
    <div className="flex-1 bg-background rounded-md border border-border/50 p-4 shadow-sm flex flex-col gap-3">
      <div className="w-1/3 h-4 bg-muted rounded-sm mb-2" />
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-full h-2 bg-muted/60 rounded-full" />
      ))}
      <div className="w-2/3 h-2 bg-muted/60 rounded-full" />
    </div>
  </div>
);

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block font-semibold">
            04 / PROJECTS
          </span>
          <div className="flex justify-between items-end">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Things I've Built
            </h2>
            <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
              View All Projects <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full"
            >
              <Card className="h-full flex flex-col bg-card border-border hover:border-foreground/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden rounded-xl">
                
                <MockBrowser title={project.title} />
                
                <CardContent className="p-6 flex flex-col flex-1">
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold tracking-tight text-foreground leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-muted-foreground shrink-0 ml-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                          <GithubIcon className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 rounded bg-secondary text-secondary-foreground text-xs font-medium cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
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
