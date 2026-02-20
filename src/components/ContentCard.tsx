import { Link } from "react-router-dom";
import { formatDate, calculateReadingTime, type ContentItem } from "@/lib/content";
import { Lock } from "lucide-react";

interface ContentCardProps {
  item: ContentItem;
  basePath: string;
  showReadingTime?: boolean;
  titleHoverClass?: string;
}

export function ContentCard({
  item,
  basePath,
  showReadingTime = false,
  titleHoverClass = "group-hover:text-foreground",
}: ContentCardProps) {
  const readingTime = calculateReadingTime(item.body);

  return (
    <article className="group">
      <Link
        to={item.meta.externalUrl || `${basePath}/${item.slug}`}
        className="block no-underline -mx-4 px-4 py-4 rounded-xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-muted-foreground/80">
            {item.meta.period ? (
              <span className="font-medium text-foreground/80">{item.meta.period}</span>
            ) : item.meta.date ? (
              <time dateTime={item.meta.date}>{formatDate(item.meta.date)}</time>
            ) : null}
            {(item.meta.period || item.meta.date) && showReadingTime && <span>·</span>}
            {showReadingTime && <span>{readingTime} min read</span>}
            {item.meta.protected && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium uppercase tracking-wider ml-auto">
                <Lock size={10} />
                Protected
              </span>
            )}
          </div>
          <h3 className={`text-foreground ${titleHoverClass} transition-colors group-hover:dark:text-white group-hover:text-black`}>
            {item.meta.title}
          </h3>
          {item.meta.summary && (
            <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-muted-foreground/90">
              {item.meta.summary}
            </p>
          )}

        </div>
      </Link>
    </article>
  );
}
