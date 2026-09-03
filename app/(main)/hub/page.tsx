'use client'

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/clients";
import { LogOut, User, BarChart3, Settings, FileText, Flame, FilePlus, Map, Lightbulb, BookOpen } from "lucide-react";
import Link from "next/link";
import AuthGuard from "@/app/components/AuthGuard";
import LoadingScreen from "@/app/components/LoadingScreen";

function HubContent() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingScreen message="Carregando..." />;

  const displayName = user.user_metadata?.full_name || user.email;

  const quickAccess = [
    { title: "Análises", description: "Acesse os painéis e relatórios técnicos.", icon: BarChart3, href: "/analises/" },
    { title: "Insights", description: "Análises aprofundadas e relatórios técnicos sobre infraestrutura e transporte multimodal.", icon: Lightbulb, href: "/insights/" },
    { title: "Simulações", description: "Cenários de transporte multimodal.", icon: Map, href: "/odsim/simulator/" },
    { title: "Histórico de Simulações", description: "Acesse e gerencie suas simulações anteriores.", icon: BookOpen, href: "/odsim/history/" },
    { title: "MatMaker", description: "Matrizes origem-destino.", icon: FilePlus, href: "/matmaker/" },
    { title: "Configurações", description: "Gerencie sua conta e preferências.", icon: Settings, href: "#" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 pt-8 pb-16 space-y-12">
      {/* Header do Hub */}
      <section className="glass-accent rounded-2xl p-8 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Olá, {displayName}!
            </h1>
            <p className="text-[#94A3B8] text-lg">
              Seja bem-vindo ao Observatório de Dados.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-2xl flex items-center justify-center shadow-lg shadow-[#467782]/20">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de acesso rápido */}
      <section>
        <h2 className="text-xl font-bold text-[#F1F5F9] tracking-tight mb-6">
          Acesso Rápido
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickAccess.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block bg-[#12151C]/40 backdrop-blur-md border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:bg-[#12151C]/70 hover:border-[#467782]/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              <div className="p-3 bg-[#467782]/10 rounded-xl w-fit mb-4 group-hover:bg-[#467782]/20 transition-colors">
                <item.icon className="w-6 h-6 text-[#6BB6C7]" />
              </div>
              <h3 className="font-semibold text-[#E2E8F0] text-lg mb-1 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#64748B]">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function HubPage() {
  return (
    <AuthGuard>
      <HubContent />
    </AuthGuard>
  )
}