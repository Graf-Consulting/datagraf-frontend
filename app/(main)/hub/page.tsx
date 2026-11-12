import { BarChart3, Settings, FilePlus, Map, Lightbulb, BookOpen } from "lucide-react";
import { requireAuth } from "@/lib/auth";
import { PageHero } from "@/components/ui/PageHero";
import { LinkCard } from "@/components/ui/LinkCard";

export default async function HubPage() {
  const claims = await requireAuth();
  const displayName = (claims.user_metadata as { full_name?: string })?.full_name || claims.email;

  const quickAccess = [
    {
      title: "Análises",
      description: "Acesse os painéis e relatórios técnicos.",
      icon: BarChart3,
      href: "/analises/",
    },
    {
      title: "Insights",
      description:
        "Análises aprofundadas e relatórios técnicos sobre infraestrutura e transporte multimodal.",
      icon: Lightbulb,
      href: "/insights/",
    },
    {
      title: "Simulações",
      description: "Cenários de transporte multimodal.",
      icon: Map,
      href: "/odsim/simulator/",
    },
    {
      title: "Histórico de Simulações",
      description: "Acesse e gerencie suas simulações anteriores.",
      icon: BookOpen,
      href: "/odsim/history/",
    },
    {
      title: "MatMaker",
      description: "Matrizes origem-destino.",
      icon: FilePlus,
      href: "/matmaker/",
    },
    {
      title: "Configurações",
      description: "Gerencie sua conta e preferências.",
      icon: Settings,
      href: "/configuration/",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-8">
      <PageHero
        title={`Olá, ${displayName}!`}
        description="Seja bem-vindo ao Observatório de Dados."
      />

      {/* Grid de acesso rápido */}
      <section>
        <h2 className="mb-6 text-xl font-bold tracking-tight text-[#F1F5F9]">Acesso Rápido</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quickAccess.map((item) => (
            <LinkCard
              key={item.title}
              href={item.href}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
