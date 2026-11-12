"use client";

interface UpdateCardProps {
  title: string;
  date: string;
  description: string;
  tag?: string;
}

export default function UpdateCard({ title, date, description, tag }: UpdateCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.04] bg-[#12151C]/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#467782]/15 hover:bg-[#12151C]/60">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-[#475569]">{date}</span>
        {tag && (
          <span className="rounded-full border border-[#467782]/20 bg-[#467782]/10 px-2.5 py-1 text-xs font-medium text-[#6BB6C7]">
            {tag}
          </span>
        )}
      </div>
      <h4 className="mb-1.5 font-semibold text-[#E2E8F0]">{title}</h4>
      <p className="text-sm leading-relaxed text-[#64748B]">{description}</p>
    </div>
  );
}
