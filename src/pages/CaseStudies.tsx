import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { caseStudies } from "@/content";

export default function CaseStudies() {
  return (
    <Layout>
      <section className="container-narrow py-20">
        <h1 className="mb-6">Case Studies</h1>
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
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
