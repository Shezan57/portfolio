import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills } from '../data/portfolioData';
import { 
  FaBrain, 
  FaRobot, 
  FaCloud, 
  FaCode, 
  FaGlobe, 
  FaTools 
} from 'react-icons/fa';

const skillIcons = {
  "AI & Machine Learning": FaBrain,
  "LLM & NLP": FaRobot,
  "MLOps & Cloud": FaCloud,
  "Programming": FaCode,
  "Web Development": FaGlobe,
  "Tools & Platforms": FaTools,
};

const skillColors = {
  "AI & Machine Learning": "from-purple-500 to-pink-500",
  "LLM & NLP": "from-blue-500 to-cyan-500",
  "MLOps & Cloud": "from-orange-500 to-yellow-500",
  "Programming": "from-green-500 to-emerald-500",
  "Web Development": "from-primary to-secondary",
  "Tools & Platforms": "from-gray-500 to-slate-500",
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-primary font-mono text-sm mb-2">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => {
            const Icon = skillIcons[category] || FaCode;
            const gradient = skillColors[category] || "from-primary to-secondary";
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl p-6 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white text-lg" />
                  </motion.div>
                  <h3 className="font-semibold text-white">{category}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies. Currently exploring 
            <span className="text-primary"> advanced LLM orchestration</span>, 
            <span className="text-secondary"> multimodal AI systems</span>, and 
            <span className="text-primary"> edge deployment optimization</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
