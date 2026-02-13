// Markdown content: loaded via glob (no static .md imports so app always loads), parsed with gray-matter

import matter from "gray-matter";

export type ContentType = "writing" | "case-studies";

export interface ContentMeta {
  title: string;
  summary?: string;
  date?: string;
  tags?: string[];
  featured?: boolean;
  role?: string;
  period?: string;
}

export interface ContentItem {
  type: ContentType;
  slug: string;
  meta: ContentMeta;
  body: string;
}

function slugFromPath(filePath: string): string {
  const normalized = filePath.replace(/\\/g, "/");
  const filename = normalized.split("/").pop() ?? filePath;
  return filename.replace(/\.md$/i, "");
}

function parseRaw(type: ContentType, raw: string, slug: string): ContentItem {
  const { data, content } = matter(raw);
  const meta: ContentMeta = {
    title: (data.title as string) ?? "",
    summary: data.summary as string | undefined,
    date: data.date as string | undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
    featured:
      data.featured === true ||
      (typeof data.featured === "string" && data.featured.toLowerCase() === "true"),
    role: data.role as string | undefined,
    period: data.period as string | undefined,
  };
  return { type, slug, meta, body: (content ?? "").trim() };
}

function loadFromGlob(
  type: ContentType,
  glob: Record<string, unknown>
): ContentItem[] {
  const items: ContentItem[] = [];
  for (const [path, value] of Object.entries(glob)) {
    const raw =
      typeof value === "string"
        ? value
        : value != null && typeof value === "object" && "default" in value
          ? (value as { default: string }).default
          : null;
    if (typeof raw !== "string" || !raw.trim()) continue;
    try {
      items.push(parseRaw(type, raw, slugFromPath(path)));
    } catch {
      // skip bad file
    }
  }
  return items;
}

function sortItems(items: ContentItem[]): ContentItem[] {
  return [...items].sort((a, b) => {
    const aDate = a.meta.date ? new Date(a.meta.date).getTime() : 0;
    const bDate = b.meta.date ? new Date(b.meta.date).getTime() : 0;
    if (bDate !== aDate) return bDate - aDate;
    return (a.meta.title ?? "").localeCompare(b.meta.title ?? "");
  });
}

// Try glob from src first, then project-root alias; fallback to inline so content always shows
let writingItems: ContentItem[] = [];
let caseStudyItems: ContentItem[] = [];

function getFallbackWriting(): ContentItem[] {
  return sortItems([
    parseRaw("writing", `---
title: Why design systems fail when teams grow
summary: Design systems fail due to unclear ownership, not visual inconsistency.
date: 2026-02-05
tags: [design-systems, scale]
featured: true
---
Design systems fail due to unclear ownership, not visual inconsistency.`, "why-design-systems-fail"),
    parseRaw("writing", `---
title: Design leadership is mostly about removing uncertainty
summary: Most organisations struggle not from lack of ideas, but from lack of confidence.
date: 2026-02-05
tags: [design-leadership, decision-making]
featured: true
---
Most organisations struggle not from lack of ideas, but from lack of confidence.`, "design-leadership-removing-uncertainty"),
  ]);
}

function getFallbackCaseStudies(): ContentItem[] {
  return sortItems([
    parseRaw("case-studies", `---
title: Barclays
summary: Unlocking value from a high-traffic but under-optimised product surface in a regulated enterprise.
role: UX & Product Design Specialist
period: 2020–2021
tags: [enterprise, financial-services, leadership]
featured: true
---
## Context
Millions of daily users, complex constraints, and fragmented ownership.

## Outcomes
Clearer vision, stronger alignment, foundations for optimisation.`, "barclays"),
    parseRaw("case-studies", `---
title: NHS App
summary: Leading design on a nationally critical digital service.
role: Head of Product Design
period: 2018–2020
tags: [healthcare, accessibility, leadership]
featured: true
---
## Context
The NHS App provides UK citizens with secure access to NHS services.`, "nhs-app"),
  ]);
}

try {
  const writingGlob = import.meta.glob("../content/writing/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, unknown>;
  const caseStudiesGlob = import.meta.glob("../content/case-studies/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, unknown>;

  const w = loadFromGlob("writing", writingGlob);
  const c = loadFromGlob("case-studies", caseStudiesGlob);

  writingItems = w.length > 0 ? sortItems(w) : getFallbackWriting();
  caseStudyItems = c.length > 0 ? sortItems(c) : getFallbackCaseStudies();
} catch {
  writingItems = getFallbackWriting();
  caseStudyItems = getFallbackCaseStudies();
}

export function getAll(type: ContentType): ContentItem[] {
  return type === "writing" ? writingItems : caseStudyItems;
}

export function getBySlug(type: ContentType, slug: string): ContentItem | null {
  const items = type === "writing" ? writingItems : caseStudyItems;
  return items.find((item) => item.slug === slug) ?? null;
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
