// Content utilities for parsing markdown files with frontmatter
// This approach uses static imports for Vite compatibility

export interface ContentMeta {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  role?: string;
}

export interface ContentItem {
  slug: string;
  meta: ContentMeta;
  content: string;
}

// Parse frontmatter from markdown content
export function parseFrontmatter(fileContent: string): {
  meta: Record<string, unknown>;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { meta: {}, content: fileContent };
  }

  const frontmatterString = match[1];
  const content = match[2];

  // Simple YAML parser for frontmatter
  const meta: Record<string, unknown> = {};
  const lines = frontmatterString.split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: unknown = line.slice(colonIndex + 1).trim();

    // Handle quoted strings
    if (
      (value as string).startsWith('"') &&
      (value as string).endsWith('"')
    ) {
      value = (value as string).slice(1, -1);
    }

    // Handle arrays
    if ((value as string).startsWith("[") && (value as string).endsWith("]")) {
      const arrayContent = (value as string).slice(1, -1);
      value = arrayContent
        .split(",")
        .map((item) => item.trim().replace(/^["']|["']$/g, ""));
    }

    // Handle booleans
    if (value === "true") value = true;
    if (value === "false") value = false;

    meta[key] = value;
  }

  return { meta, content };
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Sort content by date (newest first)
export function sortByDate<T extends { meta: { date: string } }>(
  items: T[]
): T[] {
  return [...items].sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
}
