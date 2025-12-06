import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiDocker, 
  SiReact, 
  SiAmazon,
  SiOpenai,
  SiGit,
  SiFastapi,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiOpencv,
  SiFlask,
  SiLinux,
  SiPostgresql
} from 'react-icons/si';

const techs = [
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
  { icon: SiOpenai, name: 'OpenAI', color: '#412991' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiOpencv, name: 'OpenCV', color: '#5C3EE8' },
  { icon: SiFlask, name: 'Flask', color: '#000000' },
  { icon: SiLinux, name: 'Linux', color: '#FCC624' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
];

const TechMarquee = () => {
  // Double the array for seamless loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="py-12 overflow-hidden bg-darker/30">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-gray-500 text-sm font-mono">
          Technologies I Work With
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />
        
        {/* Scrolling content */}
        <motion.div
          className="flex gap-12 py-4"
          animate={{ x: [0, -50 * techs.length] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-3 flex-shrink-0 px-6 py-3 glass rounded-xl cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Icon 
                  size={24} 
                  style={{ color: tech.color }}
                />
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
