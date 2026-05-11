"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function FeaturesPage() {
  const features = [
    { 
      icon: Lightbulb, 
      title: "Module 1: Idea Validation", 
      desc: "Stop building things nobody wants. Test your hypothesis with structured questionnaires and willingness-to-pay assessments.",
      points: ["Customer Interview Frameworks", "Market Sizing Calculators", "Problem-Solution Fit Scoring"]
    },
    { 
      icon: Target, 
      title: "Module 2: Business Model", 
      desc: "Map out exactly how you will capture value. Define your customer segments, cost structures, and revenue streams.",
      points: ["Lean Canvas Generator", "Competitor Matrix Builder", "Go-To-Market Strategy Planner"]
    },
    { 
      icon: Zap, 
      title: "Module 3: MVP Planning", 
      desc: "Cut the bloat. Figure out exactly what needs to be built for your version 1.0 and nothing more.",
      points: ["Feature Prioritization Matrices", "7-Day Execution Timelines", "Tech Stack Recommendations"]
    },
    { 
      icon: BarChart3, 
      title: "Module 4: Pitching & Closing", 
      desc: "Tell a compelling story. Prepare investor decks, handle objections, and master your sales messaging.",
      points: ["Pitch Deck Storyboards", "Objection Handling Scripts", "Investor Q&A Simulator"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 flex flex-col items-center min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-60" />

      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">The Validation Framework</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Four rigorous modules designed to take you from a raw, untested hypothesis to a market-ready, investable execution plan.
        </p>
      </motion.div>

      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8 max-w-6xl w-full relative z-10"
      >
        {features.map((feature, i) => (
          <motion.div 
            variants={fadeIn} 
            key={i} 
            className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors duration-500">
              <feature.icon className="w-8 h-8 text-zinc-300 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">{feature.desc}</p>
            
            <ul className="space-y-3">
              {feature.points.map((point, j) => (
                <li key={j} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
