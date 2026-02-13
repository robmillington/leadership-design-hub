import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Markdown } from "@/components/Markdown";
import { getBySlug, formatDate, calculateReadingTime } from "@/lib/content";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getBySlug("case-studies", slug) : undefined;

  if (!caseStudy) {
    return (
      <Layout>
        <section className="container-narrow py-20">
          <h1>Case study not found</h1>
          <p className="text-muted-foreground mt-4">
            <Link to="/case-studies">← Back to case studies</Link>
          </p>
        </section>
      </Layout>
    );
  }

  const readingTime = calculateReadingTime(caseStudy.body);

  return (
    <Layout>
      <article className="container-narrow py-20">
        {/* Header */}
        <header className="mb-12">
          <Link
            to="/case-studies"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to case studies
          </Link>

          <h1 className="mt-4 mb-6">{caseStudy.meta.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            {caseStudy.meta.date && (
              <>
                <time dateTime={caseStudy.meta.date}>
                  {formatDate(caseStudy.meta.date)}
                </time>
                <span>·</span>
              </>
            )}
            <span>{readingTime} min read</span>
            {caseStudy.meta.role && (
              <>
                <span>·</span>
                <span>{caseStudy.meta.role}</span>
              </>
            )}
          </div>

          {caseStudy.meta.summary && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {caseStudy.meta.summary}
            </p>
          )}


        </header>

        {/* Content */}
        <div className="border-t border-border pt-12">
          <Markdown content={caseStudy.body} />
        </div>
      </article>
    </Layout>
  );
}
