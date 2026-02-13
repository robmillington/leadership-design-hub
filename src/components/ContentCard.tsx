import { Link } from "react-router-dom";
import { formatDate, calculateReadingTime, type ContentItem } from "@/lib/content";

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
        to={`${basePath}/${item.slug}`}
        className="block no-underline -mx-4 px-4 py-4 rounded-xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-muted-foreground/80">
            {item.meta.date && (
              <time dateTime={item.meta.date}>{formatDate(item.meta.date)}</time>
            )}
            {item.meta.date && showReadingTime && <span>·</span>}
            {showReadingTime && <span>{readingTime} min read</span>}
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
