import { requireAuth } from "@/lib/auth";
import { PageHero } from "@/components/ui/PageHero";

export default async function MatmakerPage() {
  const user = await requireAuth();

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
      <PageHero title="MatMaker" description="Crie matrizes origem–destino." />
    </main>
  );
}
