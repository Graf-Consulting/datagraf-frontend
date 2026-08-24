"use client";

import ModuleCard from "../components/ModuleCard";
import { Search, BarChart3, LineChart } from "lucide-react";

const modules = [
  {
    title: "Simulação de Transporte",
    description: "Modele cenários de transporte multimodal combinando rotas marítimas, rodoviárias e ferroviárias para otimização logística.",
    icon: Search,
    href: "#",
  },
  {
    title: "Análises Estatísticas",
    description: "Explore dados de ANTAQ, ANTT e ComexStat com ferramentas estatísticas avançadas e visualizações interativas.",
    icon: BarChart3,
    href: "#",
  },
  {
    title: "Insights e Visualizações",
    description: "Dashboards dinâmicos com gráficos interativos para identificar tendências e padrões nos dados de transporte.",
    icon: LineChart,
    href: "#",
  },
];

export default function ModulesSection() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#F1F5F9] tracking-tight">Módulos do sistema</h2>
        <p className="text-[#64748B] mt-2 text-[15px]">Explore as principais funcionalidades do Observatório</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {modules.map((mod) => (
          <ModuleCard key={mod.title} {...mod} />
        ))}
      </div>
    </section>
  );
}