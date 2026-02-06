import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface LegalPageProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const LegalModal = ({ title, onClose, children }: LegalPageProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-background overflow-y-auto"
  >
    <div className="max-w-3xl mx-auto px-6 py-20">
      <button 
        onClick={onClose}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao Portfólio
      </button>
      <h1 className="text-4xl font-bold mb-12">{title}</h1>
      <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
        {children}
      </div>
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm">© 2026 Shayane Cruz - Puzzle Studio. Todos os direitos reservados.</p>
      </div>
    </div>
  </motion.div>
);

export const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => (
  <LegalModal title="Política de Privacidade" onClose={onClose}>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
      <p>Sua privacidade é importante para nós. Esta política explica como lidamos com as informações que você fornece através deste portfólio.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">2. Coleta de Dados</h2>
      <p>Coletamos apenas as informações que você opta por fornecer via formulário de contato (nome e e-mail) para fins de resposta à sua consulta.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de Informações</h2>
      <p>As informações enviadas são usadas exclusivamente para comunicação profissional direta entre Shayane Cruz (Puzzle Studio) e você.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">4. Segurança</h2>
      <p>Empregamos medidas de segurança padrão da indústria para proteger seus dados contra acesso não autorizado.</p>
    </section>
  </LegalModal>
);

export const TermsOfService = ({ onClose }: { onClose: () => void }) => (
  <LegalModal title="Termos de Serviço" onClose={onClose}>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
      <p>Ao acessar este site, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">2. Propriedade Intelectual</h2>
      <p>Todo o conteúdo deste portfólio, incluindo código, design e textos, é de propriedade de Shayane Cruz e Puzzle Studio, salvo indicação em contrário.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso do Conteúdo</h2>
      <p>O conteúdo aqui exposto serve apenas para fins de demonstração profissional. A reprodução não autorizada é proibida.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitação de Responsabilidade</h2>
      <p>As informações contidas neste site são fornecidas "como estão" e para fins informativos.</p>
    </section>
  </LegalModal>
);