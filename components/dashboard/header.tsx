"use client";

import { MobileNav } from "@/components/dashboard/mobile-nav";
import { ProfileDropdown } from "@/components/dashboard/profile-dropdown";
import { useUser } from "@/hooks/use-user";

export function Header() {
  const { user } = useUser();

  return (
    <header className="h-16 border-b border-white/5 bg-zinc-950/50 flex items-center px-4 md:px-6 sticky top-0 z-30 glass-panel">
      <div className="flex items-center gap-3">
        <MobileNav />
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>Project: <span className="text-white font-medium">VenturIQ</span></span>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
         <div className="text-xs px-2 py-1 rounded bg-white/10 text-zinc-300 border border-white/10 hidden sm:block">Autosaved just now</div>
         <div className="md:hidden">
            <ProfileDropdown user={user} variant="navbar" />
         </div>
         <div className="hidden md:block">
            <ProfileDropdown user={user} variant="navbar" />
         </div>
      </div>
    </header>
  );
}
