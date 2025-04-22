
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-cosmic-purple/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
              João Pedro
            </h2>
            <p className="text-muted-foreground mt-2">
              Desenvolvedor Front-end
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4 mb-6 md:mb-0"
          >
            <a href="https://github.com/joaodorast" className="w-10 h-10 bg-cosmic-purple/10 rounded-full flex items-center justify-center hover:bg-cosmic-purple/20 transition-colors">
              <FiGithub size={20} className="text-cosmic-purple" />
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-santos-e-silva-12b037331/" className="w-10 h-10 bg-cosmic-purple/10 rounded-full flex items-center justify-center hover:bg-cosmic-purple/20 transition-colors">
              <FiLinkedin size={20} className="text-cosmic-purple" />
            </a>
            <a href="#" className="w-10 h-10 bg-cosmic-purple/10 rounded-full flex items-center justify-center hover:bg-cosmic-purple/20 transition-colors">
              <FiTwitter size={20} className="text-cosmic-purple" />
            </a>
            <a href="#" className="w-10 h-10 bg-cosmic-purple/10 rounded-full flex items-center justify-center hover:bg-cosmic-purple/20 transition-colors">
              <FiInstagram size={20} className="text-cosmic-purple" />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-cosmic-purple/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} João Pedro Santos e Silva. Todos os direitos reservados.
          </p>
          
          <a 
            href="#home" 
            className="text-sm text-cosmic-purple hover:text-cosmic-blue transition-colors flex items-center gap-1"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span>Voltar ao topo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
