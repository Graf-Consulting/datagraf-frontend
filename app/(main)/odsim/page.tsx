import { requireAuth } from "@/lib/auth";
import { MapPin, BookOpen } from "lucide-react";
import Link from "next/link";

export default async function ODSimPage() {
  const user = await requireAuth();

  const tools = [
    {
      title: "Simulador",
      description: "Crie e execute simulações de transporte multimodal com dados reais.",
      icon: MapPin,
      href: "/odsim/simulator/",
      color: "from-[#467782] to-[#3D6A75]",
    },
    {
      title: "Histórico",
      description: "Acesse e gerencie suas simulações anteriores.",
      icon: BookOpen,
      href: "/odsim/history/",
      color: "from-[#4DA0B2] to-[#467782]",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      <section className="glass-accent rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">ODSim</h1>
        <p className="text-[#94A3B8]">
          Ferramenta de simulação de transporte multimodal.
        </p>
      </section>

      {/*Cards*/}
       <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className="group block bg-[#12151C]/40 backdrop-blur-md border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:bg-[#12151C]/70 hover:border-[#467782]/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            <div className="p-3 bg-[#467782]/10 rounded-xl w-fit mb-4 group-hover:bg-[#467782]/20 transition-colors">
              <tool.icon className="w-6 h-6 text-[#6BB6C7]" />
            </div>
            <h3 className="font-semibold text-[#E2E8F0] text-lg mb-1 group-hover:text-white transition-colors">
              {tool.title}
            </h3>
            <p className="text-sm text-[#64748B]">
              {tool.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}