"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle2, LayoutDashboard, Lightbulb, Shield, Sparkles, Target, Zap, Clock, Users, Rocket, TrendingUp, DollarSign, BrainCircuit, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[120px] -z-10 opacity-50 animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto z-10"
        >
          
          <motion.div variants={fadeIn}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              From Idea To Launch <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">Without The Guesswork.</span>
            </h1>
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            A premium SaaS platform for founders. Turn your raw ideas into validated business models, MVP plans, and irresistible pitches.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 group">
                Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-medium border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105">
                View Framework
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl mt-20 relative perspective-[2000px] z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10 pointer-events-none" />
          <motion.div 
            whileHover={{ rotateX: 0, scale: 1, y: -10 }}
            className="glass-card rounded-2xl p-2 border border-white/10 overflow-hidden transform rotateX-[10deg] scale-[0.95] transition-all duration-700 ease-out shadow-[0_20px_60px_rgba(79,70,229,0.15)] hover:shadow-[0_30px_80px_rgba(79,70,229,0.3)]"
          >
            <Image 
              src="/images/dashboard_mockup_1778078858128.png" 
              alt="VenturIQ Dashboard" 
              width={1600} 
              height={900} 
              className="w-full h-auto rounded-xl border border-white/5"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="w-full py-12 px-6 border-y border-white/5 bg-zinc-950/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {[
            { value: "4.8x", label: "Faster MVP Launches" },
            { value: "85%", label: "Pitch Success Rate" },
            { value: "$2M+", label: "Capital Raised" },
            { value: "10k+", label: "Ideas Validated" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500">{stat.value}</div>
              <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-32 px-6 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Validation Framework</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">4 major modules designed to take you from a raw hypothesis to a market-ready execution plan.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: "1. Idea Validation", desc: "Customer interviews, willingness to pay, and market size research to prove demand.", color: "from-blue-500/20 to-cyan-500/20", borderColor: "group-hover:border-blue-500/30" },
              { icon: Target, title: "2. Business Model", desc: "Positioning statements, competitive differentiation, and go-to-market strategy mapping.", color: "from-purple-500/20 to-pink-500/20", borderColor: "group-hover:border-purple-500/30" },
              { icon: Zap, title: "3. MVP Planning", desc: "Ruthless feature selection and a rigorous 7-day launch execution timeline.", color: "from-amber-500/20 to-orange-500/20", borderColor: "group-hover:border-amber-500/30" },
              { icon: BarChart3, title: "4. Pitching & Closing", desc: "Investor storytelling, objection handling, and persuasive sales messaging.", color: "from-emerald-500/20 to-teal-500/20", borderColor: "group-hover:border-emerald-500/30" }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-white/5 ${feature.borderColor}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === i ? 1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 pointer-events-none transition-opacity duration-500 mix-blend-overlay`} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="w-full py-32 px-6 relative border-t border-white/5">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Serious Builders</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Whether you are building your first product or your fifth, VenturIQ provides the structure you need.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BrainCircuit, title: "First-Time Founders", desc: "Don't know where to start? Get a step-by-step roadmap to take your idea to launch before risking your savings." },
              { icon: TrendingUp, title: "Serial Entrepreneurs", desc: "Speed up your iteration cycle. Validate new product concepts and spinout ideas in days, not months." },
              { icon: DollarSign, title: "Indie Hackers", desc: "Find profitable niches faster. Focus on willingness to pay and unit economics from day one." }
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <audience.icon className="w-10 h-10 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">{audience.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{audience.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VenturIQ */}
      <section className="w-full py-32 px-6 relative border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Stop building <br/><span className="text-zinc-500">products nobody wants.</span></h2>
              <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                90% of startups fail because they build something the market doesn&apos;t need. VenturIQ forces you to confront your riskiest assumptions before writing a single line of code.
              </p>
              
              <ul className="space-y-8">
                {[
                  { icon: Clock, title: "Save hundreds of hours", desc: "Don't spend 6 months building the wrong features. Build only what matters." },
                  { icon: Shield, title: "De-risk your venture", desc: "Rely on hard data and actual customer feedback, not just gut feeling." },
                  { icon: Users, title: "Know your audience", desc: "Build crystal clear buyer personas and positioning that resonates instantly." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                    className="flex gap-5 group"
                  >
                    <div className="mt-1 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-indigo-500/20 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
                      <item.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors">{item.title}</h4>
                      <p className="text-base text-zinc-400 mt-2">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-[80px] -z-10" />
              <div className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500 shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <Quote className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 className="w-8 h-8 text-indigo-400" />
                  </div>
                  <blockquote className="text-2xl leading-relaxed text-zinc-200 mb-8 relative font-medium">
                    "VenturIQ completely changed how we approach new products. We threw out our initial roadmap and built what our beta testers actually asked for. We reached $10k MRR in just 3 months."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-500 font-bold text-xl">SJ</div>
                    <div>
                      <div className="font-semibold text-white text-lg">Sarah Jenkins</div>
                      <div className="text-zinc-400">Founder, DataSync</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full py-40 px-6 relative overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-indigo-600/20 rounded-t-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-24 rounded-[3rem] border border-white/10 overflow-hidden group hover:border-indigo-500/30 transition-all duration-700 hover:shadow-[0_0_100px_rgba(79,70,229,0.15)]">
          {/* Animated glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000 ease-in-out" />
          
          <LayoutDashboard className="w-16 h-16 mx-auto mb-8 text-zinc-300 group-hover:text-indigo-400 transition-colors duration-300 group-hover:scale-110" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to launch your next big idea?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join thousands of founders who use VenturIQ to build products people actually want. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-12 h-14 text-lg font-medium w-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105">
                Create Free Account
              </Button>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full px-12 h-14 text-lg font-medium w-full border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
