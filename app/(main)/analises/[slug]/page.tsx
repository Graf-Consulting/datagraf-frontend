"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BarChart3 } from "lucide-react";

// Placeholder — depois a gente busca os dados reais por slug
const analiseData: Record<string, { title: string; description: string }> = {
  "movimentacao-portuaria": {
    title: "Movimentação Portuária",
    description: "Dados detalhados de carga e descarga nos portos brasileiros.",
  },
  "transporte-rodoviario": {
    title: "Transporte Rodoviário",
    description: "Panorama do transporte de cargas por rodovia.",
  },
  "comex-stat": {
    title: "Comércio Exterior",
    description: "Estatísticas de importação e exportação.",
  },
  "demurrage-portuaria": {
    title: "Demurrage Portuária",
    description: "Análise de custos e tempos de demurrage.",
  },
  "matmaker-od": {
    title: "MatMaker OD",
    description: "Matrizes origem-destino por tipo de carga.",
  },
  "tendencias-mercado": {
    title: "Tendências de Mercado",
    description: "Indicadores macro do setor de infraestrutura.",
  },
};

export default function AnaliseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const analise = analiseData[slug];

  return (
    <main className="max-w-6xl mx-auto px-4 pt-8 pb-16 space-y-8">
      {/* Breadcrumb + Voltar */}
      <div>
        <Link
          href="/analises/"
          className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#6BB6C7] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Análises
        </Link>

        <div className="glass-accent rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#467782]/10 rounded-xl">
              <BarChart3 className="w-8 h-8 text-[#6BB6C7]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {analise?.title || "Painel de Análise"}
              </h1>
              <p className="text-[#94A3B8] mt-1">
                {analise?.description || "Descrição não disponível."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder do painel */}
      <section className="glass-card rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-[#467782]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BarChart3 className="w-8 h-8 text-[#467782]" />
        </div>
        <h2 className="text-xl font-semibold text-[#E2E8F0] mb-2">
          Painel em construção
        </h2>
        <p className="text-[#64748B] max-w-md mx-auto">
          Este painel está sendo integrado com os dados da GRAF. 
          Em breve você poderá explorar as visualizações interativas aqui.
        </p>
      </section>
    </main>
  );
}