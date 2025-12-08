import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const currentProjects = [
  {
    icon: FaRocket,
    title: "Advanced RAG System",
    description: "Building a production-grade RAG pipeline with hybrid search, reranking, and query decomposition for enterprise use cases.",
    status: "In Progress",
    progress: 65,
  },
  {
    icon: FaCode,
    title: "LLM Fine-tuning Framework",
    description: "Developing a modular framework for efficient fine-tuning of large language models using LoRA and QLoRA techniques.",
    status: "Research Phase",
    progress: 30,
  },
  {
    icon: FaLightbulb,
    title: "Multi-Agent AI System",
    description: "Exploring collaborative AI agents that can work together to solve complex, multi-step problems autonomously.",
    status: "Experimenting",
    progress: 45,
  },
];

const CurrentlyWorkingOn = () => {
  return (
    <section className="py-16 bg-darker/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm">Currently Building</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold"
          >
            What I'm <span className="gradient-text">Working On</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-primary text-xl" />
                  </div>

                  {/* Status Badge */}
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3">
                    {project.status}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    {project.progress}% Complete
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;
