import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    role: "Fundadora e Desenvolvedora de Software",
    company: "Puzzle Studio",
    type: "Autônomo",
    period: "Janeiro de 2024 - Presente",
    location: "Remoto, Serra - ES",
    description: "Liderando soluções personalizadas para clientes, unindo estratégia de negócio ao desenvolvimento Frontend de alto nível através da Puzzle Studio."
  },
  {
    role: "Desenvolvimento de Software e UI/UX Design",
    company: "GE21 Consultoria Mineral",
    type: "Estágio",
    period: "Outubro de 2024 - Dezembro de 2025",
    location: "Remoto",
    description: "Atuação no desenvolvimento de software e design de interfaces para o setor de mineração, focado em otimização de fluxos de trabalho."
  },
  {
    role: "Desenvolvimento de Software e UI/UX Design",
    company: "GE21 Geotecnologias",
    type: "Estágio",
    period: "Outubro de 2022 - Outubro de 2024",
    location: "Remoto, empresa de BH",
    description: "Contribuição ativa em projetos de geotecnologia, unindo design de interface e implementação técnica."
  },
  {
    role: "Desenvolvimento Freelancer",
    company: "Projetos Independentes",
    type: "Freelance",
    period: "Junho de 2022 - Dezembro de 2024",
    location: "Remoto",
    description: "Desenvolvimento de projetos sob demanda, garantindo qualidade técnica e satisfação direta do cliente final (4 clientes atendidos)."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Trajetória Profissional
          </motion.h2>
          <p className="text-muted-foreground">Construindo experiências digitais sólidas e escaláveis.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:left-[17px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-border">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot on the line */}
              <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />

              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-10 md:pl-0">
                <div className={`p-6 rounded-2xl bg-accent/30 border border-border hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-background text-[10px] font-bold uppercase tracking-widest mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <span className="text-primary font-semibold">{exp.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{exp.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className={`flex items-center gap-2 text-xs text-muted-foreground ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[10%]" />
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};