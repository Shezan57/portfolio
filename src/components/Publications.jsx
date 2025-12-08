import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';
import { publications } from '../data/portfolioData';

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm mb-2">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Published <span className="gradient-text">Papers</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Peer-reviewed research contributing to AI applications and software development
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl p-8 relative overflow-hidden group"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Quote Icon */}
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                className="absolute top-6 right-6"
              >
                <FaQuoteLeft className="text-4xl text-primary/10" />
              </motion.div>

              <div className="relative z-10">
                {/* Journal Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <motion.span 
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {pub.year}
                  </motion.span>
                  <span className="text-gray-500 text-xs">
                    {pub.journal}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 leading-relaxed group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>

                {/* Volume */}
                <p className="text-gray-500 text-sm mb-4">
                  {pub.volume}
                </p>

                {/* Key Contributions */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-2">Key Contributions:</p>
                  <ul className="space-y-2">
                    {pub.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-gray-500 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <span className="text-primary">▹</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* DOI Link */}
                <motion.a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-primary hover:bg-primary/10 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  <FaExternalLinkAlt />
                  View Publication
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Research Note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 glass rounded-xl px-8 py-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">📚</span>
            </motion.div>
            <div className="text-left">
              <p className="text-white font-medium">Open to Research Collaborations</p>
              <p className="text-gray-400 text-sm">
                Interested in AI/ML research projects and publications
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
