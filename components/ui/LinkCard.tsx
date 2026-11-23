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
    "group block bg-surface/40 border border-overlay/[0.04] rounded-xl p-6 transition-all duration-300 hover:bg-surface/70 hover:border-accent/30 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5";

  const content = (
    <>
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-xl bg-accent/10 p-3 transition-colors duration-300 group-hover:bg-accent/20">
          <Icon className="h-6 w-6 text-accent-fg" />
        </div>
        {external ? (
          <ExternalLink className="h-5 w-5 text-fg-faint transition-colors duration-300 group-hover:text-accent-fg" />
        ) : (
          <ArrowRight className="h-5 w-5 text-fg-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent-fg" />
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-fg transition-colors duration-300 group-hover:text-fg-strong">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-fg-subtle transition-colors duration-300 group-hover:text-fg-muted">
        {description}
      </p>

      {(tags || meta) && (
        <div className="flex items-center justify-between border-t border-overlay/[0.04] pt-4">
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
          {meta && <span className="text-[10px] font-medium text-fg-faint">{meta}</span>}
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
