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
      <section className="glass-card rounded-2xl border-l-4 border-l-[#467782] p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-[#467782]/10 p-3">
            <RefreshCw className="h-5 w-5 text-[#6BB6C7]" />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#F1F5F9]">
              Vindo do ambiente anterior?
            </h2>
            <p className="text-sm leading-relaxed text-[#64748B]">
              Estamos migrando as ferramentas da plataforma antiga para cá. Algumas telas vão mudar
              de cara durante o processo, mas as{" "}
              <span className="text-[#94A3B8]">
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
          <div className="rounded-lg bg-[#467782]/10 p-2.5">
            <GraduationCap className="h-5 w-5 text-[#6BB6C7]" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-[#F1F5F9]">
            Tutoriais por ferramenta
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {futurosTutoriais.map((guia) => (
            <div key={guia.title} className="glass-card flex items-start gap-4 rounded-xl p-6">
              <div className="shrink-0 rounded-xl bg-[#467782]/10 p-3">
                <guia.icon className="h-5 w-5 text-[#6BB6C7]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 flex flex-wrap items-center gap-2 font-semibold text-[#E2E8F0]">
                  {guia.title}
                  <span className="rounded border border-[#467782]/20 bg-[#467782]/10 px-2 py-0.5 text-[10px] font-medium text-[#6BB6C7]">
                    Tutorial em breve
                  </span>
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-[#64748B]">{guia.description}</p>
                <Link
                  href={guia.href}
                  className="text-xs text-[#6BB6C7] transition-colors hover:text-[#98CDD9]"
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
        <h2 className="mb-6 text-xl font-bold tracking-tight text-[#F1F5F9]">
          Perguntas frequentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="glass-card group overflow-hidden rounded-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-medium text-[#E2E8F0] transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-[#475569] transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[#64748B]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="glass-accent rounded-2xl p-8 text-center">
        <h2 className="mb-2 text-xl font-semibold text-white">Ainda precisa de ajuda?</h2>
        <p className="mb-6 text-sm text-[#94A3B8]">
          Não achou o que procurava? Fale diretamente com a nossa equipe.
        </p>
        <a
          href="mailto:contato@graf.com.br" // ← troca pelo e-mail real
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#467782] to-[#3D6A75] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-[#4DA0B2] hover:to-[#467782]"
        >
          <Mail className="h-4 w-4" />
          Falar com o suporte
        </a>
      </section>
    </main>
  );
}
