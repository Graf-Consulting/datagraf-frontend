"use client";

interface MetricCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
}

export default function MetricCard({ label, value, delta, deltaPositive = true }: MetricCardProps) {
  return (
    <div className="glass-card rounded-xl p-5 text-center transition-all duration-300 hover:border-[#467782]/30 hover:shadow-[0_0_30px_-5px_rgba(70,119,130,0.15)] group">
      <p className="text-xs text-[#64748B] font-medium mb-2 uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
      {delta && (
        <p className={`text-xs font-semibold mt-2 ${deltaPositive ? "text-[#6BB6C7]" : "text-red-400"}`}>
          {deltaPositive ? "▲ " : "▼ "}{delta}
        </p>
      )}
    </div>
  );
}