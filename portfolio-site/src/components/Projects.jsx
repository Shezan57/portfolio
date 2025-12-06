import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, categories } from '../data/portfolioData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">My work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Production-ready AI systems and applications that solve real-world problems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">
                    {project.category === 'Computer Vision' && '👁️'}
                    {project.category === 'AI Agent' && '🤖'}
                    {project.category === 'MLOps' && '⚙️'}
                    {project.category === 'NLP' && '💬'}
                    {project.category === 'Machine Learning' && '📊'}
                    {project.category === 'Multimodal AI' && '🎬'}
                  </span>
                </div>
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-primary text-xs font-mono">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <li key={index} className="text-gray-500 text-xs flex items-start gap-2">
                      <span className="text-primary">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 glass rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              {showAll ? 'Show Less' : `Show All (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
