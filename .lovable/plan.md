

# Senior Head of Product Design Portfolio

## Overview
A clean, content-driven portfolio website that positions you as a strategic design leader with ~20 years of experience. Built as a fully exportable static site with React + Vite, using Markdown files for all content. No database, no auth, no platform lock-in.

---

## Site Architecture

### Pages & Navigation

**Home** (`/`)
- Positioning statement establishing seniority and scope
- Current role summary (Head of Product Design, ~10 person team, multi-squad, design systems, research ops)
- Featured case studies (3-4 selected works)
- Recent writing highlights
- Clear navigation to all sections

**Case Studies** (`/case-studies`)
- List view of all case studies with titles, summaries, and context tags
- Each case study is its own page (`/case-studies/[slug]`)
- Content structure per case study:
  - Context and constraints
  - The real problem (beyond the brief)
  - Your role and level of hands-on involvement
  - Decisions and trade-offs made
  - How work scaled (through people, systems, or process)
  - Outcomes and learning
  - Supporting images (limited, intentional use)

**Leadership & Practice** (`/leadership`)
- Long-form writing section covering:
  - How you lead design teams
  - Craft at scale
  - Design systems philosophy
  - Research operationalization
  - Working with PMs and Engineering
- Can be a single page with anchored sections or multiple sub-pages

**Writing** (`/writing`)
- Blog-style list of all posts
- Individual post pages (`/writing/[slug]`)
- Reflective, opinionated pieces about design leadership, systems, research ops, strategy
- Shows date, tags, estimated reading time

**About** (`/about`)
- Professional biography
- Career arc from hands-on design to leadership
- Optional: contact information or LinkedIn link

---

## Content Architecture

**File Structure:**
```
/content
  /case-studies
    scaling-design-systems.md
    research-ops-transformation.md
    ...
  /writing
    leading-through-ambiguity.md
    craft-at-scale.md
    ...
```

**Frontmatter Schema:**
```yaml
---
title: "Case Study Title"
summary: "2-3 sentence overview"
date: "2024-01-15"
tags: ["design-systems", "leadership"]
featured: true  # for homepage selection
coverImage: "/images/case-study-name/cover.jpg"  # optional
---
```

---

## Design Direction

**Typography:**
- Serif typeface for headings (editorial, authoritative)
- Clean sans-serif for body text (readable, contemporary)
- Generous line-height and spacing for comfortable reading

**Color:**
- Cool neutral base (near-white background, dark gray text)
- Single muted accent color for links and subtle emphasis
- High contrast for accessibility

**Layout:**
- Generous whitespace
- Single-column reading experience for long-form content
- Maximum content width for optimal readability (~65-70 characters)
- Subtle hierarchy through typography weight and size, not decoration

**Interactions:**
- No flashy animations or transitions
- Simple, purposeful hover states
- Smooth scrolling where appropriate

---

## Technical Implementation

- React + Vite for fast, lightweight builds
- React Router for navigation
- Markdown parsing with frontmatter extraction
- Static asset handling for images
- Responsive design (mobile-friendly without being mobile-first)
- Clean, semantic HTML for accessibility

---

## Deliverables

**Example Content:**
- One fully written case study (senior product design scope)
- One leadership-focused blog post

**Documentation:**
- Clear README with:
  - Running locally (`npm run dev`)
  - Building for production (`npm run build`)
  - Deploying to Netlify (drag-and-drop or CLI instructions)
  - How to add new case studies and posts

**Export-Ready:**
- No Lovable-specific hosting features
- Standard React + Vite structure
- Works independently on any static hosting (Netlify, Vercel, GitHub Pages)

