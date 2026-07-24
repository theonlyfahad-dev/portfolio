import { resumeData } from "@/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          
          <div>
            <Link href="/" className="text-2xl font-black tracking-widest uppercase mb-4 block">
              Fahad<span className="text-primary">.dev</span>
            </Link>
            <p className="text-muted-foreground/80 max-w-sm text-sm font-light leading-relaxed">
              Crafting premium digital experiences through scalable engineering and exceptional design.
            </p>
          </div>

          <div className="flex flex-col md:text-right">
            <div className="flex gap-6 mb-8">
              <a 
                href={resumeData.personal.github} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-1 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
              <a 
                href={resumeData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-1 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground/50 font-mono">
              &copy; {currentYear} {resumeData.personal.name}. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
