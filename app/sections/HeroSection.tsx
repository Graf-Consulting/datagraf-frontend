"use client";

export default function HeroSection() {
  return (
    <section className="glass-accent rounded-2xl p-6 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        Bem-vindo ao Observatório de Dados
      </h1>
      <p className="text-[#94A3B8] max-w-3xl leading-relaxed mb-8 text-[15px]">
        Sistema integrado para análise de dados governamentais e simulação de transporte multimodal.
        Reunimos e integramos dados públicos de múltiplas fontes para permitir análises avançadas e tomadas de decisão baseadas em evidências.
      </p>

      <div className="rounded-xl overflow-hidden border border-white/[0.06] relative group">
        <img
          src="/assets/Infrastructure-data-plataform-v2.jpg"
          alt="Diagrama da infraestrutura de dados"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}