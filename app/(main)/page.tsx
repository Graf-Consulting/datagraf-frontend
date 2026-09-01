import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import HeroSection from "../sections/HeroSection";
import KpisSection from "../sections/KpisSection";
import ModulesSection from "../sections/ModulesSection";
import DataSourcesSection from "../sections/DataSourcesSection";
import UpdatesSection from "../sections/UpdatesSection";

export default async function Home() {
    const supabae = await createClient();
    const { data: {user} } = await supabae.auth.getUser();

    if (user) {
        redirect("/hub/");
    }
    
    return (
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16 space-y-16">
        <HeroSection />
        <KpisSection />
        <ModulesSection />
        <DataSourcesSection />
        <UpdatesSection />
      </main>
    );
}