"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/clients";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { NativMark } from "@/components/ui/NativMark";

export default function LoginPage() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const supabase = createClient();

  const handleMicrosoftLogin = async () => {
    setIsRedirecting(true);
    await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        scopes: "openid email profile User.Read",
        queryParams: {
          prompt: "select_account",
        },
      },
    });
  };

  const handleGoogleLogin = async () => {
    setIsRedirecting(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          prompt: "select_account",
        },
      },
    });
  };

  if (isRedirecting) {
    return <LoadingScreen message="Conectando..." />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Lado esquerdo — Branding */}
      <div className="relative hidden flex-col justify-between overflow-hidden p-12 lg:flex lg:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-raised via-base to-base" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(70, 119, 130, 0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-fg-subtle transition-colors hover:text-accent-fg"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Nativ
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <NativMark className="mb-8 h-16 w-16 shadow-lg shadow-accent/20" />
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-fg-strong">Nativ</h1>
          <p className="text-lg leading-relaxed text-fg-muted">
            Sistema integrado de inteligência analítica para infraestrutura e transporte multimodal.
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-xs text-fg-faint">
            © {new Date().getFullYear()} GRAF Infra Consulting
          </p>
        </div>
      </div>

      {/* Lado direito — Formulário */}
      <div className="relative flex w-full items-center justify-center p-6 lg:w-1/2">
        <div className="absolute inset-0 bg-base" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 60%, rgba(70, 119, 130, 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-md">
          <div className="mb-8 flex items-center justify-center lg:hidden">
            <NativMark className="h-12 w-12" />
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-fg-strong">
                Bem-vindo de volta
              </h2>
              <p className="mt-2 text-sm text-fg-subtle">
                Acesse com sua conta Google ou Microsoft
              </p>
            </div>
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="mb-5 flex w-full items-center justify-center gap-3 rounded-xl border border-overlay/[0.08] bg-base/60 px-5 py-4 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-overlay/[0.12] hover:bg-base/80"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Entrar com Google
            </button>

            <button
              onClick={handleMicrosoftLogin}
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-overlay/[0.08] bg-base/60 px-5 py-4 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-overlay/[0.12] hover:bg-base/80"
            >
              <svg className="h-4 w-4" viewBox="0 0 21 21" fill="none">
                <path d="M1 1h9v9H1V1z" fill="#f25022" />
                <path d="M1 11h9v9H1v-9z" fill="#00a4ef" />
                <path d="M11 1h9v9h-9V1z" fill="#7fba00" />
                <path d="M11 11h9v9h-9v-9z" fill="#ffb900" />
              </svg>
              Entrar com Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
