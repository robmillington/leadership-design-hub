# Head of Product Design Portfolio

A clean, content-driven portfolio website for a senior design leader. Built with React + Vite, styled with Tailwind CSS, and driven by Markdown content.

## Features

- **Content-driven architecture**: Case studies and blog posts stored as TypeScript files with embedded Markdown
- **Clean, typographic design**: Serif headings (Instrument Serif) + sans body (Inter), cool neutrals with slate blue accent
- **Fully exportable**: No database, no auth, no platform dependencies
- **Fast**: Static site with minimal JavaScript

## Project Structure

```
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Layout.tsx      # Page layout with nav and footer
│   │   ├── ContentCard.tsx # Card for listing content items
│   │   └── MarkdownRenderer.tsx # Renders markdown content
│   ├── content/            # Content files
│   │   ├── case-studies/   # Case study content
│   │   ├── writing/        # Blog post content
│   │   └── index.ts        # Content exports and utilities
│   ├── lib/                # Utility functions
│   │   └── content.ts      # Markdown parsing, date formatting
│   ├── pages/              # Page components
│   └── index.css           # Design system tokens
├── public/                 # Static assets
└── README.md
```

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Testing

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Code Quality

```bash
# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

## Building for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

### Pre-Deployment Check

Run all quality checks before deploying:

```bash
npm run pre-deploy
```

This runs linting, formatting checks, tests, and builds the production bundle.

See [DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md) for the full pre-deployment verification process.

## Building for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## Deploying to Netlify

### Option 1: Drag and Drop
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page

### Option 2: Git Integration
1. Push your code to GitHub
2. Connect the repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

## Adding Content

### New Case Study

1. Create a new file in `src/content/case-studies/`:

```typescript
// src/content/case-studies/your-case-study.ts
export const content = `---
title: "Your Case Study Title"
summary: "A brief 2-3 sentence overview."
date: "2024-01-15"
tags: ["design-systems", "leadership"]
featured: true
role: "Head of Product Design"
---

## Context and constraints

Your content here...
`;

export default content;
```

2. Add the import to `src/content/index.ts`:

```typescript
import { content as yourCaseStudy } from "./case-studies/your-case-study";

export const caseStudies: ContentItem[] = sortByDate([
  // ... existing case studies
  parseContent(yourCaseStudy, "your-case-study"),
]);
```

### New Blog Post

Same process, but in `src/content/writing/` and added to the `writingPosts` array.

### Frontmatter Options

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Page title |
| `summary` | Yes | 2-3 sentence overview |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `tags` | Yes | Array of topic tags |
| `featured` | No | Show on homepage (default: false) |
| `role` | No | Your role for case studies |
| `coverImage` | No | Path to cover image |

## Customisation

### Typography
Fonts are loaded via Google Fonts in `src/index.css`. Change the import URL and `--font-serif` / `--font-sans` custom properties.

### Colours
All colours are defined as HSL values in `src/index.css` under `:root`. The accent colour is `--primary`.

### Content Width
Adjust the `.container-narrow` and `.container-wide` utilities in `src/index.css`.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **React Markdown** - Markdown rendering
- **TypeScript** - Type safety

## License

MIT
