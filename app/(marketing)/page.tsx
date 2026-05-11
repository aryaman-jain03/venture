"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle2, LayoutDashboard, Lightbulb, Shield, Sparkles, Target, Zap, Clock, Users, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Introducing VenturIQ</span>
            </span>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Validate Your Startup Idea <br className="hidden md:block" />
              <span className="text-gradient-primary">Before You Build.</span>
            </h1>
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            A premium SaaS platform for founders. Turn your raw ideas into validated business models, MVP plans, and irresistible pitches.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105">
                Start Validating <ArrowRight className="ml-2 w-4 h-4" />
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
          className="w-full max-w-6xl mt-20 relative perspective-[2000px]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
          <div className="glass-card rounded-2xl p-2 border border-white/10 overflow-hidden transform rotateX-[10deg] scale-[0.95] hover:rotateX-0 hover:scale-100 transition-all duration-700 ease-out shadow-[0_20px_60px_rgba(79,70,229,0.15)] hover:shadow-[0_30px_80px_rgba(79,70,229,0.3)]">
            <Image 
              src="/images/dashboard_mockup_1778078858128.png" 
              alt="VenturIQ Dashboard" 
              width={1600} 
              height={900} 
              className="w-full h-auto rounded-xl border border-white/5"
            />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-24 px-6 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Validation Framework</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">4 major modules designed to take you from a raw hypothesis to a market-ready execution plan.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "1. Idea Validation", desc: "Customer interviews, willingness to pay, and market size research." },
              { icon: Target, title: "2. Business Model", desc: "Positioning statements, differentiation, and go-to-market strategy." },
              { icon: Zap, title: "3. MVP Planning", desc: "Feature selection and a rigorous 7-day launch execution timeline." },
              { icon: BarChart3, title: "4. Pitching & Closing", desc: "Investor storytelling, objection handling, and sales messaging." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-zinc-300 group-hover:text-indigo-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-indigo-500/30 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Why VenturIQ */}
      <section className="w-full py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop building <br/><span className="text-zinc-500">products nobody wants.</span></h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                90% of startups fail because they build something the market doesn&apos;t need. VenturIQ forces you to confront your riskiest assumptions before writing a single line of code.
              </p>
              
              <ul className="space-y-6">
                {[
                  { icon: Clock, title: "Save hundreds of hours", desc: "Don't spend 6 months building the wrong features." },
                  { icon: Shield, title: "De-risk your venture", desc: "Rely on data and customer feedback, not just gut feeling." },
                  { icon: Users, title: "Know your audience", desc: "Build crystal clear buyer personas and positioning." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white group-hover:text-indigo-200 transition-colors">{item.title}</h4>
                      <p className="text-sm text-zinc-400 mt-1">{item.desc}</p>
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
              <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <Rocket className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 className="w-8 h-8 text-indigo-400" />
                  </div>
                  <blockquote className="text-xl leading-relaxed text-zinc-200 mb-6 relative">
                    &quot;VenturIQ completely changed how we approach new products. We threw out our initial roadmap and built what our beta testers actually asked for. Reached $10k MRR in 3 months.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-500 font-bold">SJ</div>
                    <div>
                      <div className="font-semibold text-white">Sarah Jenkins</div>
                      <div className="text-sm text-zinc-500">Founder, DataSync</div>
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
        className="w-full py-32 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-zinc-900/30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/20 rounded-t-full blur-[100px] -z-10" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center glass-card p-12 md:p-20 rounded-3xl border border-white/10 overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
          {/* Animated glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000 ease-in-out" />
          
          <LayoutDashboard className="w-12 h-12 mx-auto mb-6 text-zinc-300 group-hover:text-indigo-400 transition-colors duration-300 group-hover:scale-110" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to validate your next big idea?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Join thousands of founders who use VenturIQ to build products people actually want.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-10 h-14 text-lg font-medium w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105">
              Create Free Account
            </Button>
          </Link>
          <p className="mt-6 text-sm text-zinc-500">VenturIQ Membership required to unlock all modules.</p>
        </div>
      </motion.section>
    </div>
  );
}
