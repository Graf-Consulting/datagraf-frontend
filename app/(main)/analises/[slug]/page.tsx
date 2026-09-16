import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BarChart3, ExternalLink, FileText } from "lucide-react";
import { object } from "framer-motion/client";

// Placeholder — depois a gente busca os dados reais por slug
const analiseData: Record<string, { title: string; description: string; report?: { title: string; description: string; url: string } }> = {
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
    report: {
      title: "Impacto da suspensão das importações de carnes e produtos de origem animal do Brasil pela União Europeia",
      description: "Um retrato dos fluxos comerciais potencialmente expostos às restrições, conectando a origem da carga, os corredores de saída e os mercados consumidores europeus.",
      url: "https://graf-ebon.vercel.app/reports/impacto-restricoes-ue"
    },
  },
  "demurrage-portuaria": {
    title: "Demurrage Portuária",
    description: "Análise de custos e tempos de demurrage.",
    report: {
      title: "Dashboard interativo Demurrage Brasil",
      description: ".",
      url: "https://data-dev.grafconsulting.com.br/?p=An%C3%A1lise+Demurrage"
    },
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

export function generateStaticParams() {
  return Object.keys(analiseData).map((slug) => ({ slug }));
}

export default async function AnaliseDetailPage({ params }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;
  const analise = analiseData[slug];

  if (!analise) notFound();

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
      {analise?.report ? (
      <a
        href={analise.report.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block glass-card rounded-2xl p-8 transition-all duration-300 hover:border-[#467782]/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#467782]/10 rounded-xl group-hover:bg-[#467782]/20 transition-colors duration-300">
              <FileText className="w-6 h-6 text-[#6BB6C7]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#E2E8F0] group-hover:text-white transition-colors mb-1">
                {analise.report.title}
              </h2>
              <p className="text-sm text-[#64748B] group-hover:text-[#94A3B8] transition-colors">
                {analise.report.description}
              </p>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-[#475569] group-hover:text-[#6BB6C7] transition-colors shrink-0 mt-1" />
        </div>
      </a>
      ) : (
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
      )}
    </main>
  );
}