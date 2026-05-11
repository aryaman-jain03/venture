"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { login } from "../actions";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await login(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-zinc-400">Enter your credentials to access your dashboard</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
            {error}
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="founder@startup.com" className="bg-zinc-900/50 border-white/10 h-11" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-xs text-zinc-400 hover:text-white">Forgot password?</Link>
          </div>
          <Input id="password" name="password" type="password" required className="bg-zinc-900/50 border-white/10 h-11" />
        </div>
        <Button disabled={isPending} type="submit" className="w-full h-11 bg-white text-black hover:bg-zinc-200 mt-2">
          {isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
          Sign In {!isPending && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </form>
      <div className="text-center text-sm text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-white hover:underline">Sign up</Link>
      </div>
    </div>
  );
}
