import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
  {
    title: 'TatoFilmes',
    description: 'Plataforma de cinema com catálogo de filmes, sistema de avaliações e recomendações personalizadas.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'bg-gradient-to-br from-cosmic-purple to-cosmic-blue',
    github: 'https://github.com/joaodorast/tatofilmes',
    live: '#'
  },
  {
    title: 'Cama Pet Show',
    description: 'E-commerce especializado em produtos para pets, com sistema de carrinho e checkout.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'bg-gradient-to-br from-cosmic-blue to-cosmic-cyan',
    github: 'https://github.com/joaodorast/Cama-pet-show',
    live: '#'
  },
  {
    title: 'FaciFitness Clone',
    description: 'Clone da plataforma FaciFitness com funcionalidades de treino e acompanhamento.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'bg-gradient-to-br from-cosmic-cyan to-cosmic-purple',
    github: 'https://github.com/joaodorast/facifit-clone',
    live: '#'
  },
  {
    title: 'Innovate Tech',
    description: 'Plataforma de rede social com foco em tecnologia e inovação.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    github: 'https://github.com/joaodorast',
    live: '#'
  },
  {
    title: 'AI para o Bem Social',
    description: 'Projeto de inteligência artificial voltado para causas sociais e impacto positivo na sociedade.',
    tags: ['Python', 'TensorFlow', 'React'],
    image: 'bg-gradient-to-br from-red-500 to-orange-500',
    github: 'https://github.com/joaodorast/AI-para-o-Bem-Social',
    live: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent inline-block mb-2">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan rounded-full mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Confira alguns dos projetos que desenvolvi aplicando os conhecimentos adquiridos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-xl overflow-hidden border border-cosmic-purple/10 hover:border-cosmic-purple/30 shadow-lg shadow-cosmic-purple/5 group transition-all"
            >
              <div className={`h-48 ${project.image} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/30" />
                <FiFolder size={60} className="text-white/70" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cosmic-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href={project.github}
                    className="p-2 rounded-full bg-card border border-cosmic-purple/20 hover:bg-cosmic-purple/10 transition-colors"
                    aria-label="Ver no GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a 
                    href={project.live}
                    className="p-2 rounded-full bg-card border border-cosmic-cyan/20 hover:bg-cosmic-cyan/10 transition-colors"
                    aria-label="Ver demo ao vivo"
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cosmic-purple/30 text-foreground hover:border-cosmic-purple hover:bg-cosmic-purple/10"
          >
            <FiGithub className="mr-2" />
            Ver mais no GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
