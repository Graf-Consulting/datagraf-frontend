"use client";

interface MetricCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
}

export default function MetricCard({ label, value, delta, deltaPositive = true }: MetricCardProps) {
  return (
    <div className="glass-card group rounded-xl p-5 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_-5px_rgba(70,119,130,0.15)]">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">{label}</p>
      <p className="text-3xl font-bold tracking-tight text-fg-strong">{value}</p>
      {delta && (
        <p
          className={`mt-2 text-xs font-semibold ${deltaPositive ? "text-accent-fg" : "text-danger"}`}
        >
          {deltaPositive ? "▲ " : "▼ "}
          {delta}
        </p>
      )}
    </div>
  );
}
