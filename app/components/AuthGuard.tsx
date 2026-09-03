"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/clients";
import LoadingScreen from "./LoadingScreen";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const check = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.replace("/login/");
        return;
      }
      
      setAuthenticated(true);
    };
    check();
  }, [router]);

  if (!authenticated) {
    return <LoadingScreen message="Carregando..." />;
  }

  return <>{children}</>;
}