import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { featuredCaseStudies, featuredWriting } from "@/content";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-narrow py-20 md:py-32">
        <h1 className="mb-8">
          Head of Product Design
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          I lead design teams that build products at scale. Twenty years of experience 
          spanning hands-on craft, design systems, research operations, and 
          organisational design.
        </p>
      </section>

      {/* Current Role */}
      <section className="container-narrow pb-20">
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl mb-6">Currently</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Head of Product Design</strong> leading 
              a team of ~10 designers across multiple product squads. Responsible for 
              design systems, research operations, and the craft culture of the team.
            </p>
            <p>
              My focus is on building the conditions where good design happens—through 
              hiring, systems, rituals, and strategic direction—rather than doing the 
              design myself.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="container-narrow pb-20">
        <div className="border-t border-border pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl mb-0">Selected Work</h2>
            <Link
              to="/case-studies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-12">
            {featuredCaseStudies.slice(0, 3).map((item) => (
              <ContentCard
                key={item.slug}
                item={item}
                basePath="/case-studies"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Writing */}
      <section className="container-narrow pb-20">
        <div className="border-t border-border pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl mb-0">Recent Writing</h2>
            <Link
              to="/writing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-12">
            {featuredWriting.slice(0, 2).map((item) => (
              <ContentCard
                key={item.slug}
                item={item}
                basePath="/writing"
                showReadingTime
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
