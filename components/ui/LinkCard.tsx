import Link from "next/link";
import { ArrowRight, ExternalLink, type LucideIcon } from "lucide-react";
import { Badge } from "./Badge";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  meta?: string;
  external?: boolean;
}

export function LinkCard({ href, title, description, icon: Icon, tags, meta, external = false }: LinkCardProps) {
  const className =
    "group block bg-[#12151C]/40 backdrop-blur-md border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:bg-[#12151C]/70 hover:border-[#467782]/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5";

  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-[#467782]/10 rounded-xl group-hover:bg-[#467782]/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-[#6BB6C7]" />
        </div>
        {external ? (
          <ExternalLink className="w-5 h-5 text-[#475569] group-hover:text-[#6BB6C7] transition-colors duration-300" />
        ) : (
          <ArrowRight className="w-5 h-5 text-[#475569] group-hover:text-[#6BB6C7] group-hover:translate-x-0.5 transition-all duration-300" />
        )}
      </div>

      <h3 className="font-semibold text-[#E2E8F0] text-lg group-hover:text-white transition-colors duration-300 mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#64748B] leading-relaxed group-hover:text-[#94A3B8] transition-colors duration-300 mb-4">
        {description}
      </p>

      {(tags || meta) && (
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
          {tags && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
          {meta && <span className="text-[10px] text-[#475569] font-medium">{meta}</span>}
        </div>
      )}
    </>
  );

  // Convenção da plataforma: interno = Link (SPA), externo = aba nova
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}