import { requireAuth } from "@/lib/auth";
import { PageHero } from "@/components/PageHero";

export default async function ClippingPage() {
    const user = await requireAuth();
    
    return (
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <PageHero
          title="Clipping"
          description="Notícias - Setor de Infraestrutura (via RSS)"
        />
      </main>
    );
}