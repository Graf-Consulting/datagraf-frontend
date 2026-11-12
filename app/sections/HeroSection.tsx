"use client";

export default function HeroSection() {
  return (
    <section className="glass-accent rounded-2xl p-6 md:p-8">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
        Bem-vindo ao Nativ
      </h1>
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-[#94A3B8]">
        Sistema integrado para análise de dados governamentais e simulação de transporte multimodal.
        Reunimos e integramos dados públicos de múltiplas fontes para permitir análises avançadas e
        tomadas de decisão baseadas em evidências.
      </p>

      <div className="group relative overflow-hidden rounded-xl border border-white/[0.06]">
        <img
          src="/assets/Infrastructure-data-plataform-v2.jpg"
          alt="Diagrama da infraestrutura de dados"
          className="h-auto w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 via-transparent to-transparent" />
      </div>
    </section>
  );
}
