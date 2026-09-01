import { requireAuth } from "@/lib/auth";

export default async function MatmakerPage() {
    const user = await requireAuth();
    
    return (
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <section className="glass-accent rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Clipping
          </h1>
          <p className="text-[#94A3B8] max-w-2xl text-[15px] leading-relaxed">
            Notícias - Setor de Infraestrutura (via RSS)
          </p>
        </section>
      </main>
    );
}