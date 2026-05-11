"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, Share2, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Validation Report</h1>
          <p className="text-zinc-400">Project: VenturIQ • Generated on Oct 24, 2024</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 bg-white/5">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button className="bg-white text-black hover:bg-zinc-200">
            <Download className="w-4 h-4 mr-2" /> Export PDF
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass-card p-6 border-white/10 col-span-2">
           <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
             <TrendingUp className="w-5 h-5 text-blue-400" /> Overall Validation Score
           </h3>
           <div className="flex items-center justify-between mb-8">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                82<span className="text-2xl text-zinc-500 font-medium">/100</span>
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 text-sm font-medium">
                HIGH VIABILITY
              </div>
           </div>
           
           <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Market Potential</span>
                  <span className="font-medium text-white">90/100</span>
                </div>
                <Progress value={90} className="h-2 bg-white/10" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Willingness to Pay</span>
                  <span className="font-medium text-white">75/100</span>
                </div>
                <Progress value={75} className="h-2 bg-white/10" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Execution Difficulty</span>
                  <span className="font-medium text-white">Moderate</span>
                </div>
                <Progress value={60} className="h-2 bg-white/10" />
              </div>
           </div>
        </Card>

        <Card className="glass-card p-6 border-white/10 flex flex-col justify-between">
           <div>
             <h3 className="text-lg font-semibold mb-4">Key Strengths</h3>
             <ul className="space-y-3">
               <li className="flex gap-2 text-sm text-zinc-300">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Strong organic demand in B2B sector.
               </li>
               <li className="flex gap-2 text-sm text-zinc-300">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> High margins potential.
               </li>
             </ul>
           </div>
           <div className="mt-8">
             <h3 className="text-lg font-semibold mb-4">Key Risks</h3>
             <ul className="space-y-3">
               <li className="flex gap-2 text-sm text-zinc-300">
                 <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> High development costs for MVP.
               </li>
               <li className="flex gap-2 text-sm text-zinc-300">
                 <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> Saturated indirect competitor market.
               </li>
             </ul>
           </div>
        </Card>
      </div>

    </div>
  );
}
