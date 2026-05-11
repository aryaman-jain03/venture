"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sparkles, LogOut } from "lucide-react";
import { mainNavItems, bottomNavItems } from "@/lib/config/navigation";
import { useUser } from "@/hooks/use-user";
import { logout } from "@/app/(auth)/actions";

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <div className="w-64 border-r border-white/5 bg-zinc-950/50 hidden md:flex flex-col h-screen fixed left-0 top-0 z-40">
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <Link href="/dashboard" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">VenturIQ</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
        <div>
          <div className="text-xs font-semibold text-zinc-500 mb-4 px-2 uppercase tracking-wider">Main Menu</div>
          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.locked ? "#" : item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                    isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200",
                    item.locked && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <item.icon className={cn("w-4 h-4", isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400")} />
                  {item.name}
                  {item.locked && (
                    <span className="ml-auto text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700">LOCKED</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 space-y-1">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
              )}
            >
              <item.icon className={cn("w-4 h-4", isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400")} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/5">
        <form action={logout}>
          <button type="submit" className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors text-left group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {user?.initials || "??"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">{user?.name || "Loading..."}</div>
              <div className="text-xs text-zinc-500 truncate">{user?.plan || "..."}</div>
            </div>
            <LogOut className="w-4 h-4 text-zinc-500 ml-auto shrink-0 group-hover:text-white transition-colors" />
          </button>
        </form>
      </div>
    </div>
  );
}
