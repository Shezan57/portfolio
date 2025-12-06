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
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = skillIcons[category] || FaCode;
            const gradient = skillColors[category] || "from-primary to-secondary";
            
            return (
              <div
                key={category}
                className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    <Icon className="text-white text-lg" />
                  </div>
                  <h3 className="font-semibold text-white">{category}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies. Currently exploring 
            <span className="text-primary"> advanced LLM orchestration</span>, 
            <span className="text-secondary"> multimodal AI systems</span>, and 
            <span className="text-primary"> edge deployment optimization</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
