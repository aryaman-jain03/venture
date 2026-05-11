"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight, Lightbulb, Target, Zap, BarChart3, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/hooks/use-user";

const modules = [
  {
    id: 1,
    title: "Idea Validation",
    description: "Customer interviews, market size, and competition.",
    status: "in-progress",
    progress: 45,
    icon: Lightbulb,
    locked: false,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: 2,
    title: "Business Model",
    description: "Positioning, pricing, and go-to-market strategy.",
    status: "locked",
    progress: 0,
    icon: Target,
    locked: true,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    id: 3,
    title: "MVP Planning",
    description: "Feature selection and 7-day launch timeline.",
    status: "locked",
    progress: 0,
    icon: Zap,
    locked: true,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
  {
    id: 4,
    title: "Pitching & Closing",
    description: "Investor storytelling and sales messaging.",
    status: "locked",
    progress: 0,
    icon: BarChart3,
    locked: true,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  }
];

export default function DashboardHome() {
  const { user } = useUser();

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      
      {/* Welcome & Progress */}
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Welcome back{user ? `, ${user.name.split(' ')[0]}` : ''}.
          </h1>
          <p className="text-zinc-400">Continue building your startup idea. You&apos;re currently on Module 1.</p>
        </div>
        <Card className="glass-card p-6 w-full md:w-80 border-white/10 shrink-0">
          <div className="flex justify-between items-end mb-4">
            <div className="text-sm text-zinc-400">Overall Progress</div>
            <div className="text-2xl font-bold">12%</div>
          </div>
          <Progress value={12} className="h-2 bg-white/10" />
        </Card>
      </div>

      {/* Modules Grid */}
      <div>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-zinc-400" /> Validation Journey
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod) => (
            <Card key={mod.id} className={`glass-card relative overflow-hidden transition-all duration-300 ${mod.locked ? 'opacity-70 grayscale-[0.5] hover:grayscale-0' : 'hover:border-white/20'}`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${mod.color} blur-[50px] -z-10`} />
              
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${mod.iconColor}`}>
                    <mod.icon className="w-6 h-6" />
                  </div>
                  {mod.locked && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 bg-black/50 px-2 py-1 rounded-md border border-white/5">
                      <Lock className="w-3 h-3" /> LOCKED
                    </div>
                  )}
                  {!mod.locked && mod.status === "in-progress" && (
                     <div className="flex items-center gap-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">
                     IN PROGRESS
                   </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">Module {mod.id}: {mod.title}</h3>
                <p className="text-zinc-400 text-sm mb-8 flex-1">{mod.description}</p>

                {mod.locked ? (
                  <Button disabled variant="outline" className="w-full bg-black/40 border-white/5 text-zinc-500">
                    Complete previous modules
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>{mod.progress}% Completed</span>
                    </div>
                    <Progress value={mod.progress} className="h-1.5 bg-white/10" />
                    <Link href={`/modules/${mod.id}`} className="block mt-4">
                      <Button className="w-full bg-white text-black hover:bg-zinc-200">
                        Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="pt-6 border-t border-white/5">
        <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="flex-1 text-sm text-zinc-300">Updated competitor analysis for <strong>VenturIQ</strong></div>
              <div className="text-xs text-zinc-500">2 hours ago</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
