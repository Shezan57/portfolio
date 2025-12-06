import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text mb-2">
              {personalInfo.name}
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Built With */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-end">
              Built with <FaHeart className="text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
