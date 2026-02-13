import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Markdown } from "@/components/Markdown";
import { getBySlug, formatDate, calculateReadingTime } from "@/lib/content";

export default function WritingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBySlug("writing", slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <section className="container-narrow py-20">
          <h1>Post not found</h1>
          <p className="text-muted-foreground mt-4">
            <Link to="/writing">← Back to writing</Link>
          </p>
        </section>
      </Layout>
    );
  }

  const readingTime = calculateReadingTime(post.body);

  return (
    <Layout>
      <article className="container-narrow py-20">
        {/* Header */}
        <header className="mb-12">
          <Link
            to="/writing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to writing
          </Link>
          
          <h1 className="mt-4 mb-6">{post.meta.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            {post.meta.date && (
              <>
                <time dateTime={post.meta.date}>
                  {formatDate(post.meta.date)}
                </time>
                <span>·</span>
              </>
            )}
            <span>{readingTime} min read</span>
          </div>

          {post.meta.summary && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.meta.summary}
            </p>
          )}

          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="border-t border-border pt-12">
          <Markdown content={post.body} />
        </div>
      </article>
    </Layout>
  );
}
