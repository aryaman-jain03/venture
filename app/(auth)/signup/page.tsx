"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { signup } from "../actions";

export default function SignupPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await signup(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
        <p className="text-sm text-zinc-400">Start validating your ideas today</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
            {error}
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" name="firstName" required placeholder="Steve" className="bg-zinc-900/50 border-white/10 h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" name="lastName" required placeholder="Jobs" className="bg-zinc-900/50 border-white/10 h-11" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="founder@startup.com" className="bg-zinc-900/50 border-white/10 h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required minLength={6} className="bg-zinc-900/50 border-white/10 h-11" />
        </div>
        <Button disabled={isPending} type="submit" className="w-full h-11 bg-white text-black hover:bg-zinc-200 mt-2">
          {isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
          Create Account {!isPending && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </form>
      <div className="text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link href="/login" className="text-white hover:underline">Sign in</Link>
      </div>
    </div>
  );
}
