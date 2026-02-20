import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { getAll } from "@/lib/content";

function getFeaturedOrRecent<T>(items: T[], featured: (i: T) => boolean, take: number): T[] {
  const filtered = items.filter(featured);
  if (filtered.length > 0) return filtered.slice(0, take);
  return items.slice(0, take);
}

const allCaseStudies = getAll("case-studies");
const allWriting = getAll("writing");
const featuredCaseStudies = getFeaturedOrRecent(allCaseStudies, (i) => !!i.meta.featured, 5);
const featuredWriting = getFeaturedOrRecent(allWriting, (i) => !!i.meta.featured, 2);

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-narrow py-20 md:py-32">

        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          I lead teams that build products at scale. Twenty years of experience
          spanning hands-on crafting, design systems, research operations, and
          organisational design.
        </p>
      </section>

      {/* Current Role */}
      <section className="container-narrow pb-20">
        <div className="border-t border-border pt-12">
          <h2 className="inline-block text-sm font-sans font-medium tracking-widest uppercase bg-white dark:bg-black/70 dark:backdrop-blur-xl text-black dark:text-white px-4 py-1.5 rounded-full mb-6 shadow-sm">Currently</h2>
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
            <h2 className="inline-block text-sm font-sans font-medium tracking-widest uppercase bg-white dark:bg-black/70 dark:backdrop-blur-xl text-black dark:text-white px-4 py-1.5 rounded-full shadow-sm">Selected Work</h2>
            <Link
              to="/case-studies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-12">
            {featuredCaseStudies.slice(0, 5).map((item) => (
              <ContentCard
                key={item.slug}
                item={item}
                basePath="/case-studies"
                titleHoverClass="group-hover:text-foreground"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Writing */}
      <section className="container-narrow pb-20">
        <div className="border-t border-border pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="inline-block text-sm font-sans font-medium tracking-widest uppercase bg-white dark:bg-black/70 dark:backdrop-blur-xl text-black dark:text-white px-4 py-1.5 rounded-full shadow-sm">Recent Writing</h2>
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
                titleHoverClass="group-hover:text-foreground"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
