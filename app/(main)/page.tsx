import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import HeroSection from "../sections/HeroSection";
import KpisSection from "../sections/KpisSection";
import ModulesSection from "../sections/ModulesSection";
import DataSourcesSection from "../sections/DataSourcesSection";
import UpdatesSection from "../sections/UpdatesSection";

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
