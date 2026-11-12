import { requireAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default async function HistoryPage() {
  const user = await requireAuth();

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-8">
      <Link
        href="/odsim/"
        className="inline-flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#6BB6C7]"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para ODSim
      </Link>

      <section className="glass-accent rounded-2xl p-8 text-center md:p-10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#467782]/10">
          <BookOpen className="h-8 w-8 text-[#467782]" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-white">Histórico</h1>
        <p className="mx-auto max-w-md text-[#94A3B8]">Histórico de simulações em migração.</p>
      </section>
    </main>
  );
}
