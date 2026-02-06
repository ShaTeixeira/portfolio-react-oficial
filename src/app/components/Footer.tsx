import React from "react";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export const Footer = ({ onPrivacyClick, onTermsClick }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter">
            SHAYANE<span className="text-muted-foreground">CRUZ</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://github.com/ShaTeixeira/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-muted-foreground transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/shayane-teixeira-cruz/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-muted-foreground transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/puzzle.studio88" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-muted-foreground transition-colors">Instagram</a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Shayane Cruz. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <button onClick={onPrivacyClick} className="hover:text-primary transition-colors cursor-pointer">Política de Privacidade</button>
            <button onClick={onTermsClick} className="hover:text-primary transition-colors cursor-pointer">Termos de Serviço</button>
          </div>
        </div>
      </div>
    </footer>
  );
};