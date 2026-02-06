import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-accent text-xs font-semibold tracking-wider uppercase mb-6"
          >
            Frontend Developer
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Transformando ideias em <span className="text-muted-foreground italic">interfaces</span> de excelência.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Especialista em elevar o padrão visual e técnico de interfaces digitais. Através da <span className="font-semibold text-primary">Puzzle Studio</span>, transformo visão estratégica em código de alta performance, unindo design de precisão com tecnologias modernas.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Ver Projetos <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border rounded-full font-medium hover:bg-accent transition-colors"
            >
              Consultoria
            </a>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="https://github.com/ShaTeixeira/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/shayane-teixeira-cruz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/puzzle.studio88" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1613275139344-0018ad151c09?auto=format&fit=crop&q=80&w=800"
              alt="Shayane Cruz"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-border rounded-2xl -z-0" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground opacity-50"
      >
        <div className="w-[1px] h-12 bg-border mx-auto" />
      </motion.div>
    </section>
  );
};
