# Pre-Deployment Checklist

Use this checklist before deploying changes to production.

## Automated Checks

Run the pre-deploy script to automatically verify code quality:

```bash
npm run pre-deploy
```

This will run:
- ✅ Linter (ESLint)
- ✅ Code formatting check (Prettier)
- ✅ Unit tests
- ✅ Production build

## Manual Verification

### 1. Content Verification
- [ ] All case studies load correctly
- [ ] All writing posts load correctly
- [ ] Images display properly (no broken images)
- [ ] Password-protected case studies work
- [ ] Markdown renders correctly (headings, lists, code blocks, links)

### 2. Navigation & Routes
- [ ] Homepage loads
- [ ] Case Studies page loads
- [ ] Writing page loads
- [ ] Leadership page loads
- [ ] About page loads
- [ ] 404 page displays for invalid routes
- [ ] All internal links work
- [ ] Back navigation works correctly

### 3. Responsive Design
Test at these breakpoints:
- [ ] Mobile (375px) - iPhone SE
- [ ] Mobile (414px) - iPhone Pro Max
- [ ] Tablet (768px) - iPad
- [ ] Desktop (1024px)
- [ ] Large desktop (1440px)

Verify:
- [ ] Header navigation works on mobile (hamburger menu)
- [ ] Text is readable at all sizes
- [ ] Images scale appropriately
- [ ] No horizontal scroll
- [ ] Footer displays correctly

### 4. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, macOS)
- [ ] Edge (latest)
- [ ] iOS Safari (latest)
- [ ] Android Chrome (latest)

### 5. Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Skip-to-content link appears on Tab
- [ ] Focus indicators are visible
- [ ] Screen reader announces page titles correctly
- [ ] Images have alt text
- [ ] Links have descriptive text

### 6. Performance
Run Lighthouse audit in Chrome DevTools:
- [ ] Performance score >90
- [ ] Accessibility score >95
- [ ] Best Practices score >90
- [ ] SEO score >90

Check Core Web Vitals:
- [ ] LCP (Largest Contentful Paint) <2.5s
- [ ] CLS (Cumulative Layout Shift) <0.1
- [ ] FID (First Input Delay) <100ms

### 7. Dark Mode
- [ ] Toggle works correctly
- [ ] All pages display correctly in dark mode
- [ ] Images are visible in dark mode
- [ ] Text contrast is sufficient

### 8. Console & Errors
- [ ] No console errors in browser DevTools
- [ ] No console warnings (except expected third-party warnings)
- [ ] No network errors (404s, failed requests)

## Build Verification

```bash
npm run build
npm run preview
```

- [ ] Build completes without errors
- [ ] Bundle size is reasonable (<250KB gzipped)
- [ ] Preview server runs correctly
- [ ] All pages load in preview mode

## Deployment

After all checks pass:

1. Commit changes with descriptive message
2. Push to repository
3. Deploy via Netlify (automatic or manual)
4. Verify production deployment
5. Test critical paths on live site

## Post-Deployment

- [ ] Homepage loads on production
- [ ] Test one case study
- [ ] Test one writing post
- [ ] Verify analytics are tracking (if applicable)
- [ ] Check for any production-only errors
