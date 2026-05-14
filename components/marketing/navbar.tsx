"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@/hooks/use-user";
import { logout } from "@/app/(auth)/actions";
import { ProfileDropdown } from "@/components/dashboard/profile-dropdown";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();

  return (
    <header className="fixed top-0 w-full z-50 glass-panel">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 group-hover:bg-indigo-500/30 transition-colors">
            <Rocket className="w-4 h-4 text-indigo-400" />
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
              <ProfileDropdown user={user} variant="navbar" />
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
                  <Link href="/dashboard" className="text-sm text-zinc-300 mb-2">Dashboard</Link>
                  <ProfileDropdown user={user} variant="mobile" />
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
