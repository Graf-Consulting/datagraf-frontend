"use client";

interface UpdateCardProps {
  title: string;
  date: string;
  description: string;
  tag?: string;
}

export default function UpdateCard({ title, date, description, tag }: UpdateCardProps) {
  return (
    <div className="bg-[#12151C]/30 backdrop-blur-sm border border-white/[0.04] rounded-xl p-5 transition-all duration-300 hover:bg-[#12151C]/60 hover:border-[#467782]/15">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-[#475569] font-medium">{date}</span>
        {tag && (
          <span className="text-xs px-2.5 py-1 bg-[#467782]/10 text-[#6BB6C7] rounded-full font-medium border border-[#467782]/20">
            {tag}
          </span>
        )}
      </div>
      <h4 className="font-semibold text-[#E2E8F0] mb-1.5">{title}</h4>
      <p className="text-sm text-[#64748B] leading-relaxed">{description}</p>
    </div>
  );
}