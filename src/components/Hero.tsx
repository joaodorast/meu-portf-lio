
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-cosmic-purple font-medium"
                >
                  Olá, me chamo
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent"
                >
                  João Pedro Santos e Silva
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-medium text-foreground/80"
                >
                  Desenvolvedor Front-end
                </motion.h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-foreground/70 text-lg max-w-xl"
              >
                Sou um desenvolvedor front-end de 17 anos, atualmente cursando o 3º ano do Ensino Médio Técnico em Informática no Colégio SEICE. Sou apaixonado por criar experiências digitais interativas e visualmente impressionantes.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:opacity-90"
                >
                  Ver Projetos
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cosmic-purple/30 text-foreground hover:border-cosmic-purple hover:bg-cosmic-purple/10"
                >
                  Contato
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 pt-4"
              >
                <a href="https://github.com/joaodorast" className="text-muted-foreground hover:text-cosmic-purple transition-colors">
                  <FiGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-santos-e-silva-12b037331/" className="text-muted-foreground hover:text-cosmic-blue transition-colors">
                  <FiLinkedin size={22} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-cosmic-cyan transition-colors">
                  <FiMail size={22} />
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cosmic-purple/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 via-cosmic-blue/20 to-cosmic-cyan/20" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">JP</div>
            </div>
            
            <div className="absolute w-full h-full top-0 left-0 bg-cosmic-purple/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
