"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

export interface User {
  id: string;
  name: string;
  initials: string;
  email: string;
  plan: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const supabase = createClient();
      const { data: { user: authUser }, error } = await supabase.auth.getUser();

      if (error || !authUser) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      // Map Supabase user to our frontend User interface
      const firstName = authUser.user_metadata?.first_name || "";
      const lastName = authUser.user_metadata?.last_name || "";
      const name = `${firstName} ${lastName}`.trim() || authUser.email?.split("@")[0] || "User";
      
      const initials = name
        .split(" ")
        .map(n => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase() || "U";

      setUser({
        id: authUser.id,
        name,
        initials,
        email: authUser.email || "",
        plan: "Free Plan", // Can fetch from profiles table later
      });
      setIsLoading(false);
    }

    fetchUser();
  }, []);

  return { user, isLoading };
}
