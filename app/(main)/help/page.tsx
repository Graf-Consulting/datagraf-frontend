import Link from "next/link";
import {
  BarChart3, Lightbulb, Map, FilePlus, Newspaper,
  Mail, ChevronDown, RefreshCw, GraduationCap,
} from "lucide-react";

const futurosTutoriais = [
  { icon: BarChart3, title: "Análises", description: "Como navegar pelos painéis, aplicar filtros e exportar visualizações.", href: "/analises/" },
  { icon: Lightbulb, title: "Insights", description: "Como ler e aproveitar os relatórios técnicos publicados.", href: "/insights/" },
  { icon: Map, title: "ODSim", description: "Como montar um cenário, rodar a simulação e interpretar os resultados.", href: "/odsim/" },
  { icon: FilePlus, title: "MatMaker", description: "Como construir e calibrar matrizes origem-destino.", href: "/matmaker/" },
  { icon: Newspaper, title: "Clipping", description: "Como acompanhar e organizar as notícias do setor.", href: "/clipping/" },
];

const faqs = [
  {
    q: "Preciso de uma conta para usar a plataforma?",
    a: "Não para tudo. Análises e Insights são abertos a qualquer visitante. Ferramentas como ODSim, MatMaker e Clipping exigem login, pois salvam informações na sua conta.",
  },
  {
    q: "Como funciona o login?",
    a: "Usamos login com Google ou Microsoft — você usa uma conta que já tem, sem criar senha nova. Também é possível entrar com e-mail e senha, se preferir.",
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

export default function AjudaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-8 pb-16 space-y-12">
      {/* Hero */}
      <section className="glass-accent rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
          Ajuda
        </h1>
        <p className="text-[#94A3B8] text-[15px] max-w-2xl leading-relaxed">
          Este será o seu ponto de partida para aprender a usar a plataforma:
          aqui você encontrará tutoriais e guias passo a passo de cada ferramenta.
        </p>
      </section>

      {/* Aviso de migração — para quem vem do ambiente antigo */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#467782]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#467782]/10 rounded-xl shrink-0">
            <RefreshCw className="w-5 h-5 text-[#6BB6C7]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#F1F5F9] mb-2">
              Vindo do ambiente anterior?
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Estamos migrando as ferramentas da plataforma antiga para cá.
              Algumas telas vão mudar de cara durante o processo, mas as{" "}
              <span className="text-[#94A3B8]">regras de negócio que você já conhece permanecem as mesmas</span> —
              nada do que você aprendeu será perdido.
            </p>
          </div>
        </div>
      </section>

      {/* Tutoriais por ferramenta */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-[#467782]/10 rounded-lg">
            <GraduationCap className="w-5 h-5 text-[#6BB6C7]" />
          </div>
          <h2 className="text-xl font-bold text-[#F1F5F9] tracking-tight">
            Tutoriais por ferramenta
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {futurosTutoriais.map((guia) => (
            <div key={guia.title} className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="p-3 bg-[#467782]/10 rounded-xl shrink-0">
                <guia.icon className="w-5 h-5 text-[#6BB6C7]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#E2E8F0] mb-1 flex items-center gap-2 flex-wrap">
                  {guia.title}
                  <span className="text-[10px] px-2 py-0.5 bg-[#467782]/10 text-[#6BB6C7] rounded font-medium border border-[#467782]/20">
                    Tutorial em breve
                  </span>
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-3">
                  {guia.description}
                </p>
                <Link
                  href={guia.href}
                  className="text-xs text-[#6BB6C7] hover:text-[#98CDD9] transition-colors"
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
        <h2 className="text-xl font-bold text-[#F1F5F9] tracking-tight mb-6">
          Perguntas frequentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-sm font-medium text-[#E2E8F0] hover:text-white transition-colors [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="w-4 h-4 text-[#475569] group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <p className="px-5 pb-5 text-sm text-[#64748B] leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="glass-accent rounded-2xl p-8 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">
          Ainda precisa de ajuda?
        </h2>
        <p className="text-sm text-[#94A3B8] mb-6">
          Não achou o que procurava? Fale diretamente com a nossa equipe.
        </p>
        <a
          href="mailto:contato@graf.com.br" // ← troca pelo e-mail real
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#467782] to-[#3D6A75] hover:from-[#4DA0B2] hover:to-[#467782] transition-all duration-300"
        >
          <Mail className="w-4 h-4" />
          Falar com o suporte
        </a>
      </section>
    </main>
  );
}