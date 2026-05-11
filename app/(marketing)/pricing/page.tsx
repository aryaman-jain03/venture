"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Crown, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20 px-6 flex flex-col items-center min-h-screen relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
      
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Unlock the full power of VenturIQ. Validate, build, and pitch your startup idea with our premium tools.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-lg"
      >
        {/* Pro Tier */}
        <div className="glass-card p-10 rounded-3xl border border-indigo-500/30 relative overflow-hidden group hover:border-indigo-400/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all duration-500">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-lg">VENTURIQ MEMBERSHIP</div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 blur-[60px] rounded-full group-hover:bg-indigo-500/30 transition-colors duration-500" />
          
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl font-bold">Pro Founder</h2>
          </div>
          <p className="text-zinc-400 text-base mb-8">Everything you need to validate, plan, and pitch your idea effectively.</p>
          
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-black tracking-tight">₹299</span>
            <span className="text-xl text-zinc-500 font-medium">/mo</span>
          </div>
          
          <Link href="/signup">
            <Button className="w-full bg-white text-black hover:bg-zinc-200 h-14 rounded-full text-lg font-semibold mb-10 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:scale-[1.02]">
              Become a Member <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">What's included</h3>
            <ul className="space-y-4">
              {[
                "All 4 Validation Modules Unlocked", 
                "Advanced AI Market Analytics", 
                "Unlimited Project Workspaces", 
                "Export Ready-to-use Pitch Decks", 
                "Priority Founder Support",
                "Continuous Updates & New Features"
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" /> 
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
