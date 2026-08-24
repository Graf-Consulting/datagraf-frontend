// app/(main)/page.tsx
import HeroSection from "../sections/HeroSection";
import KpisSection from "../sections/KpisSection";
import ModulesSection from "../sections/ModulesSection";
import DataSourcesSection from "../sections/DataSourcesSection";
import UpdatesSection from "../sections/UpdatesSection";

export default function Home() {
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