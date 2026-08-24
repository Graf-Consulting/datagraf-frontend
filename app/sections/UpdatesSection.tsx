"use client";

import UpdateCard from "../components/UpdateCard";
import { Puzzle, TrendingUp } from "lucide-react";

const updates = [
   {
    title: "Nova funcionalidade: Extrator de Dados",
    date: "21 Mai 2026",
    description: "Extraia dados da nossa base.",
    icon: Puzzle,
    tag: "Novidade",
  },
  {
    title: "Nova funcionalidade: MatMaker",
    date: "6 Jan 2026",
    description: "Crie matrizes OD com origens e destinos relevantes para um tipo específico de carga.",
    icon: Puzzle,
    tag: "Novidade",
  },
  {
    title: "Nova análise: Demurrage portuária",
    date: "6 Jan 2026",
    description: "Análise de custos e tempos de demurrage a partir dos dados de movimentação portuária.",
    icon: TrendingUp,
    tag: "Novidade",
  },
  {
    title: "Nova funcionalidade: Cálculo de transporte usando a Política Nacional de Pisos Mínimos do Transporte Rodoviário de Cargas",
    date: "25 Nov 2025",
    description: "Agora é possível calcular o custo do transporte usando a Política Nacional de Pisos Mínimos do Transporte Rodoviário de Cargas, PORTARIA Nº 3, DE 7 DE FEVEREIRO DE 2025.",
    icon: Puzzle,
    tag: "Novidade",
  },
];

export default function UpdatesSection() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#F1F5F9] tracking-tight">Atualizações Recentes</h2>
        <p className="text-[#64748B] mt-2 text-[15px]">Novidades e atualizações do Observatório</p>
      </div>
      <div className="space-y-4">
        {updates.map((up) => (
          <UpdateCard key={up.title} {...up} />
        ))}
      </div>
    </section>
  );
}