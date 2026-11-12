import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BarChart3, ExternalLink, FileText } from "lucide-react";

// Placeholder — depois a gente busca os dados reais por slug
const analiseData: Record<
  string,
  {
    title: string;
    description: string;
    report?: { title: string; description: string; url: string };
  }
> = {
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
      title:
        "Impacto da suspensão das importações de carnes e produtos de origem animal do Brasil pela União Europeia",
      description:
        "Um retrato dos fluxos comerciais potencialmente expostos às restrições, conectando a origem da carga, os corredores de saída e os mercados consumidores europeus.",
      url: "https://graf-ebon.vercel.app/reports/impacto-restricoes-ue",
    },
  },
  "demurrage-portuaria": {
    title: "Demurrage Portuária",
    description: "Análise de custos e tempos de demurrage.",
    report: {
      title: "Dashboard interativo Demurrage Brasil",
      description: ".",
      url: "https://data-dev.grafconsulting.com.br/?p=An%C3%A1lise+Demurrage",
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

export default async function AnaliseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const analise = analiseData[slug];

  if (!analise) notFound();

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 pb-16 pt-8">
      {/* Breadcrumb + Voltar */}
      <div>
        <Link
          href="/analises"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#6BB6C7]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Análises
        </Link>

        <div className="glass-accent rounded-2xl p-8 md:p-10">
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-xl bg-[#467782]/10 p-3">
              <BarChart3 className="h-8 w-8 text-[#6BB6C7]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {analise?.title || "Painel de Análise"}
              </h1>
              <p className="mt-1 text-[#94A3B8]">
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
          className="glass-card group block rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#467782]/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)]"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-[#467782]/10 p-3 transition-colors duration-300 group-hover:bg-[#467782]/20">
                <FileText className="h-6 w-6 text-[#6BB6C7]" />
              </div>
              <div>
                <h2 className="mb-1 text-xl font-semibold text-[#E2E8F0] transition-colors group-hover:text-white">
                  {analise.report.title}
                </h2>
                <p className="text-sm text-[#64748B] transition-colors group-hover:text-[#94A3B8]">
                  {analise.report.description}
                </p>
              </div>
            </div>
            <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-[#475569] transition-colors group-hover:text-[#6BB6C7]" />
          </div>
        </a>
      ) : (
        <section className="glass-card rounded-2xl p-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#467782]/10">
            <BarChart3 className="h-8 w-8 text-[#467782]" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#E2E8F0]">Painel em construção</h2>
          <p className="mx-auto max-w-md text-[#64748B]">
            Este painel está sendo integrado com os dados da GRAF. Em breve você poderá explorar as
            visualizações interativas aqui.
          </p>
        </section>
      )}
    </main>
  );
}
