import { FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';
import { publications } from '../data/portfolioData';

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Published <span className="gradient-text">Papers</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Peer-reviewed research contributing to AI applications and software development
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="glass rounded-xl p-8 hover:scale-[1.01] transition-transform duration-300 relative"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-primary/10" />

              {/* Journal Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                  {pub.year}
                </span>
                <span className="text-gray-500 text-xs">
                  {pub.journal}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 leading-relaxed">
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
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="text-primary">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* DOI Link */}
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-primary hover:bg-primary/10 transition-colors text-sm"
              >
                <FaExternalLinkAlt />
                View Publication
              </a>
            </div>
          ))}
        </div>

        {/* Additional Research Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 glass rounded-xl px-8 py-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Open to Research Collaborations</p>
              <p className="text-gray-400 text-sm">
                Interested in AI/ML research projects and publications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
