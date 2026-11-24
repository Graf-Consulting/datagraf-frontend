"use client";

import Image from "next/image";
import infrastructureDiagram from "@/public/assets/Infrastructure-data-plataform-v2.jpg";

// Largura real da imagem na landing: main (max-w-6xl, px-4) menos o padding da seção (p-6 / md:p-8).
// Sem isso o navegador assume 100vw e baixa uma versão maior do que precisa.
const HERO_IMAGE_SIZES =
  "(min-width: 1152px) 1056px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 5rem)";

export default function HeroSection() {
  return (
    <section className="glass-accent rounded-2xl p-6 md:p-8">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-fg-strong md:text-4xl">
        Bem-vindo ao Nativ
      </h1>
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-fg-muted">
        Sistema integrado para análise de dados governamentais e simulação de transporte multimodal.
        Reunimos e integramos dados públicos de múltiplas fontes para permitir análises avançadas e
        tomadas de decisão baseadas em evidências.
      </p>

      <div className="group relative overflow-hidden rounded-xl border border-overlay/[0.06]">
        {/* Import estático: o Next lê largura e altura (sem layout shift) e gera o placeholder borrado.
            fetchPriority alto porque é o maior elemento da landing (LCP). */}
        <Image
          src={infrastructureDiagram}
          alt="Diagrama da infraestrutura de dados"
          sizes={HERO_IMAGE_SIZES}
          placeholder="blur"
          fetchPriority="high"
          loading="eager"
          className="h-auto w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
      </div>
    </section>
  );
}
