"use client";

import { motion, AnimatePresence } from "framer-motion";
import { resumeData, Certification } from "@/data/resume";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

function CertificateCard({ 
  cert, 
  index, 
  onZoom 
}: { 
  cert: Certification, 
  index: number, 
  onZoom: (image: string, index: number) => void 
}) {
  const issuerShort = cert.issuer.split(" ")[0] || cert.issuer;

  return (
    <div className="flex shrink-0 w-[320px] sm:w-[350px] h-[220px] snap-center group relative">
      {/* Left Panel (Overlapping) */}
      <div 
        onClick={() => cert.image && onZoom(cert.image, index)}
        className="w-[140px] sm:w-[150px] bg-white rounded-l-xl rounded-r-md p-5 shadow-[4px_0_15px_rgba(0,0,0,0.06)] z-10 flex flex-col justify-start border border-border relative transition-transform duration-300 group-hover:-translate-y-1 cursor-zoom-in"
      >
        <div className="mb-6 flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
            <span className="text-[10px] text-white font-bold">{issuerShort.charAt(0)}</span>
          </div>
          <span className="font-bold text-sm truncate">{issuerShort}</span>
        </div>
        <h3 className="font-semibold text-sm leading-snug">{cert.name}</h3>
      </div>
      
      {/* Right Panel */}
      <div className="flex-1 bg-[#fcfcfc] rounded-r-xl p-5 relative border border-border border-l-0 -ml-2 pl-6 transition-transform duration-300 group-hover:translate-x-1 flex flex-col justify-between">
        <button className="absolute top-3 right-3 text-muted-foreground/50 hover:text-foreground transition-colors">
          <X className="w-3 h-3" />
        </button>
        
        <div className="space-y-3 mt-2">
          <div>
            <div className="text-[9px] text-muted-foreground mb-0.5">Issuer</div>
            <div className="text-[11px] font-medium text-foreground">{cert.issuer}</div>
          </div>
          <div>
            <div className="text-[9px] text-muted-foreground mb-0.5">Date</div>
            <div className="text-[11px] font-medium text-foreground">{cert.date || "N/A"}</div>
          </div>
          <div>
            <div className="text-[9px] text-muted-foreground mb-0.5">Credential ID</div>
            <div className="text-[11px] font-medium text-foreground">
              {cert.issuer.substring(0,2).toUpperCase()}-{Math.floor(1000 + Math.random() * 9000)}-{Math.floor(1000 + Math.random() * 9000)}
            </div>
          </div>
          <div>
            <div className="text-[9px] text-muted-foreground mb-1">Verify</div>
            {/* Using flex to align perfectly to the left edge without sticking out */}
            <div className="flex">
              <button 
                onClick={() => cert.image && onZoom(cert.image, index)}
                className="text-[10px] text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded transition-colors cursor-pointer inline-flex items-center"
              >
                View Credential
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<{src: string, index: number} | null>(null);

  if (!resumeData.certifications || resumeData.certifications.length === 0) {
    return null;
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370;
      scrollContainerRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 370;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const handleZoom = (image: string, index: number) => {
    setZoomedImage({ src: image, index });
  };

  return (
    <section id="certifications" className="py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block font-semibold">
              06 / CERTIFICATIONS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Proof of <br />
              Continuous Learning
            </h2>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#" 
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors pb-2"
          >
            View All Certifications <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Carousel Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          {/* Nav Arrows */}
          <button 
            onClick={() => scroll("left")} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors z-20 bg-background shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          
          {/* Scroll Track */}
          <div 
            ref={scrollContainerRef} 
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6 px-4 -mx-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {resumeData.certifications.map((cert, index) => (
              <CertificateCard key={index} cert={cert} index={index} onZoom={handleZoom} />
            ))}
          </div>

          <button 
            onClick={() => scroll("right")} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors z-20 bg-background shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {resumeData.certifications.map((_, index) => (
            <div 
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-primary" : "w-3 bg-border"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-12 cursor-pointer"
          >
            <div 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors cursor-pointer p-2 z-50 bg-black/40 rounded-full"
              onClick={() => setZoomedImage(null)}
            >
              <X className="w-6 h-6" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateX: 20, y: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -20, y: 40 }}
              className="relative w-full h-full max-w-[90vw] max-h-[90vh] sm:max-w-[80vw] sm:max-h-[80vh] rounded-lg overflow-hidden cursor-default drop-shadow-2xl perspective-[1000px]"
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
            >
              <Image 
                src={zoomedImage.src} 
                alt="Certificate Zoom" 
                fill 
                className="object-contain" 
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
