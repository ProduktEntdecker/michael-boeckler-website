# Umsetzungsplan: Website-Prototyp für Michael Böckler
## Strategische Roadmap mit AI Tools

### Ausgangssituation

Die Website für den Autor Michael Böckler wurde als responsive, minimalistischer Prototyp entwickelt. Der gewünschte Workflow umfasst: **ChatPRD → Bolt.new → GitHub → Claude Code → Vercel**.

### Phase 1: Konzeption & Planung (ChatPRD)

#### 1.1 Product Requirements Document (PRD)
**Status:** ✅ Abgeschlossen

**Deliverables:**
- [x] Detaillierte Feature-Spezifikation
- [x] User Stories und Acceptance Criteria
- [x] Technical Requirements
- [x] Design System Guidelines
- [x] Content Strategy

**ChatPRD Prompts verwenden:**
```
"Erstelle ein PRD für eine Autor-Website mit folgenden Features:
- Responsive Design für alle Geräte
- Minimalistisches Design mit Serifenschrift
- Integration von Buchverkaufslinks (Hugendubel)
- Instagram-Feed Integration
- Kontaktformular und Newsletter-Anmeldung
- SEO-Optimierung für kulinarische Krimis"
```

#### 1.2 User Experience Mapping
- Personas definiert: Krimi-Leser 45-70 Jahre, Food-Blogger 30-45 Jahre
- User Journey: Landing → Über Autor → Buchentdeckung → Kauf
- Conversion-Punkte: Hugendubel-Links, Newsletter, Instagram-Follow

### Phase 2: Prototyping (Bolt.new)

#### 2.1 Rapid Prototyping
**Status:** ✅ Grundprototyp erstellt

**Nächste Schritte mit Bolt.new:**
1. **Import des aktuellen Codes** in Bolt.new
2. **Iterative Verbesserungen:**
   - Enhanced Instagram-Integration
   - Improved Mobile Navigation
   - Book Showcase with Rich Media
   - Contact Form Implementation
   - Newsletter Signup Modal

**Bolt.new Setup:**
```
// Bolt.new Prompt Template
"Importiere diese Website und verbessere:
1. Instagram API Integration für Live-Feed
2. Responsive Book Gallery mit Hover-Effekten
3. Animierte Übergänge zwischen Sektionen
4. Contact Form mit EmailJS
5. Performance-Optimierung für Core Web Vitals"
```

#### 2.2 Feature Enhancement
- **Instagram Integration:** Echter API-Aufruf statt Placeholder
- **Book Details:** Expand/Collapse für Buchbeschreibungen
- **Animations:** Scroll-triggered Animationen
- **Forms:** Funktionsfähige Kontakt- und Newsletter-Formulare

### Phase 3: Version Control (GitHub)

#### 3.1 Repository Setup
**Nächster Schritt:** Repository erstellen

**GitHub Struktur:**
```
michael-boeckler-website/
├── README.md
├── package.json
├── src/
│   ├── index.html
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── app.js
│   │   └── instagram.js
│   └── assets/
│       ├── images/
│       └── fonts/
├── docs/
│   ├── branding-guide.md
│   └── deployment-guide.md
└── .github/
    └── workflows/
        └── deploy.yml
```

