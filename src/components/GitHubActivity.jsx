import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const GitHubActivity = () => {
  // Extract username from GitHub URL
  const githubUsername = personalInfo.github.split('/').pop() || 'Shezan57';
  
  const [statsError, setStatsError] = useState(false);
  const [langsError, setLangsError] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My open source contributions and coding activity
          </p>
        </motion.div>

        {/* GitHub Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGithub className="text-2xl text-primary" />
              <h3 className="text-xl font-semibold text-white">Contribution Graph</h3>
            </div>
            {/* GitHub Contribution Calendar */}
            <div className="overflow-hidden rounded-lg bg-white/5 p-2">
              <img
                src={`https://ghchart.rshah.org/0ea5e9/${githubUsername}`}
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              Contribution activity over the past year
            </p>
          </motion.div>

          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-2xl text-secondary" />
              <h3 className="text-xl font-semibold text-white">GitHub Stats</h3>
            </div>
            {/* GitHub Stats - using alternative API endpoint */}
            <div className="space-y-4">
              {!statsError ? (
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_border=true&title_color=0ea5e9&text_color=9ca3af&icon_color=6366f1&bg_color=0f172a`}
                  alt="GitHub Stats"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  onError={() => setStatsError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                  <FaGithub size={48} className="mb-4 opacity-50" />
                  <p>Stats temporarily unavailable</p>
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2"
                  >
                    View on GitHub →
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCodeBranch className="text-2xl text-primary" />
              <h3 className="text-xl font-semibold text-white">Top Languages</h3>
            </div>
            {!langsError ? (
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&hide_border=true&title_color=0ea5e9&text_color=9ca3af&bg_color=0f172a`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                onError={() => setLangsError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                <FaCodeBranch size={48} className="mb-4 opacity-50" />
                <p>Languages temporarily unavailable</p>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-2"
                >
                  View on GitHub →
                </a>
              </div>
            )}
          </motion.div>

          {/* GitHub Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaStar className="text-2xl text-yellow-500" />
              <h3 className="text-xl font-semibold text-white">Contribution Streak</h3>
            </div>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&hide_border=true&stroke=0ea5e9&ring=6366f1&fire=0ea5e9&currStreakNum=ffffff&sideNums=9ca3af&currStreakLabel=0ea5e9&sideLabels=9ca3af&dates=6b7280&background=0f172a`}
              alt="GitHub Streak"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* View GitHub Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-600 transition-all hover:shadow-lg"
          >
            <FaGithub size={24} />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
