import { requireAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default async function HistoryPage() {
  const user = await requireAuth();

  return (
    <main className="max-w-5xl mx-auto p-8 space-y-6">
      <Link
        href="/odsim/"
        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#6BB6C7] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para ODSim
      </Link>

      <section className="glass-accent rounded-2xl p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-[#467782]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-8 h-8 text-[#467782]" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Histórico</h1>
        <p className="text-[#94A3B8] max-w-md mx-auto">
          Histórico de simulações em migração.
        </p>
      </section>
    </main>
  );
}