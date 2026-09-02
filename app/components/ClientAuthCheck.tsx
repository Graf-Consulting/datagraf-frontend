"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/clients";
import { useRouter } from "next/navigation";

export default function ClientAuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.replace("/hub/");
      }
    };
    check();
  }, [router]);

  return null;
}