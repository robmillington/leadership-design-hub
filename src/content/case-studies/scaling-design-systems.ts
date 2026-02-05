export const content = `---
title: "Scaling a Design System Across Five Product Teams"
summary: "Leading the transformation of a fragmented component library into a cohesive design system that serves 40+ designers and developers across five autonomous product teams."
date: "2024-06-15"
tags: ["design-systems", "leadership", "scale"]
featured: true
role: "Head of Product Design"
---

## Context and constraints

When I joined as Head of Product Design, the company had grown from a single product to a portfolio of five interconnected products. Each team had developed their own component libraries, resulting in visual inconsistency, duplicated effort, and a fragmented user experience across the product suite.

The challenge wasn't purely technical. We had 40+ people using these systems daily, each team with their own velocity and priorities. Any solution needed to respect team autonomy while creating genuine coherence.

**Key constraints:**
- No dedicated design systems team or budget for one
- Teams were mid-sprint on critical roadmap items
- Existing components had significant technical debt
- No executive mandate—this needed grassroots buy-in

## The real problem

The initial brief was "fix the inconsistency." But inconsistency was a symptom, not the disease.

The deeper issue was that we'd conflated "components" with "design system." Teams had reusable UI elements but lacked shared principles, documented decisions, and governance. When a designer in Team A made a button, they had no visibility into Team B's equivalent decision.

We didn't need a component library. We needed a shared language for design decisions.

## My role and involvement

I operated at three levels simultaneously:

**Strategic:** Made the case to leadership that design systems investment would reduce design and engineering time by 20-30% within 18 months. Framed it as velocity and quality, not aesthetics.

**Organisational:** Established a Design Systems Guild—a rotating group of one designer and one engineer from each team, meeting fortnightly. I facilitated the first six months of sessions but deliberately stepped back to let the guild self-govern.

**Hands-on:** Personally audited all five products, catalogued every component variant, and created the initial visual inventory. This wasn't about proving I could still do IC work—it was about having the credibility and context to make decisions.

## Decisions and trade-offs

**Federation over centralisation.** We rejected the model of a central team that "owns" the system. Instead, each product team contributes components back to a shared library. This trades some consistency for autonomy and buy-in.

**Principles before pixels.** Before touching Figma, we spent six weeks aligning on design principles. These became the arbitration mechanism when teams disagreed on implementation.

**Progressive adoption.** Rather than a "big bang" migration, teams adopted new components when they touched existing screens. This extended the timeline but eliminated the productivity cliff of stopping to migrate.

**Tokens over theming.** We invested heavily in design tokens (colour, spacing, typography) rather than themed components. This allowed products to maintain distinct personalities while sharing foundations.

## How this scaled through systems and people

The guild model was the scaling mechanism. Rather than me being the bottleneck, I had 10 people across the organisation who understood the system deeply and could make local decisions.

We created contribution guidelines that let any team propose new components. A lightweight review process (two guild members plus one accessibility check) balanced quality with speed.

Documentation became a first-class citizen. Every component had usage guidelines, accessibility notes, and examples of when *not* to use it. This reduced "ask the design systems person" questions by roughly 70%.

## Outcomes and learning

**Measurable outcomes:**
- Component development time reduced by 40% (tracked over six months)
- Design QA time reduced by 25%
- Cross-product feature development 30% faster
- Accessibility compliance improved from 72% to 94%

**What I learned:**

Systems work is political work. The technical solution was the easy part. The hard part was navigating team identities, historical decisions, and the legitimate concern that "standardisation" might mean "my team's choices don't matter."

You can't mandate adoption. The most successful components were ones where the value was immediately obvious. The least successful were ones we pushed because "consistency."

Head of Design is a facilitation role. My job wasn't to design the system. It was to create the conditions where 40 people could design it together, coherently.
`;

export default content;
