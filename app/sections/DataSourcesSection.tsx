"use client";

import DataSourceCard from "../components/DataSourceCard";
import { Anchor, Truck, Globe, Package, FileText, Compass } from "lucide-react";

const sources = [
  {
    name: "ANTAQ",
    description: "Agência Nacional de Transportes Aquaviários",
    icon: Anchor,
    recordCount: "192.7M registros",
  },
  {
    name: "ANTT",
    description: "Agência Nacional de Transportes Terrestres",
    icon: Truck,
    recordCount: "8.1M registros",
  },
  {
    name: "Comex Stat",
    description: "Estatísticas de Comércio Exterior",
    icon: Globe,
    recordCount: "126.4M registros",
  },
  {
    name: "Conab",
    description: "Companhia Nacional de Abastecimento",
    icon: Package,
    recordCount: "8.9K registros",
  },
  {
    name: "Infra-SA",
    description: "Empresa pública de infraestrutura",
    icon: FileText,
    recordCount: "20.9M registros",
  },
  {
    name: "IBGE",
    description: "Dados socioeconômicos do Brasil",
    icon: Compass,
    recordCount: "20.9M registros",
  },
  {
    name: "IMO",
    description: "Organização Marítima Internacional",
    icon: Anchor,
    recordCount: "13.3K registros",
  },
];

export default function DataSourcesSection() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#F1F5F9] tracking-tight">Fontes de dados integradas</h2>
        <p className="text-[#64748B] mt-2 text-[15px]">Dados públicos governamentais consolidados</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sources.map((src) => (
          <DataSourceCard key={src.name} {...src} />
        ))}
      </div>
    </section>
  );
}