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

export function LinkCard({
  href,
  title,
  description,
  icon: Icon,
  tags,
  meta,
  external = false,
}: LinkCardProps) {
  const className =
    "group block bg-[#12151C]/40 backdrop-blur-md border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:bg-[#12151C]/70 hover:border-[#467782]/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5";

  const content = (
    <>
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-xl bg-[#467782]/10 p-3 transition-colors duration-300 group-hover:bg-[#467782]/20">
          <Icon className="h-6 w-6 text-[#6BB6C7]" />
        </div>
        {external ? (
          <ExternalLink className="h-5 w-5 text-[#475569] transition-colors duration-300 group-hover:text-[#6BB6C7]" />
        ) : (
          <ArrowRight className="h-5 w-5 text-[#475569] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#6BB6C7]" />
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-[#E2E8F0] transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-[#64748B] transition-colors duration-300 group-hover:text-[#94A3B8]">
        {description}
      </p>

      {(tags || meta) && (
        <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
          {meta && <span className="text-[10px] font-medium text-[#475569]">{meta}</span>}
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
