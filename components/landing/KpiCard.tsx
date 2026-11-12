"use client";

interface KpiCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
}

export default function KpiCard({ label, value, delta, deltaPositive = true }: KpiCardProps) {
  return (
    <div className="glass-card group rounded-xl p-5 text-center transition-all duration-300 hover:border-[#467782]/30 hover:shadow-[0_0_30px_-5px_rgba(70,119,130,0.15)]">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#64748B]">{label}</p>
      <p className="text-3xl font-bold tracking-tight text-white">{value}</p>
      {delta && (
        <p
          className={`mt-2 text-xs font-semibold ${deltaPositive ? "text-[#6BB6C7]" : "text-red-400"}`}
        >
          {deltaPositive ? "▲ " : "▼ "}
          {delta}
        </p>
      )}
    </div>
  );
}
