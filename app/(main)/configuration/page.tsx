import { requireAuth } from "@/lib/auth";
import { Moon, User, Bell, Globe } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

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
      className={`flex items-center justify-between gap-4 border-b border-overlay/[0.04] py-5 last:border-0 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0 rounded-lg bg-accent/10 p-2.5">
          <Icon className="h-5 w-5 text-accent-fg" />
        </div>
        <div>
          <p className="flex items-center gap-2 text-sm font-medium text-fg">
            {title}
            {disabled && <Badge>Em breve</Badge>}
          </p>
          <p className="mt-0.5 text-xs text-fg-subtle">{description}</p>
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
        on ? "bg-accent" : "bg-surface-muted"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full transition-all ${
          on ? "right-1 bg-white" : "left-1 bg-fg-faint"
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
        <h2 className="mb-2 text-lg font-semibold text-fg-strong">Conta</h2>
        <div className="flex items-center gap-4 py-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-light to-accent">
            <span className="text-xl font-bold text-white">{initial}</span>
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium text-fg">{displayName}</p>
            <p className="truncate text-sm text-fg-subtle">{email}</p>
          </div>
        </div>
        <p className="border-t border-overlay/[0.04] pt-4 text-xs text-fg-faint">
          As informações da conta são gerenciadas pelo provedor de login (Google ou Microsoft).
        </p>
      </section>

      {/* Aparência */}
      <section className="glass-card rounded-2xl px-6 py-2 md:px-8">
        <h2 className="pt-5 text-lg font-semibold text-fg-strong">Aparência</h2>
        <SettingRow
          icon={Moon}
          title="Tema"
          description="Alterne entre os temas claro e escuro da plataforma."
          control={<ThemeSwitcher />}
        />
      </section>

      {/* Notificações */}
      <section className="glass-card rounded-2xl px-6 py-2 md:px-8">
        <h2 className="pt-5 text-lg font-semibold text-fg-strong">Notificações</h2>
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
        <h2 className="pt-5 text-lg font-semibold text-fg-strong">Preferências</h2>
        <SettingRow
          icon={Globe}
          title="Idioma"
          description="Idioma da interface da plataforma."
          disabled
          control={
            <span className="rounded-lg border border-overlay/[0.08] bg-base/60 px-3 py-1.5 text-xs text-fg-muted">
              Português (Brasil)
            </span>
          }
        />
      </section>

      <p className="text-center text-xs text-fg-faint">
        Nativ · versão {process.env.NEXT_PUBLIC_APP_VERSION}
      </p>
    </main>
  );
}
