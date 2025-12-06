import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects, categories } from '../data/portfolioData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 6);

  const categoryEmojis = {
    'Computer Vision': '👁️',
    'AI Agent': '🤖',
    'MLOps': '⚙️',
    'NLP': '💬',
    'Machine Learning': '📊',
    'Multimodal AI': '🎬',
  };

  return (
    <section id="projects" className="py-20 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-primary font-mono text-sm mb-2">My work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Production-ready AI systems and applications that solve real-world problems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass rounded-xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  {/* Animated background on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Category emoji */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    >
                      {categoryEmojis[project.category] || '🚀'}
                    </motion.span>
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <motion.span 
                      className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      ⭐ Featured
                    </motion.span>
                  )}
                  
                  {/* Hover overlay with quick links */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="text-primary text-xs font-mono">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-gray-500 text-xs flex items-start gap-2">
                        <span className="text-primary">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 hover:bg-primary/20 hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                        whileHover={{ x: 3 }}
                      >
                        <FaGithub />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                        whileHover={{ x: 3 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 glass rounded-lg text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show All (${filteredProjects.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
