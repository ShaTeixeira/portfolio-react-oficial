import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy, TermsOfService } from "./components/Legal";
import { AnimatePresence } from "motion/react";

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Smooth scroll implementation for all internal links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Update URL without jump
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans antialiased">
      <Toaster position="bottom-right" richColors />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="about" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Criando o futuro da web, <span className="text-muted-foreground">um pixel de cada vez.</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Com foco em interfaces intuitivas e performance excepcional, busco transformar a complexidade em simplicidade. 
              Minha abordagem combina o rigor técnico do desenvolvimento Frontend com uma sensibilidade estética apurada.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em React e ecossistemas modernos, trabalho para entregar produtos que não apenas funcionam, 
              mas encantam quem os utiliza.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 rounded-2xl bg-accent/50 border border-border flex flex-col justify-center text-center">
              <span className="text-4xl font-bold mb-2">3+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Anos de Carreira</span>
            </div>
            <div className="p-8 rounded-2xl bg-accent/50 border border-border flex flex-col justify-center text-center">
              <span className="text-4xl font-bold mb-2">20+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Sistemas Entregues</span>
            </div>
            <div className="p-8 rounded-2xl bg-accent/50 border border-border flex flex-col justify-center text-center">
              <span className="text-4xl font-bold mb-2">4+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Freelances</span>
            </div>
            <div className="p-8 rounded-2xl bg-accent/50 border border-border flex flex-col justify-center text-center">
              <span className="text-4xl font-bold mb-2">Puzzle</span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Studio Found.</span>
            </div>
          </div>
        </div>

        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer 
        onPrivacyClick={() => setShowPrivacy(true)} 
        onTermsClick={() => setShowTerms(true)} 
      />

      <AnimatePresence>
        {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
        {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
