import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "GE21 Geotecnologia",
    category: "Landing Page",
    description: "Desenvolvimento de página institucional focada em clareza e conversão para o setor de geotecnologia.",
    image: "https://images.unsplash.com/photo-1758598303946-385680e4eabd?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "React Router", "Vite", "JavaScript"],
    link: "#",
    github: "https://github.com/ShaTeixeira/"
  },
  {
    title: "Vou de Van",
    category: "UI/UX & Frontend",
    description: "Sistema de monitoramento escolar permitindo que pais acompanhem o trajeto dos filhos em tempo real.",
    image: "https://images.unsplash.com/photo-1742774101931-5b540678bb3c?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "TypeScript", "Figma", "Vite"],
    link: "#",
    github: "https://github.com/ShaTeixeira/"
  },
  {
    title: "Alarme Connect",
    category: "Web Maintenance",
    description: "Site responsivo com foco total em acessibilidade e SEO. Manutenção contínua e evolução de funcionalidades.",
    image: "https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Tailwind CSS", "SEO", "Accessibility"],
    link: "#",
    github: "https://github.com/ShaTeixeira/"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Projetos Selecionados
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Uma coleção de trabalhos que exploram a interseção entre design refinado e tecnologia de ponta.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://github.com/ShaTeixeira/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors group"
            >
              Ver todos no GitHub <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-accent">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white rounded-full text-black hover:bg-white/90 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="p-3 bg-white rounded-full text-black hover:bg-white/90 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-accent rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
