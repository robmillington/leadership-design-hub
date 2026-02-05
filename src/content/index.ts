import { parseFrontmatter, ContentItem, ContentMeta, sortByDate } from "@/lib/content";

// Import case studies
import { content as scalingDesignSystems } from "./case-studies/scaling-design-systems";
import { content as researchOpsTransformation } from "./case-studies/research-ops-transformation";

// Import writing
import { content as leadingThroughAmbiguity } from "./writing/leading-through-ambiguity";
import { content as craftAtScale } from "./writing/craft-at-scale";

function parseContent(rawContent: string, slug: string): ContentItem {
  const { meta, content } = parseFrontmatter(rawContent);
  return {
    slug,
    meta: {
      title: (meta.title as string) || "",
      summary: (meta.summary as string) || "",
      date: (meta.date as string) || "",
      tags: (meta.tags as string[]) || [],
      featured: (meta.featured as boolean) || false,
      coverImage: meta.coverImage as string | undefined,
      role: meta.role as string | undefined,
    },
    content,
  };
}

// Parse all case studies
export const caseStudies: ContentItem[] = sortByDate([
  parseContent(scalingDesignSystems, "scaling-design-systems"),
  parseContent(researchOpsTransformation, "research-ops-transformation"),
]);

// Parse all writing
export const writingPosts: ContentItem[] = sortByDate([
  parseContent(leadingThroughAmbiguity, "leading-through-ambiguity"),
  parseContent(craftAtScale, "craft-at-scale"),
]);

// Get featured items
export const featuredCaseStudies = caseStudies.filter(
  (item) => item.meta.featured
);

export const featuredWriting = writingPosts.filter(
  (item) => item.meta.featured
);

// Get item by slug
export function getCaseStudyBySlug(slug: string): ContentItem | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

export function getWritingBySlug(slug: string): ContentItem | undefined {
  return writingPosts.find((item) => item.slug === slug);
}
