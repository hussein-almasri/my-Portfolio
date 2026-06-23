# Deployment Checklist

## Pre-Deployment

### Data Configuration

- [ ] Update `src/data/portfolio.ts` with your real data:
  - [ ] `siteConfig.url` — Your actual domain
  - [ ] `siteConfig.author.email` — Your email
  - [ ] `contactInfo.email` — Your email
  - [ ] `contactInfo.phone` — Your phone number
  - [ ] `contactInfo.github` — Your GitHub profile URL
  - [ ] `contactInfo.linkedin` — Your LinkedIn profile URL
  - [ ] `contactInfo.cvUrl` — Path to your CV PDF
  - [ ] `socialLinks` — Your actual social media links
  - [ ] `projects` — Your real projects with correct URLs
  - [ ] `certificates` — Your real certificates
  - [ ] `timeline` — Your real education & experience

### Assets

- [ ] Replace `public/avatar.jpg` with your photo (square, 400x400+)
- [ ] Replace `public/og-image.png` with a real OG image (1200x630)
- [ ] Replace `public/favicon.svg` with your branded favicon
- [ ] Replace `public/favicon-16x16.png` (16x16)
- [ ] Replace `public/apple-touch-icon.png` (180x180)
- [ ] Replace `public/icon-192.png` (192x192)
- [ ] Replace `public/icon-512.png` (512x512)
- [ ] Replace `public/cv/hussein-almasri-cv.pdf` with your actual CV
- [ ] Add project images to `public/projects/`

### SEO

- [ ] Update `src/app/layout.tsx` — Replace `your-google-verification-code`
- [ ] Update `src/app/layout.tsx` — Replace `@yourusername` in Twitter creator
- [ ] Verify `sitemap.ts` generates correct URLs
- [ ] Verify `robots.ts` allows crawling

### Analytics

- [ ] Install analytics provider (e.g., `npm i @vercel/analytics`)
- [ ] Update `src/components/shared/analytics.tsx` with your tracking ID
- [ ] Add `<AnalyticsProvider />` to `src/app/layout.tsx`

### PWA

- [ ] Generate proper icon files (not SVG placeholders)
- [ ] Update `src/app/manifest.ts` with correct metadata

## Vercel Setup

### 1. Connect Repository

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework: Next.js (auto-detected)
4. Click "Deploy"

### 2. Environment Variables

Set these in Vercel Dashboard > Settings > Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Custom Domain

1. Go to Settings > Domains
2. Add your domain
3. Configure DNS as instructed by Vercel
4. Enable HTTPS (automatic)

### 4. GitHub Actions Secrets

For CI/CD via GitHub Actions, add these secrets:

```
VERCEL_TOKEN=your_vercel_token
```

Get your token from: Vercel Dashboard > Settings > Tokens

### 5. Vercel Environments

Create two environments in Vercel:

- **Preview** — For pull requests
- **Production** — For main branch

## Post-Deployment

### Verify

- [ ] Site loads correctly at your domain
- [ ] All sections render properly
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] Favicon displays
- [ ] OG image previews on social media
- [ ] `/sitemap.xml` returns valid XML
- [ ] `/robots.txt` is accessible
- [ ] `/manifest.json` is accessible
- [ ] All links work (internal + external)
- [ ] Contact form functions (if backend added)
- [ ] Page transitions are smooth
- [ ] Images load with next/image optimization
- [ ] Fonts load correctly (Inter, Fira Code)

### Performance

- [ ] Run Lighthouse audit (target: 90+ on all categories)
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Verify image optimization with next/image
- [ ] Check bundle size with `next build`

### SEO Submission

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify site on [Google Search Console](https://search.google.com/search-console)
- [ ] Set up [Google Analytics](https://analytics.google.com) (or alternative)
- [ ] Test rich results with [Rich Results Test](https://search.google.com/test/rich-results)

### Security

- [ ] Security headers configured (already in next.config.ts)
- [ ] No secrets in client-side code
- [ ] `.env.local` not committed
- [ ] HTTPS enforced

## Quick Deploy Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Type check before deploy
npm run typecheck

# Build locally to test
npm run build
```
