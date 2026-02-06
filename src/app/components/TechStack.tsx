import React from "react";
import { motion } from "motion/react";
import { 
  Code2, 
  Layers, 
  Figma, 
  Layout, 
  Smartphone, 
  Zap, 
  Globe, 
  Cpu,
  BookOpen,
  Languages
} from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code2, description: "Aprofundando em arquiteturas escaláveis e Server Components." },
  { name: "TypeScript", icon: Cpu, description: "Foco em tipagem avançada e segurança de dados em larga escala." },
  { name: "Tailwind CSS", icon: Layout, description: "Aprimorando layouts fluidos e sistemas de design atômicos." },
  { name: "UI/UX Design", icon: Figma, description: "Evoluindo em prototipagem de alta fidelidade e acessibilidade." },
];

const learning = [
  { name: "Clean Code", icon: Layers, description: "Consolidando padrões S.O.L.I.D e refatoração para código sustentável." },
  { name: "SEO Avançado", icon: Globe, description: "Estudando estratégias de visibilidade e indexação técnica." },
  { name: "Inglês", icon: Languages, description: "Desenvolvendo proficiência para atuação em projetos internacionais." },
  { name: "Novas Stacks", icon: BookOpen, description: "Explorando as tendências do ecossistema Frontend e IA na web." },
];

export const TechStack = () => {
  return (
    <section id="skills" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Especialidades & Aprendizado
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Domínio técnico atual e os pilares de estudo que estão guiando minha evolução profissional.
          </motion.p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> Core Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-background border border-border group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> Em constante estudo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learning.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-background/50 border border-border/50 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
