"use client";

import Link from "next/link";
import { BarChart3, TrendingUp, Ship, Truck, Globe, Anchor, ArrowRight } from "lucide-react";

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
      {/* Hero da página */}
      <section className="glass-accent rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
          Análises
        </h1>
        <p className="text-[#94A3B8] max-w-2xl text-[15px] leading-relaxed">
          Painéis interativos e relatórios técnicos desenvolvidos pela GRAF. 
          Explore dados públicos de infraestrutura e transporte multimodal.
        </p>
      </section>

      {/* Grid de cards */}
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
          {analises.map((analise) => (
            <Link
              key={analise.slug}
              href={`/analises/${analise.slug}/`}
              className="group block bg-[#12151C]/40 backdrop-blur-md border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:bg-[#12151C]/70 hover:border-[#467782]/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#467782]/10 rounded-xl group-hover:bg-[#467782]/20 transition-colors duration-300">
                  <analise.icon className="w-6 h-6 text-[#6BB6C7]" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#475569] group-hover:text-[#6BB6C7] group-hover:translate-x-0.5 transition-all duration-300" />
              </div>

              <h3 className="font-semibold text-[#E2E8F0] text-lg group-hover:text-white transition-colors duration-300 mb-2">
                {analise.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed group-hover:text-[#94A3B8] transition-colors duration-300 mb-4">
                {analise.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                <div className="flex gap-2">
                  {analise.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 bg-[#467782]/10 text-[#6BB6C7] rounded font-medium border border-[#467782]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-[#475569] font-medium">
                  {analise.updatedAt}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}