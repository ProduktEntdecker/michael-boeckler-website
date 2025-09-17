# Testing Checklist

## Performance Testing

### Lighthouse Scores (Target: 95+)
- [ ] Performance: ≥95
- [ ] Accessibility: ≥95
- [ ] Best Practices: ≥95
- [ ] SEO: ≥95

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): <2.5s
- [ ] FID (First Input Delay): <100ms
- [ ] CLS (Cumulative Layout Shift): <0.1
- [ ] FCP (First Contentful Paint): <1.8s
- [ ] TTI (Time to Interactive): <3.8s

### Load Testing
- [ ] Initial page load: <3s on 3G
- [ ] Subsequent navigation: <1s
- [ ] Image lazy loading working
- [ ] Font loading optimized
- [ ] No render-blocking resources

## Functionality Testing

### Navigation
- [ ] All menu links work correctly
- [ ] Mobile menu opens/closes properly
- [ ] Active page highlighting works
- [ ] Back/forward browser buttons work
- [ ] 404 page displays for invalid routes

### Forms
- [ ] Contact form submission works
- [ ] Newsletter signup works
- [ ] Form validation displays correctly
- [ ] Error messages are clear
- [ ] Success messages display properly
- [ ] Required fields are enforced

### Content Display
- [ ] Book cards display correctly
- [ ] Instagram grid loads properly
- [ ] Images lazy load as expected
- [ ] Text content is readable
- [ ] No broken images

### External Links
- [ ] Hugendubel links work
- [ ] Social media links work
- [ ] All external links open in new tabs
- [ ] Affiliate IDs included where applicable

### Analytics
- [ ] Plausible script loads
- [ ] Page views tracked
- [ ] Custom events fire:
  - [ ] book_link_click
  - [ ] newsletter_signup
  - [ ] contact_form_submit
- [ ] No cookies set

## Cross-Browser Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet
- [ ] Firefox Mobile

## Device Testing

### Desktop
- [ ] 1920x1080 (Full HD)
- [ ] 1366x768 (Common laptop)
- [ ] 2560x1440 (2K)

### Tablet
- [ ] iPad (768x1024)
- [ ] iPad Pro (1024x1366)
- [ ] Android tablet (800x1280)

### Mobile
- [ ] iPhone SE (375x667)
- [ ] iPhone 12/13 (390x844)
- [ ] Samsung Galaxy (360x740)
- [ ] Pixel 5 (393x851)

## Accessibility Testing

### WCAG 2.1 AA Compliance
- [ ] Color contrast ratio ≥4.5:1
- [ ] Large text contrast ≥3:1
- [ ] Focus indicators visible
- [ ] Interactive elements ≥44x44px

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] All interactive elements reachable
- [ ] Skip links available
- [ ] No keyboard traps
- [ ] Modal dialogs manageable

### Screen Reader Testing
- [ ] Page structure announced correctly
- [ ] Images have appropriate alt text
- [ ] Form labels associated correctly
- [ ] Error messages announced
- [ ] Dynamic content updates announced

### Visual Testing
- [ ] Works with 200% zoom
- [ ] Text remains readable
- [ ] No horizontal scrolling at zoom
- [ ] Works in high contrast mode

## SEO Testing

### Meta Tags
- [ ] Title tags on all pages
- [ ] Meta descriptions present
- [ ] Open Graph tags correct
- [ ] Twitter Card tags present
- [ ] Canonical URLs set

### Content
- [ ] Headings hierarchy correct (h1-h6)
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Language attribute set

### Technical SEO
- [ ] Sitemap.xml present
- [ ] Robots.txt configured
- [ ] Schema markup valid
- [ ] No duplicate content

## Security Testing

### Headers
- [ ] HTTPS enforced
- [ ] Security headers present:
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] Referrer-Policy
  - [ ] Strict-Transport-Security

### Forms
- [ ] Input validation on client
- [ ] Input sanitization on server
- [ ] CSRF protection (if applicable)
- [ ] Rate limiting implemented

### Data Protection
- [ ] No sensitive data in URLs
- [ ] No passwords in console
- [ ] API keys not exposed
- [ ] Personal data encrypted

## Error Handling

### User Errors
- [ ] 404 page displays correctly
- [ ] Form validation messages clear
- [ ] Network error messages helpful

### System Errors
- [ ] API failures handled gracefully
- [ ] Loading states display properly
- [ ] Fallback content available
- [ ] Error boundaries catch React errors

## Content Testing

### Text Content
- [ ] No spelling errors
- [ ] No grammar mistakes
- [ ] Consistent formatting
- [ ] Links work correctly

### Images
- [ ] All images load
- [ ] Proper dimensions
- [ ] Optimized file sizes
- [ ] Appropriate formats (WebP, etc.)

## Integration Testing

### Instagram API
- [ ] Feed loads correctly
- [ ] Handles API errors gracefully
- [ ] Caching works properly
- [ ] Token refresh mechanism works

### Newsletter Integration
- [ ] Signup works correctly
- [ ] Confirmation emails sent
- [ ] Double opt-in process works
- [ ] Unsubscribe links work

### Analytics Integration
- [ ] Events tracked correctly
- [ ] No duplicate events
- [ ] Custom dimensions work
- [ ] Goal completions tracked

## Performance Optimization Verification

### Assets
- [ ] Images optimized (<100KB ideally)
- [ ] CSS minified
- [ ] JavaScript bundled efficiently
- [ ] Fonts subset and optimized

### Caching
- [ ] Static assets cached
- [ ] API responses cached appropriately
- [ ] Service worker (if applicable)
- [ ] CDN working correctly

### Network
- [ ] Gzip/Brotli compression enabled
- [ ] HTTP/2 or HTTP/3 used
- [ ] Minimal redirect chains
- [ ] DNS prefetch for external domains

## Deployment Testing

### Build Process
- [ ] Build completes without errors
- [ ] No console warnings in production
- [ ] Environment variables loaded
- [ ] Source maps configured correctly

### Production Environment
- [ ] All features work in production
- [ ] SSL certificate valid
- [ ] Domain redirects work
- [ ] Error tracking enabled

## Final Review Checklist

### Business Requirements
- [ ] All specified features implemented
- [ ] Brand guidelines followed
- [ ] Content accurate and up-to-date
- [ ] Legal pages present (Impressum, Datenschutz)

### User Experience
- [ ] Intuitive navigation
- [ ] Fast load times
- [ ] Responsive design works
- [ ] Pleasant visual design

### Technical Excellence
- [ ] Clean, maintainable code
- [ ] Documentation complete
- [ ] Tests passing
- [ ] No console errors

## Sign-off
- [ ] Developer testing complete
- [ ] Stakeholder review complete
- [ ] Final approval received
- [ ] Ready for launch