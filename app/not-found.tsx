// app/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Telescope } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] relative flex items-center px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* === FUNDO: sistema orbital (SVG puro) === */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Órbitas tracejadas */}
        <ellipse
          cx="1080" cy="720" rx="620" ry="230"
          stroke="#467782" strokeOpacity="0.35" strokeWidth="1.5"
          strokeDasharray="4 10"
          transform="rotate(-18 1080 720)"
        />
        <ellipse
          cx="1080" cy="720" rx="840" ry="330"
          stroke="#467782" strokeOpacity="0.18" strokeWidth="1.5"
          strokeDasharray="4 12"
          transform="rotate(-18 1080 720)"
        />
        <ellipse
          cx="1250" cy="200" rx="500" ry="170"
          stroke="#4DA0B2" strokeOpacity="0.15" strokeWidth="1.5"
          strokeDasharray="4 10"
          transform="rotate(12 1250 200)"
        />

        {/* Planeta principal com anel (canto inferior direito) */}
        <circle cx="1080" cy="720" r="58" fill="#467782" fillOpacity="0.2" stroke="#6BB6C7" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="1062" cy="702" r="14" fill="#6BB6C7" fillOpacity="0.12" />
        <ellipse
          cx="1080" cy="720" rx="100" ry="26"
          stroke="#6BB6C7" strokeOpacity="0.45" strokeWidth="1.5"
          transform="rotate(-18 1080 720)"
        />

        {/* Planetas menores */}
        <circle cx="1245" cy="185" r="17" fill="#4DA0B2" fillOpacity="0.25" stroke="#6BB6C7" strokeOpacity="0.4" strokeWidth="1.5" />
        <circle cx="780" cy="180" r="9" fill="#467782" fillOpacity="0.3" stroke="#6BB6C7" strokeOpacity="0.3" strokeWidth="1.5" />
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
        className="absolute right-[2%] top-1/2 -translate-y-1/2 text-[20rem] lg:text-[26rem] font-bold text-white/[0.03] leading-none tracking-tighter select-none hidden md:block"
      >
        404
      </span>

      {/* Gradiente sutil */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 45%, rgba(70, 119, 130, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* === CONTEÚDO: à esquerda === */}
      <div className="relative z-10 max-w-xl">
        <div className="w-24 h-24 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-3xl flex items-center justify-center shadow-lg shadow-[#467782]/30 mb-10">
          <Telescope className="w-12 h-12 text-white" />
        </div>

        <p className="font-mono text-xs text-[#467782] tracking-[0.35em] mb-4">
          ERR 404 // SINAL PERDIDO
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-5">
          Houston, temos um problema.
        </h1>

        <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-md">
          Apontamos todos os nossos telescópios, mas esta página está fora do
          campo de observação. É possível que o endereço tenha mudado de órbita, ou que nunca tenha existido.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#467782] to-[#3D6A75] hover:from-[#4DA0B2] hover:to-[#467782] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a base
        </Link>
      </div>
    </main>
  );
}