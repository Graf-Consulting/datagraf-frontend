import { requireAuth } from "@/lib/auth";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default async function HistoryPage() {
  await requireAuth();

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-8">
      <Link
        href="/odsim"
        className="-my-3 inline-flex items-center gap-2 py-3 text-sm text-fg-subtle transition-colors hover:text-accent-fg"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para ODSim
      </Link>

      <section className="glass-accent rounded-2xl p-8 text-center md:p-10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
          <BookOpen className="h-8 w-8 text-accent" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-fg-strong">Histórico</h1>
        <p className="mx-auto max-w-md text-fg-muted">Histórico de simulações em migração.</p>
      </section>
    </main>
  );
}
