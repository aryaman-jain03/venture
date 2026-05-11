"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 flex flex-col items-center min-h-screen relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[150px] -z-10" />

      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="max-w-3xl w-full relative z-10"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-zinc-400">
            We believe that too many brilliant founders waste years building products nobody wants. VenturIQ exists to change that.
          </p>
        </div>

        <div className="glass-card p-10 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-700" />
          
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-6">The Founder's Dilemma</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Building a startup is inherently risky. The default state of a new venture is failure. But while market risk is unavoidable, execution risk can be managed.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              We saw too many founders skip the critical validation phase. They'd write code, design logos, and build beautiful landing pages for solutions to problems that didn't actually exist in the market.
            </p>
            <h2 className="text-2xl font-semibold mb-6 mt-12">The VenturIQ Solution</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              We built VenturIQ as a rigorous, step-by-step framework to force founders to answer the tough questions early. It's the platform we wish we had when we started our first companies.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Our goal is to be the ultimate companion for early-stage founders. By providing structured modules for Idea Validation, Business Modeling, MVP Planning, and Pitching, we help you de-risk your venture before you write a single line of code.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
