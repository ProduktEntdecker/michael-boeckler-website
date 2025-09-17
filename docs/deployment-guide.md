# Deployment Guide

## Overview
This guide covers the complete deployment process for the Michael Böckler website to Vercel.

## Prerequisites
- Node.js 18+ installed locally
- GitHub account with repository access
- Vercel account (free tier sufficient)
- Instagram Basic Display API access token
- Plausible Analytics account

## Timeline (2-3 Week Plan)

### Week 1: Development & Testing
- [ ] Day 1-2: Environment setup and initial development
- [ ] Day 3-4: Component implementation and styling
- [ ] Day 5-6: API integrations (Instagram, Newsletter)
- [ ] Day 7: Testing and bug fixes

### Week 2: Content & Optimization
- [ ] Day 8-9: Content population and image optimization
- [ ] Day 10-11: Performance optimization
- [ ] Day 12-13: Accessibility and SEO improvements
- [ ] Day 14: Final testing and review

### Week 3: Deployment & Launch
- [ ] Day 15-16: Production deployment setup
- [ ] Day 17-18: Domain configuration and SSL
- [ ] Day 19-20: Monitoring setup and final checks
- [ ] Day 21: Launch!

## Local Development Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/michael-boeckler-website
cd michael-boeckler-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create `.env.local` file:
```env
VITE_PLAUSIBLE_DOMAIN=michael-boeckler.de
VITE_INSTAGRAM_ACCESS_TOKEN=your_instagram_token
VITE_MAILCHIMP_API_KEY=your_mailchimp_key
VITE_HUGENDUBEL_AFFILIATE_ID=your_affiliate_id
```

### 4. Start Development Server
```bash
npm run dev
```

## Vercel Deployment

### 1. Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select "michael-boeckler-website"

### 2. Configure Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Environment Variables
Add in Vercel dashboard:
- `PLAUSIBLE_DOMAIN`: michael-boeckler.de
- `INSTAGRAM_ACCESS_TOKEN`: [your token]
- `MAILCHIMP_API_KEY`: [your key]
- `HUGENDUBEL_AFFILIATE_ID`: [your id]

### 4. Domain Configuration
1. Go to Project Settings → Domains
2. Add custom domain: michael-boeckler.de
3. Add www subdomain: www.michael-boeckler.de
4. Update DNS records at your registrar:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

### 5. Deploy
```bash
# Push to main branch triggers automatic deployment
git push origin main

# Or deploy manually
vercel --prod
```

## Post-Deployment Checklist

### Performance
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Check Core Web Vitals
- [ ] Verify image optimization
- [ ] Test lazy loading

### Functionality
- [ ] Test contact form submission
- [ ] Verify newsletter signup
- [ ] Check Instagram feed loading
- [ ] Test all internal links
- [ ] Verify external book links
- [ ] Check analytics tracking

### SEO & Meta
- [ ] Verify meta tags
- [ ] Check Open Graph tags
- [ ] Test social media previews
- [ ] Submit sitemap to Google

### Security
- [ ] Verify HTTPS everywhere
- [ ] Check security headers
- [ ] Test form validation
- [ ] Verify no sensitive data exposed

### Accessibility
- [ ] Run accessibility audit
- [ ] Test keyboard navigation
- [ ] Check screen reader compatibility
- [ ] Verify color contrast

## Monitoring & Maintenance

### Plausible Analytics Setup
1. Add site to Plausible dashboard
2. Verify script is loading
3. Create custom goals:
   - book_link_click
   - newsletter_signup
   - contact_form_submit

### Instagram Token Refresh
Instagram tokens expire after 60 days. Set up automated refresh:
```javascript
// Add to a scheduled function
const refreshToken = async () => {
  const response = await fetch('/api/instagram/refresh');
  // Handle response
};
```

### Performance Monitoring
- Set up Vercel Analytics
- Configure alerts for:
  - Build failures
  - Performance degradation
  - High error rates

## Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Instagram Feed Not Loading
1. Check token validity
2. Verify API endpoint
3. Check CORS settings
4. Review error logs in Vercel

### Slow Performance
1. Check image sizes
2. Verify lazy loading
3. Review bundle size
4. Enable Vercel Edge caching

## Rollback Procedure
```bash
# Revert to previous deployment
vercel rollback

# Or revert Git commit
git revert HEAD
git push origin main
```

## Support Resources
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/
- Plausible Docs: https://plausible.io/docs
- Instagram API: https://developers.facebook.com/docs/instagram-basic-display-api