import { requireAuth } from "@/lib/auth";
import { PageHero } from "@/components/ui/PageHero";

export default async function MatmakerPage() {
    const user = await requireAuth();

    return (
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <PageHero
          title="MatMaker"
          description="Crie matrizes origem–destino."
        />
      </main>
    );
}