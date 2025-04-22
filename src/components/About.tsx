
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone, FiDatabase } from 'react-icons/fi';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent inline-block mb-2">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sou um jovem desenvolvedor front-end apaixonado por criar experiências digitais visualmente atraentes e funcionais. Atualmente tenho 17 anos e estou cursando o último ano do Ensino Médio Técnico em Informática no Colégio SEICE.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Minha jornada na programação começou com HTML, CSS e JavaScript, e desde então tenho me dedicado a aprender e dominar tecnologias modernas como React, TypeScript e React Native. Busco constantemente aprimorar minhas habilidades através de cursos e projetos práticos.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Tenho grande interesse em UI/UX Design e em criar interfaces que não apenas pareçam boas, mas que também proporcionem uma experiência de usuário excepcional. Também possuo conhecimentos básicos de back-end e banco de dados, o que me permite entender melhor o fluxo completo de desenvolvimento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: FiCode,
                title: 'Front-end',
                description: 'Desenvolvimento de interfaces modernas e responsivas utilizando as melhores práticas.'
              },
              {
                icon: FiLayers,
                title: 'UI/UX Design',
                description: 'Criação de layouts intuitivos e visualmente atraentes com foco na experiência do usuário.'
              },
              {
                icon: FiSmartphone,
                title: 'Mobile',
                description: 'Desenvolvimento de aplicativos móveis cross-platform com React Native e Expo.'
              },
              {
                icon: FiDatabase,
                title: 'Back-end',
                description: 'Conhecimentos básicos em APIs, banco de dados e estruturação de serviços.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-cosmic-purple/10 shadow-lg shadow-cosmic-purple/5 group hover:border-cosmic-purple/30 transition-all"
              >
                <div className="bg-cosmic-dark/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-cosmic-purple/20 transition-all">
                  <item.icon size={24} className="text-cosmic-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
