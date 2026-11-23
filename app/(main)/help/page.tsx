import Link from "next/link";
import {
  BarChart3,
  Lightbulb,
  Map,
  FilePlus,
  Newspaper,
  Mail,
  ChevronDown,
  RefreshCw,
  GraduationCap,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { requireAuth } from "@/lib/auth";

const futurosTutoriais = [
  {
    icon: BarChart3,
    title: "Análises",
    description: "Como navegar pelos painéis, aplicar filtros e exportar visualizações.",
    href: "/analises",
  },
  {
    icon: Lightbulb,
    title: "Insights",
    description: "Como ler e aproveitar os relatórios técnicos publicados.",
    href: "/insights",
  },
  {
    icon: Map,
    title: "ODSim",
    description: "Como montar um cenário, rodar a simulação e interpretar os resultados.",
    href: "/odsim",
  },
  {
    icon: FilePlus,
    title: "MatMaker",
    description: "Como construir e calibrar matrizes origem-destino.",
    href: "/matmaker",
  },
  {
    icon: Newspaper,
    title: "Clipping",
    description: "Como acompanhar e organizar as notícias do setor.",
    href: "/clipping",
  },
];

const faqs = [
  {
    q: "Preciso de uma conta para usar a plataforma?",
    a: "Não para tudo. Análises e Insights são abertos a qualquer visitante. Ferramentas como ODSim, MatMaker e Clipping exigem login, pois salvam informações na sua conta.",
  },
  {
    q: "Como funciona o login?",
    a: "Usamos login com Google ou Microsoft — você usa uma conta que já tem, sem criar senha nova.",
  },
  {
    q: "De onde vêm os dados das análises?",
    a: "De fontes públicas e oficiais: ANTAQ, ANTT, ComexStat/MDIC, IBGE, entre outras. Cada painel indica suas fontes.",
  },
  {
    q: "Encontrei um problema. Como reporto?",
    a: "Fale com a gente pelo e-mail de contato no fim desta página. Descreva o que você tentou fazer e o que aconteceu — prints ajudam muito.",
  },
];

export default async function AjudaPage() {
  await requireAuth();

  return (
    <main className="mx-auto max-w-4xl space-y-12 px-4 pb-16 pt-8">
      {/* Hero */}
      <PageHero
        title="Ajuda"
        description="Este será o seu ponto de partida para aprender a usar a plataforma:
          aqui você encontrará tutoriais e guias passo a passo de cada ferramenta."
      />

      {/* Aviso de migração — para quem vem do ambiente antigo */}
      <section className="glass-card rounded-2xl border-l-4 border-l-accent p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-accent/10 p-3">
            <RefreshCw className="h-5 w-5 text-accent-fg" />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-fg-strong">
              Vindo do ambiente anterior?
            </h2>
            <p className="text-sm leading-relaxed text-fg-subtle">
              Estamos migrando as ferramentas da plataforma antiga para cá. Algumas telas vão mudar
              de cara durante o processo, mas as{" "}
              <span className="text-fg-muted">
                regras de negócio que você já conhece permanecem as mesmas
              </span>{" "}
              — nada do que você aprendeu será perdido.
            </p>
          </div>
        </div>
      </section>

      {/* Tutoriais por ferramenta */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-accent/10 p-2.5">
            <GraduationCap className="h-5 w-5 text-accent-fg" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-fg-strong">
            Tutoriais por ferramenta
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {futurosTutoriais.map((guia) => (
            <div key={guia.title} className="glass-card flex items-start gap-4 rounded-xl p-6">
              <div className="shrink-0 rounded-xl bg-accent/10 p-3">
                <guia.icon className="h-5 w-5 text-accent-fg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 flex flex-wrap items-center gap-2 font-semibold text-fg">
                  {guia.title}
                  <span className="rounded border border-accent/20 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent-fg">
                    Tutorial em breve
                  </span>
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-fg-subtle">{guia.description}</p>
                <Link
                  href={guia.href}
                  className="text-xs text-accent-fg transition-colors hover:text-accent-fg-strong"
                >
                  Abrir ferramenta →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="mb-6 text-xl font-bold tracking-tight text-fg-strong">
          Perguntas frequentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="glass-card group overflow-hidden rounded-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-medium text-fg transition-colors hover:text-fg-strong [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-fg-faint transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-fg-subtle">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="glass-accent rounded-2xl p-8 text-center">
        <h2 className="mb-2 text-xl font-semibold text-fg-strong">Ainda precisa de ajuda?</h2>
        <p className="mb-6 text-sm text-fg-muted">
          Não achou o que procurava? Fale diretamente com a nossa equipe.
        </p>
        <a
          href="mailto:contato@graf.com.br" // ← troca pelo e-mail real
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-accent-light hover:to-accent"
        >
          <Mail className="h-4 w-4" />
          Falar com o suporte
        </a>
      </section>
    </main>
  );
}
