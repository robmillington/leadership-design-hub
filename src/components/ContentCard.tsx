import { Link } from "react-router-dom";
import { formatDate, calculateReadingTime } from "@/lib/content";
import { ContentItem } from "@/lib/content";

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
  titleHoverClass = "group-hover:text-primary",
}: ContentCardProps) {
  const readingTime = calculateReadingTime(item.content);

  return (
    <article className="group">
      <Link
        to={`${basePath}/${item.slug}`}
        className="block no-underline"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={item.meta.date}>{formatDate(item.meta.date)}</time>
            {showReadingTime && (
              <>
                <span>·</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>
          <h3 className={`text-foreground ${titleHoverClass} transition-colors`}>
            {item.meta.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {item.meta.summary}
          </p>
          {item.meta.tags && item.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {item.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
