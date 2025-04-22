import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, 
  SiVite, SiNodedotjs, SiMongodb, SiMysql, SiGit,
  SiGithub, SiExpo, SiVercel, SiTailwindcss, SiFigma 
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'Expo', icon: SiExpo, color: '#000020' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent inline-block mb-2">
            Minhas Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan rounded-full mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            As tecnologias e ferramentas com as quais trabalho e continuo me aprimorando
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-lg p-6 border border-cosmic-purple/10 flex flex-col items-center justify-center gap-3 group hover:border-cosmic-purple/30 transition-all"
            >
              <skill.icon size={36} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
