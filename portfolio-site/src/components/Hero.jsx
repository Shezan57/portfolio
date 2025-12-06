import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRobot } from 'react-icons/fa';
import { HiArrowDown, HiSparkles } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../data/portfolioData';
import profileImage from '../assets/profile.png';
// Import your CV PDF - add your CV file to src/assets/
import resumePDF from '../assets/Shezan_Ahmed_CV.pdf';

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Animated rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-secondary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
            
            {/* Image container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-primary">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover scale-105"
                  style={{ objectPosition: 'center calc(20%)' }}
                />
              </div>
            </div>
            
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 glass rounded-full border border-green-500/30"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300 whitespace-nowrap">Open to Work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-mono text-sm md:text-base mb-4"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing Animation Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 h-10"
            >
              <TypeAnimation
                sequence={[
                  'AI/ML Engineer',
                  2500,
                  'Computer Vision Specialist',
                  2500,
                  'Published Researcher',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-300"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all cursor-pointer relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a
                href={resumePDF}
                download="Shezan_Ahmed_CV.pdf"
                className="group px-8 py-3 glass rounded-lg font-medium text-gray-300 hover:text-white hover:border-primary/50 transition-all cursor-pointer flex items-center gap-2"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3 glass rounded-lg font-medium text-gray-300 hover:text-white hover:border-primary/50 transition-all cursor-pointer"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* AI Assistant Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center lg:justify-start justify-center mb-8"
            >
              <button
                onClick={() => {
                  // Find and click the floating chat button
                  const chatButton = document.querySelector('[aria-label="Open chat"]');
                  if (chatButton) chatButton.click();
                }}
                className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full font-medium text-gray-300 hover:text-white hover:border-purple-400/50 transition-all cursor-pointer flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="relative">
                  <FaRobot className="text-purple-400 group-hover:text-purple-300" />
                  <HiSparkles className="absolute -top-1 -right-1 text-yellow-400 text-xs animate-pulse" />
                </div>
                <span>Ask My AI Assistant</span>
                <span className="text-xs px-2 py-0.5 bg-purple-500/30 rounded-full text-purple-300">New</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center lg:justify-start justify-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaEnvelope size={28} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-4 glow cursor-default"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
