import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { getAll } from "@/lib/content";

export default function CaseStudies() {
  const caseStudies = getAll("case-studies");

  return (
    <Layout>
      <section className="container-narrow py-20">
        <h1 className="mb-6">
          <span className="inline-block text-sm font-sans font-medium tracking-widest uppercase bg-white dark:bg-black/70 dark:backdrop-blur-xl text-black dark:text-white px-4 py-1.5 rounded-full shadow-sm">Case Studies</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-16">
          Selected work demonstrating strategic design leadership, systems thinking,
          and impact at scale. These aren't portfolio pieces—they're stories about
          decisions, trade-offs, and learning.
        </p>

        <div className="space-y-16">
          {caseStudies.map((item) => (
            <ContentCard
              key={item.slug}
              item={item}
              basePath="/case-studies"
              titleHoverClass="group-hover:text-foreground"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
