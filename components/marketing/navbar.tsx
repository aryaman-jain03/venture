"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@/hooks/use-user";
import { logout } from "@/app/(auth)/actions";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();

  return (
    <header className="fixed top-0 w-full z-50 glass-panel">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">VenturIQ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isLoading ? (
            <div className="w-20 h-8 bg-white/5 rounded-full animate-pulse" />
          ) : user ? (
            <>
              <Link href="/dashboard" className="text-sm text-zinc-400 hover:text-white transition-colors mr-2">Dashboard</Link>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-[10px]">
                  {user.initials || "??"}
                </div>
                <span className="text-sm font-medium text-white">{user.name || "User"}</span>
              </div>
              <form action={logout}>
                <button type="submit" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">Log in</Link>
              <Link href="/signup">
                <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 w-full glass border-b border-white/5"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link href="/features" className="text-sm text-zinc-300">Features</Link>
              <Link href="/pricing" className="text-sm text-zinc-300">Pricing</Link>
              <Link href="/about" className="text-sm text-zinc-300">About</Link>
              <hr className="border-white/5 my-2" />
              {isLoading ? (
                <div className="w-full h-10 bg-white/5 rounded-md animate-pulse" />
              ) : user ? (
                <>
                  <Link href="/dashboard" className="text-sm text-zinc-300">Dashboard</Link>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                      {user.initials || "??"}
                    </div>
                    <span className="text-sm font-medium text-white">{user.name || "User"}</span>
                  </div>
                  <form action={logout} className="mt-2">
                    <Button type="submit" variant="outline" className="w-full border-white/10 text-zinc-300 hover:text-white">
                      Logout
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm text-zinc-300">Log in</Link>
                  <Link href="/signup">
                    <Button className="w-full bg-white text-black hover:bg-zinc-200 mt-2">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
