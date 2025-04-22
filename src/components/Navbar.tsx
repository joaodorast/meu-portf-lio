
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FiMenu, FiX } from 'react-icons/fi';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Educação', href: '#education' },
  { name: 'Contato', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  
  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle menu item click and smooth scroll
  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-cosmic-dark/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
          João Pedro
        </a>
        
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Button>
            
            {isOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 bg-background border-b border-cosmic-dark/10 shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="py-4 px-4 flex flex-col space-y-2">
                  {navItems.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavItemClick(e, item.href)}
                      className={`py-2 px-4 rounded-md transition-colors ${
                        activeSection === item.href.replace('#', '')
                          ? 'bg-cosmic-purple/20 text-cosmic-purple'
                          : 'hover:bg-cosmic-dark/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavItemClick(e, item.href)}
                className={`py-2 px-4 rounded-md transition-all ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-cosmic-purple font-medium'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                <div className="relative">
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cosmic-purple"
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </div>
              </a>
            ))}
            <Button
              size="sm"
              className="ml-4 bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:opacity-90"
            >
              Currículo
            </Button>
          </nav>
        )}
      </div>
    </motion.header>
  );
}
