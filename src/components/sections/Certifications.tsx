"use client";

import { motion } from "framer-motion";
import { resumeData, Certification } from "@/data/resume";
import { Award, GraduationCap, ChevronRight } from "lucide-react";
import { useState } from "react";

function FlippableCard({ 
  cert, 
  index, 
  isFlipped, 
  onFlip 
}: { 
  cert: Certification, 
  index: number, 
  isFlipped: boolean, 
  onFlip: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000 relative w-full h-[280px] sm:h-[220px]"
    >
      <motion.div
        className="w-full h-full cursor-pointer relative preserve-3d"
        onClick={onFlip}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden flex items-start gap-6 p-8 rounded-sm bg-black/40 border border-white/5 hover:border-primary/20 transition-colors group">
          <div className="mt-1 bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors shrink-0">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 flex flex-col justify-center h-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground pr-8">{cert.name}</h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground/80 font-mono uppercase tracking-wide">
              <span className="text-primary">{cert.issuer}</span>
              {cert.date && (
                <>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{cert.date}</span>
                </>
              )}
            </div>
            {cert.details && cert.details.length > 0 && (
              <p className="mt-4 text-sm text-primary/80 font-mono tracking-widest uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view curriculum <ChevronRight className="h-4 w-4" />
              </p>
            )}
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 backface-hidden p-8 rounded-sm bg-primary/5 border border-primary/20 flex flex-col justify-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center gap-2 mb-4 text-primary">
            <GraduationCap className="h-5 w-5" />
            <h4 className="font-mono text-sm uppercase tracking-widest font-bold">Curriculum Details</h4>
          </div>
          {cert.details ? (
            <ul className="space-y-2">
              {cert.details.map((detail: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/90 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No additional details available.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Certifications() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  if (!resumeData.certifications || resumeData.certifications.length === 0) {
    return null;
  }

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Credentials
            </h2>
            <div className="h-1 w-12 bg-primary mb-6" />
            <p className="text-muted-foreground">
              Professional certifications and continued education programs. <br/>
              <span className="text-primary font-mono text-xs uppercase tracking-widest">Click cards to view details</span>
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {resumeData.certifications.map((cert, index) => (
            <FlippableCard 
              key={index} 
              cert={cert} 
              index={index} 
              isFlipped={flippedIndex === index}
              onFlip={() => handleFlip(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
