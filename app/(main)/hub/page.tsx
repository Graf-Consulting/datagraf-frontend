import { LogOut, User, BarChart3, Settings, FileText, Flame, FilePlus, Map, Lightbulb, BookOpen } from "lucide-react";
import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import { PageHero } from "@/components/PageHero";
import { LinkCard } from "@/components/LinkCard";

export default async function HubPage() {
  const claims = await requireAuth();
  const displayName =
    (claims.user_metadata as { full_name?: string })?.full_name || claims.email;

  const quickAccess = [
    { title: "Análises", description: "Acesse os painéis e relatórios técnicos.", icon: BarChart3, href: "/analises/" },
    { title: "Insights", description: "Análises aprofundadas e relatórios técnicos sobre infraestrutura e transporte multimodal.", icon: Lightbulb, href: "/insights/" },
    { title: "Simulações", description: "Cenários de transporte multimodal.", icon: Map, href: "/odsim/simulator/" },
    { title: "Histórico de Simulações", description: "Acesse e gerencie suas simulações anteriores.", icon: BookOpen, href: "/odsim/history/" },
    { title: "MatMaker", description: "Matrizes origem-destino.", icon: FilePlus, href: "/matmaker/" },
    { title: "Configurações", description: "Gerencie sua conta e preferências.", icon: Settings, href: "/configuration/" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 pt-8 pb-16 space-y-12">
      <PageHero 
        title={`Olá, ${displayName}!`}
        description="Seja bem-vindo ao Observatório de Dados."
      />

      {/* Grid de acesso rápido */}
      <section>
        <h2 className="text-xl font-bold text-[#F1F5F9] tracking-tight mb-6">
          Acesso Rápido
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
