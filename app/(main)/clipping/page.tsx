import { requireAuth } from "@/lib/auth";
import { PageHero } from "@/components/ui/PageHero";

export default async function ClippingPage() {
  const user = await requireAuth();

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
      <PageHero title="Clipping" description="Notícias - Setor de Infraestrutura (via RSS)" />
    </main>
  );
}