#### 3.2 Branching Strategy
- **main:** Production-ready Code
- **develop:** Development Branch
- **feature/***:** Feature-spezifische Branches
- **hotfix/***:** Schnelle Fixes

#### 3.3 Commit Conventions
```
feat: add Instagram API integration
fix: mobile navigation toggle
docs: update deployment guide
style: improve button hover effects
refactor: optimize image loading
```

### Phase 4: Code-Optimierung (Claude Code)

#### 4.1 Code Quality Verbesserungen
**Mit Claude Code optimieren:**

**Performance:**
- Image Lazy Loading
- CSS/JS Minification
- Critical CSS Inlining
- Service Worker für Caching

**Accessibility:**
- ARIA Labels
- Keyboard Navigation
- Screen Reader Compatibility
- Color Contrast Optimization

**SEO:**
- Structured Data (Schema.org)
- Meta Tags Optimization
- Open Graph Tags
- XML Sitemap

#### 4.2 Advanced Features
```javascript
// Instagram Integration mit Claude Code
const InstagramAPI = {
  async fetchPosts(accessToken, limit = 12) {
    // Implementation für echte Instagram-Posts
  },
  
  renderPosts(posts) {
    // Responsive Gallery Rendering
  }
};

// Newsletter Integration
const NewsletterAPI = {
  async subscribe(email, name) {
    // Mailchimp/Convertkit Integration
  }
};
```

### Phase 5: Deployment (Vercel)

#### 5.1 Vercel Setup
**Deployment Configuration:**

```json
{
  "name": "michael-boeckler-website",
  "framework": "vanilla",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "env": {
    "INSTAGRAM_ACCESS_TOKEN": "@instagram_token",
    "NEWSLETTER_API_KEY": "@newsletter_key"
  }
}
```

#### 5.2 Custom Domain Setup
- Domain: `michael-boeckler.de` (Vorschlag)
- SSL-Zertifikat via Vercel
- CDN-Optimierung für Europa

#### 5.3 Environment Variables
```bash
# Vercel Environment Variables
INSTAGRAM_ACCESS_TOKEN=your_token_here
MAILCHIMP_API_KEY=your_key_here
HUGENDUBEL_AFFILIATE_ID=your_id_here
```

### Phase 6: Testing & Optimization

#### 6.1 Performance Testing
- **Lighthouse Scores:** Ziel 95+ für alle Kategorien
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Mobile Performance:** PageSpeed Insights

#### 6.2 Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile
- Responsive Design: 320px - 2560px

#### 6.3 A/B Testing Setup
- Hero-Section Varianten
- Call-to-Action Button-Texte
- Instagram-Integration Platzierung

### Phase 7: Launch & Monitoring

#### 7.1 Launch Checklist
- [x] ✅ Domain Setup
- [ ] SSL-Zertifikat
- [ ] Analytics Integration (Google Analytics 4)
- [ ] Search Console Setup
- [ ] Instagram Business Account
- [ ] Newsletter-Tool Konfiguration

#### 7.2 Monitoring Setup
```javascript
// Analytics Events
gtag('event', 'book_link_click', {
  'book_title': bookTitle,
  'external_link': 'hugendubel'
});

gtag('event', 'newsletter_signup', {
  'method': 'website_modal'
});
```

### Technische Spezifikationen

#### Performance Targets
- **Ladezeit:** < 3 Sekunden
- **Lighthouse Score:** 95+
- **Mobile Responsive:** 100%
- **Accessibility:** WCAG 2.1 AA

#### SEO Optimierung
```html
<!-- Meta Tags Template -->
<title>Michael Böckler - Kulinarische Kriminalromane aus Italien & Frankreich</title>
<meta name="description" content="Entdecken Sie die spannenden Kriminalromane von Michael Böckler. Kulinarische Abenteuer in Italien und Frankreich mit Hippolyt Hermanus und Baron Emilio.">
<meta name="keywords" content="Michael Böckler, Kulinarische Krimis, Italien Kriminalroman, Frankreich Krimi, Wein Krimi">
```

### Budget & Timeline

#### Geschätzte Kosten
- **Domain & Hosting:** 50€/Jahr (Vercel Pro)
- **Instagram API:** Kostenlos (Basic Display API)
- **Newsletter-Tool:** 20€/Monat (Mailchimp)
- **Development Zeit:** 20-30 Stunden

#### Timeline (2-3 Wochen)
- **Woche 1:** Bolt.new Entwicklung & GitHub Setup
- **Woche 2:** Claude Code Optimierung & Testing
- **Woche 3:** Vercel Deployment & Launch

### Nächste konkrete Schritte

1. **Sofort:** Code in Bolt.new importieren und iterieren
2. **Tag 2-3:** GitHub Repository erstellen und Code pushen
3. **Tag 4-7:** Mit Claude Code optimieren (Performance, SEO, Accessibility)
4. **Tag 8-10:** Vercel Deployment und Domain-Setup
5. **Tag 11-14:** Testing, Optimierung und Launch

### Support & Wartung

#### Monatliche Tasks
- Instagram-Content Updates
- Newsletter-Versand
- Performance-Monitoring
- Security Updates

#### Vierteljährlich
- Content-Refresh
- SEO-Analyse
- User Experience Review
- Conversion-Optimierung

---

**Dieser Plan bietet eine klare Roadmap für die professionelle Umsetzung der Michael Böckler Website mit dem gewünschten AI-Tool Workflow.**