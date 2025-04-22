
import { motion } from 'framer-motion';
import { FiBookOpen, FiMonitor, FiVideo, FiCode } from 'react-icons/fi';

const education = [
  {
    id: 1,
    type: 'formal',
    title: 'Ensino Médio Técnico em Informática',
    institution: 'Colégio SEICE',
    period: '2023 - 2025',
    description: 'Formação técnica em desenvolvimento de sistemas, redes de computadores e banco de dados.',
    icon: FiBookOpen
  },
  {
    id: 2,
    type: 'course',
    title: 'Desenvolvimento Full Stack',
    institution: 'Rocketseat',
    period: '2024 - 2025',
    description: 'Curso completo abrangendo front-end com React, back-end com Node.js e mobile com React Native.',
    icon: FiMonitor
  },
  {
    id: 3,
    type: 'course',
    title: 'Formação React Developer',
    institution: 'Udemy',
    period: '2024 - 2025',
    description: 'Especialização em desenvolvimento de aplicações web e mobile com React e React Native.',
    icon: FiCode
  },
  {
    id: 4,
    type: 'course',
    title: 'JavaScript Completo ES6+',
    institution: 'Curso em Vídeo',
    period: '2024 - 2025',
    description: 'Curso completo de JavaScript moderno, com foco em ES6+ e aplicações práticas.',
    icon: FiVideo
  },
  {
    id: 5,
    type: 'course',
    title: 'Desenvolvimento Mobile com React Native',
    institution: 'Udemy',
    period: '2024 - 2025',
    description: 'Desenvolvimento de aplicativos móveis multiplataforma com React Native e Expo.',
    icon: FiMonitor
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent inline-block mb-2">
            Educação & Formação
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan rounded-full mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Minha trajetória acadêmica e cursos complementares na área de desenvolvimento
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-cosmic-purple/30 pl-8 ml-4">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 top-0 w-8 h-8 bg-card rounded-full border-2 border-cosmic-purple flex items-center justify-center">
                  <item.icon className="text-cosmic-purple" size={16} />
                </div>
                
                <div className="bg-card p-6 rounded-xl border border-cosmic-purple/10 shadow-lg shadow-cosmic-purple/5 hover:border-cosmic-purple/30 transition-all">
                  <div className="flex justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <span className="text-sm text-cosmic-purple font-medium">{item.period}</span>
                  </div>
                  
                  <h4 className="text-base font-medium text-muted-foreground mb-3">
                    {item.institution}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  
                  <span className="inline-block mt-3 text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple">
                    {item.type === 'formal' ? 'Ensino Formal' : 'Curso Complementar'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
