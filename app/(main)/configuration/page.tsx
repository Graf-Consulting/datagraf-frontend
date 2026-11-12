import { requireAuth } from "@/lib/auth";
import { Moon, Sun, Monitor, User, Bell, Globe } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";

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
      className={`flex items-center justify-between gap-4 border-b border-white/[0.04] py-5 last:border-0 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0 rounded-lg bg-[#467782]/10 p-2.5">
          <Icon className="h-5 w-5 text-[#6BB6C7]" />
        </div>
        <div>
          <p className="flex items-center gap-2 text-sm font-medium text-[#E2E8F0]">
            {title}
            {disabled && <Badge>Em breve</Badge>}
          </p>
          <p className="mt-0.5 text-xs text-[#64748B]">{description}</p>
        </div>
      </div>
      <div className={disabled ? "pointer-events-none cursor-not-allowed" : ""}>{control}</div>
    </div>
  );
}

// Toggle desabilitado (visual apenas)
function FakeToggle({ on = false }: { on?: boolean }) {
  return (
    <div
      className={`relative h-6 w-11 rounded-full transition-colors ${
        on ? "bg-[#467782]" : "bg-[#1C2536]"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full transition-all ${
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
    <main className="mx-auto max-w-3xl space-y-8 px-4 pb-16 pt-8">
      {/* Hero */}
      <PageHero
        title="Configurações"
        description="Gerencie sua conta e preferências da plataforma."
      />

      {/* Conta */}
      <section className="glass-card rounded-2xl p-6 md:p-8">
        <h2 className="mb-2 text-lg font-semibold text-[#F1F5F9]">Conta</h2>
        <div className="flex items-center gap-4 py-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4DA0B2] to-[#467782]">
            <span className="text-xl font-bold text-white">{initial}</span>
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium text-[#E2E8F0]">{displayName}</p>
            <p className="truncate text-sm text-[#64748B]">{email}</p>
          </div>
        </div>
        <p className="border-t border-white/[0.04] pt-4 text-xs text-[#475569]">
          As informações da conta são gerenciadas pelo provedor de login (Google ou Microsoft).
        </p>
      </section>

      {/* Aparência */}
      <section className="glass-card rounded-2xl px-6 py-2 md:px-8">
        <h2 className="pt-5 text-lg font-semibold text-[#F1F5F9]">Aparência</h2>
        <SettingRow
          icon={Moon}
          title="Tema"
          description="Alterne entre os temas claro e escuro da plataforma."
          disabled
          control={
            <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#0E0E0E]/60 p-1">
              <span className="flex items-center gap-1.5 rounded-md bg-[#467782]/20 px-3 py-1.5 text-xs text-white">
                <Moon className="h-3.5 w-3.5" />
                Escuro
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#475569]">
                <Sun className="h-3.5 w-3.5" />
                Claro
              </span>
              <span className="hidden items-center gap-1.5 px-3 py-1.5 text-xs text-[#475569] sm:flex">
                <Monitor className="h-3.5 w-3.5" />
                Sistema
              </span>
            </div>
          }
        />
      </section>

      {/* Notificações */}
      <section className="glass-card rounded-2xl px-6 py-2 md:px-8">
        <h2 className="pt-5 text-lg font-semibold text-[#F1F5F9]">Notificações</h2>
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
      <section className="glass-card rounded-2xl px-6 py-2 md:px-8">
        <h2 className="pt-5 text-lg font-semibold text-[#F1F5F9]">Preferências</h2>
        <SettingRow
          icon={Globe}
          title="Idioma"
          description="Idioma da interface da plataforma."
          disabled
          control={
            <span className="rounded-lg border border-white/[0.08] bg-[#0E0E0E]/60 px-3 py-1.5 text-xs text-[#94A3B8]">
              Português (Brasil)
            </span>
          }
        />
      </section>

      <p className="text-center text-xs text-[#475569]">
        Observatório de Dados · versão {process.env.NEXT_PUBLIC_APP_VERSION}
      </p>
    </main>
  );
}
