import { requireAuth } from "@/lib/auth";
import { MapPin, BookOpen } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { LinkCard } from "@/components/ui/LinkCard";

export default async function ODSimPage() {
  await requireAuth();

  const tools = [
    {
      title: "Simulador",
      description: "Crie e execute simulações de transporte multimodal com dados reais.",
      icon: MapPin,
      href: "/odsim/simulator/",
    },
    {
      title: "Histórico",
      description: "Acesse e gerencie suas simulações anteriores.",
      icon: BookOpen,
      href: "/odsim/history/",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">
      <PageHero title="ODSim" description="Ferramenta de simulação de transporte multimodal." />

      {/*Cards*/}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {tools.map((tool) => (
          <LinkCard
            key={tool.title}
            title={tool.title}
            href={tool.href}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </section>
    </main>
  );
}
