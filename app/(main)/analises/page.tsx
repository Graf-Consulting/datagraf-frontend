import { PageHero } from "@/components/ui/PageHero";
import { LinkCard } from "@/components/ui/LinkCard";
import { analises } from "@/lib/analises";

export default function AnalisesPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-8">
      <PageHero
        title="Análises"
        description="Painéis interativos e relatórios técnicos desenvolvidos pela GRAF. 
          Explore dados públicos de infraestrutura e transporte multimodal."
      />
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-fg-strong">Painéis disponíveis</h2>
          <span className="font-mono text-xs text-fg-subtle">{analises.length} painéis</span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {analises.map((a) => (
            <LinkCard
              key={a.slug}
              href={`/analises/${a.slug}`}
              title={a.title}
              description={a.description}
              icon={a.icon}
              tags={a.tags}
              meta={a.updatedAt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
