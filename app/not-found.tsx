// app/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Telescope } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-base px-6 md:px-16 lg:px-24">
      {/* === FUNDO: sistema orbital (SVG puro) === */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Órbitas tracejadas */}
        <ellipse
          cx="1080"
          cy="720"
          rx="620"
          ry="230"
          stroke="#467782"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          transform="rotate(-18 1080 720)"
        />
        <ellipse
          cx="1080"
          cy="720"
          rx="840"
          ry="330"
          stroke="#467782"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="4 12"
          transform="rotate(-18 1080 720)"
        />
        <ellipse
          cx="1250"
          cy="200"
          rx="500"
          ry="170"
          stroke="#4DA0B2"
          strokeOpacity="0.15"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          transform="rotate(12 1250 200)"
        />

        {/* Planeta principal com anel (canto inferior direito) */}
        <circle
          cx="1080"
          cy="720"
          r="58"
          fill="#467782"
          fillOpacity="0.2"
          stroke="#6BB6C7"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <circle cx="1062" cy="702" r="14" fill="#6BB6C7" fillOpacity="0.12" />
        <ellipse
          cx="1080"
          cy="720"
          rx="100"
          ry="26"
          stroke="#6BB6C7"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          transform="rotate(-18 1080 720)"
        />

        {/* Planetas menores */}
        <circle
          cx="1245"
          cy="185"
          r="17"
          fill="#4DA0B2"
          fillOpacity="0.25"
          stroke="#6BB6C7"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
        <circle
          cx="780"
          cy="180"
          r="9"
          fill="#467782"
          fillOpacity="0.3"
          stroke="#6BB6C7"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <circle cx="1310" cy="480" r="6" fill="#6BB6C7" fillOpacity="0.3" />

        {/* Estrelas */}
        <circle cx="180" cy="140" r="1.5" fill="white" fillOpacity="0.5" />
        <circle cx="420" cy="90" r="1" fill="#6BB6C7" fillOpacity="0.5" />
        <circle cx="640" cy="300" r="1.2" fill="white" fillOpacity="0.3" />
        <circle cx="900" cy="120" r="1.5" fill="white" fillOpacity="0.4" />
        <circle cx="1180" cy="340" r="1" fill="#6BB6C7" fillOpacity="0.5" />
        <circle cx="1360" cy="620" r="1.2" fill="white" fillOpacity="0.35" />
        <circle cx="240" cy="640" r="1.5" fill="white" fillOpacity="0.3" />
        <circle cx="520" cy="780" r="1" fill="#6BB6C7" fillOpacity="0.4" />
        <circle cx="80" cy="420" r="1.2" fill="white" fillOpacity="0.35" />
        <circle cx="1330" cy="80" r="1.5" fill="white" fillOpacity="0.45" />
        <circle cx="720" cy="540" r="1" fill="white" fillOpacity="0.25" />
        <circle cx="990" cy="420" r="1.2" fill="#6BB6C7" fillOpacity="0.35" />
      </svg>

      {/* === 404 fantasma === */}
      <span
        aria-hidden
        className="absolute right-[2%] top-1/2 hidden -translate-y-1/2 select-none text-[20rem] font-bold leading-none tracking-tighter text-overlay/[0.03] md:block lg:text-[26rem]"
      >
        404
      </span>

      {/* Gradiente sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 45%, rgba(70, 119, 130, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* === CONTEÚDO: à esquerda === */}
      <div className="relative z-10 max-w-xl">
        <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-light to-accent shadow-lg shadow-accent/30">
          <Telescope className="h-12 w-12 text-white" />
        </div>

        <p className="mb-4 font-mono text-xs tracking-[0.35em] text-accent">
          ERR 404 // SINAL PERDIDO
        </p>

        <h1 className="mb-5 text-5xl font-bold tracking-tight text-fg-strong md:text-6xl">
          Houston, temos um problema.
        </h1>

        <p className="mb-10 max-w-md text-lg leading-relaxed text-fg-muted">
          Apontamos todos os nossos telescópios, mas esta página está fora do campo de observação. É
          possível que o endereço tenha mudado de órbita, ou que nunca tenha existido.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-accent-light hover:to-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a base
        </Link>
      </div>
    </main>
  );
}
