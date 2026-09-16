import { requireAuth } from "@/lib/auth";
import { Moon, Sun, Monitor, User, Bell, Globe } from "lucide-react";

function SoonBadge() {
  return (
    <span className="text-[10px] px-2 py-0.5 bg-[#467782]/10 text-[#6BB6C7] rounded font-medium border border-[#467782]/20">
      Em breve
    </span>
  );
}

function SettingRow({
  icon: Icon,
  title,
  description,
  control,
  disabled = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  control: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-5 border-b border-white/[0.04] last:border-0 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="p-2.5 bg-[#467782]/10 rounded-lg shrink-0">
          <Icon className="w-5 h-5 text-[#6BB6C7]" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#E2E8F0] flex items-center gap-2">
            {title}
            {disabled && <SoonBadge />}
          </p>
          <p className="text-xs text-[#64748B] mt-0.5">{description}</p>
        </div>
      </div>
      <div className={disabled ? "cursor-not-allowed pointer-events-none" : ""}>
        {control}
      </div>
    </div>
  );
}

// Toggle desabilitado (visual apenas)
function FakeToggle({ on = false }: { on?: boolean }) {
  return (
    <div
      className={`w-11 h-6 rounded-full relative transition-colors ${
        on ? "bg-[#467782]" : "bg-[#1C2536]"
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
          on ? "right-1 bg-white" : "left-1 bg-[#475569]"
        }`}
      />
    </div>
  );
}

export default async function ConfiguracoesPage() {
  const claims = await requireAuth();
  const email = claims.email ?? "";
  const fullName = (claims.user_metadata as { full_name?: string })?.full_name;
  const displayName = fullName || email;
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <main className="max-w-3xl mx-auto px-4 pt-8 pb-16 space-y-8">
      {/* Hero */}
      <section className="glass-accent rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
          Configurações
        </h1>
        <p className="text-[#94A3B8] text-[15px]">
          Gerencie sua conta e preferências da plataforma.
        </p>
      </section>

      {/* Conta */}
      <section className="glass-card rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-[#F1F5F9] mb-2">Conta</h2>
        <div className="flex items-center gap-4 py-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xl">{initial}</span>
          </div>
          <div className="min-w-0">
            <p className="text-[#E2E8F0] font-medium truncate">{displayName}</p>
            <p className="text-sm text-[#64748B] truncate">{email}</p>
          </div>
        </div>
        <p className="text-xs text-[#475569] border-t border-white/[0.04] pt-4">
          As informações da conta são gerenciadas pelo provedor de login
          (Google ou Microsoft).
        </p>
      </section>

      {/* Aparência */}
      <section className="glass-card rounded-2xl px-6 md:px-8 py-2">
        <h2 className="text-lg font-semibold text-[#F1F5F9] pt-5">Aparência</h2>
        <SettingRow
          icon={Moon}
          title="Tema"
          description="Alterne entre os temas claro e escuro da plataforma."
          disabled
          control={
            <div className="flex items-center gap-1 p-1 bg-[#0E0E0E]/60 border border-white/[0.08] rounded-lg">
              <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-[#467782]/20 text-white">
                <Moon className="w-3.5 h-3.5" />
                Escuro
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#475569]">
                <Sun className="w-3.5 h-3.5" />
                Claro
              </span>
              <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#475569]">
                <Monitor className="w-3.5 h-3.5" />
                Sistema
              </span>
            </div>
          }
        />
      </section>

      {/* Notificações */}
      <section className="glass-card rounded-2xl px-6 md:px-8 py-2">
        <h2 className="text-lg font-semibold text-[#F1F5F9] pt-5">
          Notificações
        </h2>
        <SettingRow
          icon={Bell}
          title="Novos relatórios"
          description="Receba um e-mail quando um novo relatório for publicado."
          disabled
          control={<FakeToggle on />}
        />
        <SettingRow
          icon={User}
          title="Atualizações da conta"
          description="Avisos sobre segurança e alterações de acesso."
          disabled
          control={<FakeToggle on />}
        />
      </section>

      {/* Preferências */}
      <section className="glass-card rounded-2xl px-6 md:px-8 py-2">
        <h2 className="text-lg font-semibold text-[#F1F5F9] pt-5">
          Preferências
        </h2>
        <SettingRow
          icon={Globe}
          title="Idioma"
          description="Idioma da interface da plataforma."
          disabled
          control={
            <span className="text-xs text-[#94A3B8] px-3 py-1.5 bg-[#0E0E0E]/60 border border-white/[0.08] rounded-lg">
              Português (Brasil)
            </span>
          }
        />
      </section>

      <p className="text-center text-xs text-[#475569]">
        Observatório de Dados · versão 0.1.0
      </p>
    </main>
  );
}