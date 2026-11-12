import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import HeroSection from "@/app/sections/HeroSection";
import KpisSection from "@/app/sections/KpisSection";
import ModulesSection from "@/app/sections/ModulesSection";
import DataSourcesSection from "@/app/sections/DataSourcesSection";
import UpdatesSection from "@/app/sections/UpdatesSection";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (data?.claims) {
    redirect("/hub/");
  }

  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-16 pt-8">
      <HeroSection />
      <KpisSection />
      <ModulesSection />
      <DataSourcesSection />
      <UpdatesSection />
    </main>
  );
}
