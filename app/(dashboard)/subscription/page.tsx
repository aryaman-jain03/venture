"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CreditCard } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Subscription & Billing</h1>
        <p className="text-zinc-400">Manage your plan and payment methods.</p>
      </div>

      <Card className="glass-card p-8 border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full mb-4">CURRENT PLAN</div>
            <h2 className="text-3xl font-bold mb-2">Pro Founder</h2>
            <p className="text-zinc-400">You are currently on the yearly billing cycle.</p>
          </div>
          <div className="text-right">
             <div className="text-4xl font-black mb-1">$49<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
             <p className="text-sm text-zinc-500 mb-4">Renews on Oct 24, 2025</p>
             <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">Manage Billing</Button>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="glass-card p-6 border-white/10">
           <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
             <CreditCard className="w-5 h-5 text-zinc-400" /> Payment Method
           </h3>
           <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
             <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center text-xs font-bold border border-white/10">VISA</div>
             <div className="flex-1">
               <div className="text-sm font-medium">•••• •••• •••• 4242</div>
               <div className="text-xs text-zinc-500">Expires 12/26</div>
             </div>
             <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">Edit</Button>
           </div>
         </Card>

         <Card className="glass-card p-6 border-white/10">
           <h3 className="text-lg font-semibold mb-4">Plan Benefits</h3>
           <ul className="space-y-3">
            {["All 4 Modules Unlocked", "Advanced AI Analytics", "Unlimited Projects", "Export Pitch Decks"].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> {f}
              </li>
            ))}
          </ul>
         </Card>
      </div>

    </div>
  );
}
