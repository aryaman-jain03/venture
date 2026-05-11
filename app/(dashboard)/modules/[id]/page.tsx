"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, ChevronRight, Save, Sparkles, AlertTriangle } from "lucide-react";
import { useParams } from "next/navigation";

export default function ModulePage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("interview");

  // Mocking data for Module 1
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative">
      
      {/* Security Watermark Placeholder */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 flex items-center justify-center overflow-hidden">
        <div className="rotate-[-45deg] text-8xl font-black whitespace-nowrap">
          VENTURIQ SECURE SESSION • STEVE JOBS • 
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-8">
        
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
              <span>Modules</span> <ChevronRight className="w-4 h-4" /> <span className="text-white">Module {params.id as string}</span>
            </div>
            <h1 className="text-3xl font-bold">Idea Validation</h1>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="border-white/10 bg-white/5 text-zinc-300">
                <Save className="w-4 h-4 mr-2" /> Save Draft
             </Button>
             <Button className="bg-white text-black hover:bg-zinc-200">
                Next Section
             </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-zinc-900/50 border border-white/5 p-1">
            <TabsTrigger value="interview" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">Customer Interviews</TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">Market Sizing</TabsTrigger>
            <TabsTrigger value="competitor" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">Competitor Matrix</TabsTrigger>
          </TabsList>
          
          <TabsContent value="interview" className="mt-6 space-y-6">
            <Card className="glass-card p-8 border-white/10">
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h2 className="text-xl font-bold mb-2">Identify Your Core Customer</h2>
                   <p className="text-zinc-400 text-sm">Who is experiencing the problem the most acutely?</p>
                 </div>
                 <div className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full border border-yellow-500/20 flex items-center gap-1">
                   <AlertTriangle className="w-3 h-3" /> Needs Attention
                 </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Describe the exact persona</Label>
                  <Input placeholder="e.g. B2B SaaS founders with $1M-$5M ARR" className="bg-zinc-950/50 border-white/10" />
                </div>
                
                <div className="space-y-3">
                  <Label>What is their primary pain point?</Label>
                  <textarea 
                    className="w-full h-32 rounded-md bg-zinc-950/50 border border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                    placeholder="Describe the problem in detail..."
                  />
                </div>

                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex gap-4">
                  <Sparkles className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-blue-100 mb-1">AI Assistant Suggestion</h4>
                    <p className="text-xs text-blue-300/70 leading-relaxed">
                      Consider narrowing down your persona. "B2B SaaS founders" is broad. Are you targeting technical founders or sales-led organizations? Your pain point will differ drastically between the two.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 border-white/10 opacity-50 grayscale pointer-events-none relative overflow-hidden">
               <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm">
                 <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
                   <AlertCircle className="w-4 h-4" /> Complete previous section to unlock
                 </div>
               </div>
               <h2 className="text-xl font-bold mb-2">Willingness to Pay</h2>
               <div className="space-y-4 mt-4">
                 <Input disabled className="bg-zinc-950/50 border-white/10" />
                 <Input disabled className="bg-zinc-950/50 border-white/10" />
               </div>
            </Card>
          </TabsContent>

          <TabsContent value="market">
            {/* Mocked Market Tab */}
            <Card className="glass-card p-8 border-white/10 text-center text-zinc-500 py-20">
              Market sizing tools will appear here.
            </Card>
          </TabsContent>

          <TabsContent value="competitor">
             {/* Mocked Competitor Tab */}
            <Card className="glass-card p-8 border-white/10 text-center text-zinc-500 py-20">
              Competitor matrix tools will appear here.
            </Card>
          </TabsContent>

        </Tabs>
      </div>

      {/* Right Sidebar - Progress Tracker */}
      <div className="w-full lg:w-80 shrink-0 space-y-6">
        <Card className="glass-card p-6 border-white/10 sticky top-24">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-500">Validation Progress</h3>
          <Progress value={25} className="h-2 bg-white/10 mb-2" />
          <p className="text-xs text-zinc-400 mb-8">25% completed</p>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
               <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.3)] z-10">
                 <div className="w-2 h-2 rounded-full bg-blue-500" />
               </div>
               <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-white/10 bg-white/5 ml-4 md:ml-0">
                  <h4 className="text-sm font-semibold text-white">1. Core Customer</h4>
                  <p className="text-xs text-zinc-400 mt-1">In progress</p>
               </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
               <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 bg-zinc-900 text-zinc-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <div className="w-2 h-2 rounded-full bg-zinc-700" />
               </div>
               <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-transparent ml-4 md:ml-0">
                  <h4 className="text-sm font-semibold text-zinc-500">2. Problem Scope</h4>
               </div>
            </div>

             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
               <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 bg-zinc-900 text-zinc-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <div className="w-2 h-2 rounded-full bg-zinc-700" />
               </div>
               <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-transparent ml-4 md:ml-0">
                  <h4 className="text-sm font-semibold text-zinc-500">3. Willingness to Pay</h4>
               </div>
            </div>

          </div>
        </Card>
      </div>

    </div>
  );
}
