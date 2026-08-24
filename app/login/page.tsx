// app/login/page.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com Auth.js / backend
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo — Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden">
        {/* Fundo com gradiente institucional */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#151B26] via-[#0E0E0E] to-[#0E0E0E]" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(70, 119, 130, 0.15) 0%, transparent 70%)"
          }}
        />
        
        {/* Conteúdo */}
        <div className="relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#6BB6C7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Observatório
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-2xl flex items-center justify-center shadow-lg shadow-[#467782]/20 mb-8">
            <span className="text-white font-bold text-2xl">OD</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
            Observatório de Dados
          </h1>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Sistema integrado de inteligência analítica para infraestrutura e transporte multimodal.
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} GRAF Infra Consulting. Acesso restrito a colaboradores autorizados.
          </p>
        </div>
      </div>

      {/* Lado direito — Formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 bg-[#0E0E0E]" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 80% 60%, rgba(70, 119, 130, 0.08) 0%, transparent 70%)"
          }}
        />

        <div className="relative z-10 w-full max-w-md">
          {/* Mobile: header */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-xl flex items-center justify-center shadow-lg shadow-[#467782]/20">
              <span className="text-white font-bold text-lg">OD</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white tracking-tight">Bem-vindo de volta</h2>
              <p className="text-sm text-[#64748B] mt-2">
                Entre com suas credenciais para acessar o sistema
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8] mb-2">
                  E-mail corporativo
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.nome@grafconsulting.com.br"
                  className="w-full px-4 py-3 bg-[#0E0E0E]/60 border border-white/[0.08] rounded-lg text-[#E2E8F0] placeholder-[#475569] text-sm focus:outline-none focus:border-[#467782]/50 focus:ring-2 focus:ring-[#467782]/20 transition-all"
                  required
                />
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#94A3B8] mb-2">
                  Senha
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 bg-[#0E0E0E]/60 border border-white/[0.08] rounded-lg text-[#E2E8F0] placeholder-[#475569] text-sm focus:outline-none focus:border-[#467782]/50 focus:ring-2 focus:ring-[#467782]/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#475569] hover:text-[#94A3B8] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Esqueci a senha */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/[0.08] bg-[#0E0E0E]/60 text-[#467782] focus:ring-[#467782]/20"
                  />
                  <span className="text-xs text-[#64748B]">Lembrar-me</span>
                </label>
                <Link 
                  href="#" 
                  className="text-xs text-[#6BB6C7] hover:text-[#98CDD9] transition-colors"
                >
                  Esqueci a senha
                </Link>
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full relative inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white rounded-lg transition-all duration-300 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#467782] to-[#3D6A75] group-hover:from-[#4DA0B2] group-hover:to-[#467782] transition-all duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#467782]/20 blur-xl" />
                <span className="relative flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Entrar no sistema
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 text-xs text-[#475569] bg-[#12151C]/60">ou</span>
              </div>
            </div>

            {/* Login com Microsoft */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-[#0E0E0E]/60 border border-white/[0.08] rounded-lg text-sm text-[#E2E8F0] hover:bg-[#0E0E0E]/80 hover:border-white/[0.12] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 21 21" fill="none">
                <path d="M1 1h9v9H1V1z" fill="#f25022"/>
                <path d="M1 11h9v9H1v-9z" fill="#00a4ef"/>
                <path d="M11 1h9v9h-9V1z" fill="#7fba00"/>
                <path d="M11 11h9v9h-9v-9z" fill="#ffb900"/>
              </svg>
              Entrar com Microsoft
            </button>
          </div>

          {/* Mobile: footer */}
          <div className="lg:hidden mt-8 text-center">
            <p className="text-xs text-[#475569]">
              © {new Date().getFullYear()} GRAF Infra Consulting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}