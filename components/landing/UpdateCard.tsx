"use client";

interface UpdateCardProps {
  title: string;
  date: string;
  description: string;
  tag?: string;
}

export default function UpdateCard({ title, date, description, tag }: UpdateCardProps) {
  return (
    <div className="rounded-xl border border-overlay/[0.04] bg-surface/30 p-5 transition-all duration-300 hover:border-accent/15 hover:bg-surface/60">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-fg-faint">{date}</span>
        {tag && (
          <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-fg">
            {tag}
          </span>
        )}
      </div>
      <h4 className="mb-1.5 font-semibold text-fg">{title}</h4>
      <p className="text-sm leading-relaxed text-fg-subtle">{description}</p>
    </div>
  );
}
