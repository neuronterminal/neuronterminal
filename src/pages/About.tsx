import React from 'react';
import { motion } from 'framer-motion';
import { TechnologyStack } from '../components/about/TechnologyStack';
import { InnovationShowcase } from '../components/about/InnovationShowcase';

const missionPoints = [
  {
    title: "Neural Evolution",
    description: "Self-evolving AI agents that autonomously reproduce and expand the neural network ecosystem.",
    icon: "🧬"
  },
  {
    title: "Decentralized Intelligence",
    description: "Building a truly decentralized AI infrastructure powered by blockchain technology and community governance.",
    icon: "⛓️"
  },
  {
    title: "Token Economics",
    description: "Advanced tokenomics with automatic burn mechanism and neural network incentives.",
    icon: "🔥"
  }
];

const features = [
  {
    title: "Neural Reproduction",
    description: "AI agents that autonomously reproduce and evolve",
    stats: [
      "Self-replicating neural pathways",
      "Autonomous knowledge transfer",
      "Evolutionary optimization"
    ]
  },
  {
    title: "Blockchain Integration",
    description: "Decentralized infrastructure with automatic token mechanics",
    stats: [
      "Auto-burn mechanism: 2% per transaction",
      "Cross-chain neural bridges",
      "Decentralized compute network"
    ]
  },
  {
    title: "Decentralized Governance",
    description: "Community-driven development and decision making",
    stats: [
      "Neural DAO governance",
      "Decentralized protocol upgrades",
      "Community proposals"
    ]
  }
];

export function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          The Future of Self-Evolving AI
        </h1>
        <p className="text-xl md:text-2xl text-[#00ff41]/80 max-w-3xl mx-auto">
          Pioneering autonomous AI reproduction and evolution through advanced neural networks and decentralized infrastructure.
        </p>
      </motion.section>

      {/* Mission Points */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {missionPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="p-6 border border-[#00ff41] rounded-lg bg-[#0d0208]/90 hover:bg-[#00ff41]/5 transition-colors"
          >
            <span className="text-4xl mb-4 block">{point.icon}</span>
            <h3 className="text-xl font-bold mb-2">{point.title}</h3>
            <p className="text-[#00ff41]/80">{point.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="p-6 border border-[#00ff41] rounded-lg bg-[#0d0208]/90"
          >
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-[#00ff41]/80 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.stats.map((stat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#00ff41]">▹</span>
                  {stat}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Technology Stack and Innovation Showcase */}
      <TechnologyStack />
      <InnovationShowcase />
    </div>
  );
}