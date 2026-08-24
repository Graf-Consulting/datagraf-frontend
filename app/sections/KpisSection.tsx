"use client";

import KpiCard from "../components/KpiCard";

const kpis = [
  { label: "Registros integrados", value: "15m+", delta: "5", deltaPositive: true },
  { label: "Fontes de dados", value: "6", delta: "1", deltaPositive: true },
  { label: "Atualizações contínua", value: "24h", delta: "5", deltaPositive: true },
];

export default function KpisSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}