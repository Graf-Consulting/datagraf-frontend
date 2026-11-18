import { BarChart3, TrendingUp, Ship, Truck, Globe, Anchor, type LucideIcon } from "lucide-react";

export interface Analise {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  updatedAt: string;
  report?: { title: string; description: string; url: string };
}

// Fonte única das análises: alimenta a lista (/analises) e o detalhe (/analises/[slug]).
// Placeholder até os dados virem da API própria.
export const analises: Analise[] = [
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
    report: {
      title:
        "Impacto da suspensão das importações de carnes e produtos de origem animal do Brasil pela União Europeia",
      description:
        "Um retrato dos fluxos comerciais potencialmente expostos às restrições, conectando a origem da carga, os corredores de saída e os mercados consumidores europeus.",
      url: "https://graf-ebon.vercel.app/reports/impacto-restricoes-ue",
    },
  },
  {
    slug: "demurrage-portuaria",
    title: "Demurrage Portuária",
    description:
      "Análise de custos e tempos de demurrage a partir dos dados de movimentação portuária.",
    icon: Anchor,
    tags: ["ANTAQ", "Custos"],
    updatedAt: "Nova análise",
    report: {
      title: "Dashboard interativo Demurrage Brasil",
      description: ".",
      url: "https://data-dev.grafconsulting.com.br/?p=An%C3%A1lise+Demurrage",
    },
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

export function getAnalise(slug: string) {
  return analises.find((a) => a.slug === slug);
}
