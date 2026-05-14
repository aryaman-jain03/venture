import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function VerifiedPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center py-10 w-full max-w-md mx-auto">
      <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative">
        <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-ping opacity-20" />
        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
      </div>
      
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-white">Email Verified!</h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          Your email has been successfully verified. You are now logged in and ready to start validating your startup ideas.
        </p>
      </div>

      <div className="pt-4 w-full">
        <Link href="/dashboard" className="w-full">
          <Button size="lg" className="w-full bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 group">
            Continue to Dashboard <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="text-sm text-zinc-500 pt-4 border-t border-white/5 w-full">
        On a different device? <Link href="/login" className="text-white hover:underline">Log in here</Link>
      </div>
    </div>
  );
}
