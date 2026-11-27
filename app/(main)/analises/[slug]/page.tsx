import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BarChart3, ExternalLink, FileText } from "lucide-react";
import { analises, getAnalise } from "@/lib/analises";

export function generateStaticParams() {
  return analises.map(({ slug }) => ({ slug }));
}

export default async function AnaliseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const analise = getAnalise(slug);

  if (!analise) notFound();

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 pb-16 pt-8">
      {/* Breadcrumb + Voltar */}
      <div>
        <Link
          href="/analises"
          className="-mt-3 mb-3 inline-flex items-center gap-2 py-3 text-sm text-fg-subtle transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Análises
        </Link>

        <div className="glass-accent rounded-2xl p-6 md:p-10">
          {/* No celular o ícone fica acima do texto, para o título não ficar espremido */}
          <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="shrink-0 rounded-xl bg-accent/10 p-3">
              <BarChart3 className="h-8 w-8 text-accent-fg" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-fg-strong">
                {analise?.title || "Painel de Análise"}
              </h1>
              <p className="mt-1 text-fg-muted">
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
          className="glass-card group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] md:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="shrink-0 rounded-xl bg-accent/10 p-3 transition-colors duration-300 group-hover:bg-accent/20">
                <FileText className="h-6 w-6 text-accent-fg" />
              </div>
              <div>
                <h2 className="mb-1 text-xl font-semibold text-fg transition-colors group-hover:text-fg-strong">
                  {analise.report.title}
                </h2>
                <p className="text-sm text-fg-subtle transition-colors group-hover:text-fg-muted">
                  {analise.report.description}
                </p>
              </div>
            </div>
            <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-fg-faint transition-colors group-hover:text-accent-fg" />
          </div>
        </a>
      ) : (
        <section className="glass-card rounded-2xl p-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
            <BarChart3 className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-fg">Painel em construção</h2>
          <p className="mx-auto max-w-md text-fg-subtle">
            Este painel está sendo integrado com os dados da GRAF. Em breve você poderá explorar as
            visualizações interativas aqui.
          </p>
        </section>
      )}
    </main>
  );
}
