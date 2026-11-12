import Link from "next/link";
import { BarChart3, TrendingUp, Ship, Truck, Globe, Anchor, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { LinkCard } from "@/components/ui/LinkCard";

const analises = [
  {
    slug: "movimentacao-portuaria",
    title: "Movimentação Portuária",
    description: "Análise de carga e descarga nos principais portos brasileiros com dados da ANTAQ.",
    icon: Ship,
    tags: ["ANTAQ", "Portos"],
    updatedAt: "Atualizado ontem",
  },
  {
    slug: "transporte-rodoviario",
    title: "Transporte Rodoviário",
    description: "Panorama do transporte de cargas por rodovia, incluindo piso mínimo e custos operacionais.",
    icon: Truck,
    tags: ["ANTT", "Rodovias"],
    updatedAt: "Atualizado semanalmente",
  },
  {
    slug: "comex-stat",
    title: "Comércio Exterior",
    description: "Estatísticas de importação e exportação por estado, produto e parceiro comercial.",
    icon: Globe,
    tags: ["ComexStat", "MDIC"],
    updatedAt: "Atualizado mensalmente",
  },
  {
    slug: "demurrage-portuaria",
    title: "Demurrage Portuária",
    description: "Análise de custos e tempos de demurrage a partir dos dados de movimentação portuária.",
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
    <main className="max-w-6xl mx-auto px-4 pt-8 pb-16 space-y-12">
      <PageHero 
        title="Análises"
        description="Painéis interativos e relatórios técnicos desenvolvidos pela GRAF. 
          Explore dados públicos de infraestrutura e transporte multimodal."
      />
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-[#F1F5F9] tracking-tight">
            Painéis disponíveis
          </h2>
          <span className="text-xs text-[#64748B] font-mono">
            {analises.length} painéis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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