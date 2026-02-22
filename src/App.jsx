import React from 'react';
import BrandCard from './components/BrandCard';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "Quibly",
    type: "quibly",
    description: "Advanced project ecosystem and resource management for modern teams.",
    url: "https://quiblyy.vercel.app/",
    color: "#6366f1"
  },
  {
    name: "Lynkr",
    type: "lynkr",
    description: "Secure and swift redirection engine for enterprise-level link tracking.",
    url: "https://lynkr-iota.vercel.app/",
    color: "#a855f7"
  },
  {
    name: "Elevare",
    type: "elevare",
    description: "Premium SaaS dashboard designed for high-performance scale and growth.",
    url: "https://elevare-seven.vercel.app/",
    color: "#ec4899"
  },
  {
    name: "Codexa",
    type: "codex",
    description: "Intelligent code assistant and development workflow automation.",
    url: "https://codexa.live",
    color: "#10b981"
  }
];

function App() {
  return (
    <div className="min-h-screen pb-20">
      <header className="pt-24 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Project <span className="gradient-text">Redirect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            My professional project hub. Access the live demonstrations and backup links for my portfolio explorations.
          </p>
        </motion.div>
      </header>

      <motion.div 
        className="card-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {projects.map((project, index) => (
          <BrandCard key={index} {...project} />
        ))}
      </motion.div>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} • Curated Project Architecture</p>
      </footer>
    </div>
  );
}

export default App;
