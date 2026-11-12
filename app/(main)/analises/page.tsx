import { BarChart3, TrendingUp, Ship, Truck, Globe, Anchor } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { LinkCard } from "@/components/ui/LinkCard";

const analises = [
  {
    slug: "movimentacao-portuaria",
    title: "Movimentação Portuária",
    description:
      "Análise de carga e descarga nos principais portos brasileiros com dados da ANTAQ.",
    icon: Ship,
    tags: ["ANTAQ", "Portos"],
    updatedAt: "Atualizado ontem",
  },
  {
    slug: "transporte-rodoviario",
    title: "Transporte Rodoviário",
    description:
      "Panorama do transporte de cargas por rodovia, incluindo piso mínimo e custos operacionais.",
    icon: Truck,
    tags: ["ANTT", "Rodovias"],
    updatedAt: "Atualizado semanalmente",
  },
  {
    slug: "comex-stat",
    title: "Comércio Exterior",
    description:
      "Estatísticas de importação e exportação por estado, produto e parceiro comercial.",
    icon: Globe,
    tags: ["ComexStat", "MDIC"],
    updatedAt: "Atualizado mensalmente",
  },
  {
    slug: "demurrage-portuaria",
    title: "Demurrage Portuária",
    description:
      "Análise de custos e tempos de demurrage a partir dos dados de movimentação portuária.",
    icon: Anchor,
    tags: ["ANTAQ", "Custos"],
    updatedAt: "Nova análise",
  },
  {
    slug: "matmaker-od",
    title: "MatMaker OD",
    description: "Matrizes origem-destino com origens e destinos relevantes por tipo de carga.",
    icon: BarChart3,
    tags: ["Multimodal", "OD"],
    updatedAt: "Nova funcionalidade",
  },
  {
    slug: "tendencias-mercado",
    title: "Tendências de Mercado",
    description: "Dashboard com indicadores macro do setor de infraestrutura e logística.",
    icon: TrendingUp,
    tags: ["IBGE", "Mercado"],
    updatedAt: "Atualizado trimestralmente",
  },
];

export default function AnalisesPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-8">
      <PageHero
        title="Análises"
        description="Painéis interativos e relatórios técnicos desenvolvidos pela GRAF. 
          Explore dados públicos de infraestrutura e transporte multimodal."
      />
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-[#F1F5F9]">Painéis disponíveis</h2>
          <span className="font-mono text-xs text-[#64748B]">{analises.length} painéis</span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {analises.map((a) => (
            <LinkCard
              key={a.slug}
              href={`/analises/${a.slug}/`}
              title={a.title}
              description={a.description}
              icon={a.icon}
              tags={a.tags}
              meta={a.updatedAt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
