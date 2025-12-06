import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { personalInfo, stats } from '../data/portfolioData';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-secondary/20" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-float">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-3 glass rounded-lg font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 glow">
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <HiArrowDown
              size={24}
              className="text-gray-400 animate-bounce"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
