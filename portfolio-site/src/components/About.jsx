import { FaCheckCircle } from 'react-icons/fa';
import { about, experience, education, awards } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {about.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-400">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="mt-10 glass rounded-xl p-6 glow">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
              <div>
                <h4 className="text-lg font-medium text-white">{education.degree}</h4>
                <p className="text-gray-400">{education.university}</p>
                <p className="text-gray-500 text-sm">{education.period}</p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <span className="text-primary font-semibold">
                    CGPA: {education.gpa}
                  </span>
                  <span className="text-secondary font-semibold">
                    {education.rank}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Awards */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">Experience</h3>
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <h4 className="text-lg font-medium text-white">{exp.title}</h4>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-400 mb-3">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">Awards & Honors</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{award.title}</h4>
                      <p className="text-gray-400 text-sm">{award.issuer} • {award.year}</p>
                      <p className="text-gray-500 text-xs mt-1">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
