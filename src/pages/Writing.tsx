import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { writingPosts } from "@/content";

export default function Writing() {
  return (
    <Layout>
      <section className="container-narrow py-20">
        <h1 className="mb-6">Writing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-16">
          Reflections on design leadership, systems thinking, research operations, 
          and product strategy. Opinionated perspectives developed through two decades 
          of building products and teams.
        </p>

        <div className="space-y-16">
          {writingPosts.map((item) => (
            <ContentCard
              key={item.slug}
              item={item}
              basePath="/writing"
              showReadingTime
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
