
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useEffect } from "react";

const Index = () => {
  // Efeito para criar partículas no fundo (estrelas)
  useEffect(() => {
    const createStars = () => {
      const stars = document.createElement('div');
      stars.className = 'fixed inset-0 -z-10 pointer-events-none';
      document.body.appendChild(stars);

      const starCount = 100;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2;
        
        star.style.position = 'absolute';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = String(Math.random() * 0.5 + 0.2);
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 300}vh`;
        star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`;
        
        stars.appendChild(star);
      }
      
      // CSS para a animação de brilho
      const style = document.createElement('style');
      style.textContent = `
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `;
      document.head.appendChild(style);
    };
    
    createStars();
    
    // Cleanup function
    return () => {
      const stars = document.querySelector('.stars');
      if (stars) {
        stars.remove();
      }
    };
  }, []);

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      {/* Gradientes de fundo para efeito futurista */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cosmic-purple/20 rounded-full blur-[120px] -z-10" />
      <div className="fixed top-[30%] right-0 w-[400px] h-[400px] bg-cosmic-blue/20 rounded-full blur-[100px] -z-10" />
      <div className="fixed bottom-0 left-[20%] w-[600px] h-[600px] bg-cosmic-cyan/10 rounded-full blur-[150px] -z-10" />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
