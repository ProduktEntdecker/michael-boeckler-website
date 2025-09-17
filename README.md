# Michael Böckler Author Website

## 📚 Project Overview

Official author website for Michael Böckler, built with React + Vite for optimal performance and user experience. Features a minimalist design with black/cream base colors, wine-red accents, and the Crimson Text serif font for headings.

## 🎨 Brand Values
- **Authenticity** - Genuine storytelling and author voice
- **Enjoyment** - Engaging reading experience
- **Culture** - Literary tradition and craftsmanship
- **Quality** - Premium content and presentation
- **Tradition** - Classical design with modern performance

## 🚀 Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Analytics**: Plausible (cookieless, privacy-first)
- **Deployment**: Vercel
- **Instagram**: Basic Display API
- **Newsletter**: Mailchimp/ConvertKit integration ready

## 📊 Performance Targets
- Lighthouse Score: ≥95
- LCP: <2.5s
- CLS: <0.1
- FID: <100ms
- WCAG 2.1 AA compliant
- Load time: <3s on 3G

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- npm or pnpm
- Instagram Basic Display API token
- Plausible account

### Setup
```bash
# Clone repository
git clone https://github.com/your-username/michael-boeckler-website
cd michael-boeckler-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Variables
```
PLAUSIBLE_DOMAIN=michael-boeckler.de
INSTAGRAM_ACCESS_TOKEN=your_token_here
MAILCHIMP_API_KEY=your_key_here
HUGENDUBEL_AFFILIATE_ID=optional_id
```

## 📈 Analytics Events

### Custom Events (via Plausible)
- `book_link_click` - Tracks outbound clicks to Hugendubel
- `newsletter_signup` - Tracks newsletter form submissions
- No cookies, no consent banner required!

## 🚢 Deployment

### Vercel Setup
1. Import repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy to production

### Workflow
```
ChatPRD → bolt.new → GitHub → Claude Code → Vercel
```

## 🌿 Branching Strategy
- `main` - Production branch
- `develop` - Integration branch
- `feature/*` - Feature branches

## 📁 Project Structure
```
michael-boeckler-website/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities & helpers
│   ├── server/         # API routes
│   ├── assets/         # Images & fonts
│   └── styles/         # Tailwind CSS
├── docs/               # Documentation
├── .github/            # GitHub Actions
└── vercel.json         # Vercel config
```

## 🧪 Testing
See `docs/testing-checklist.md` for comprehensive testing guidelines.

## 📝 Commit Conventions
Follow conventional commits. See `docs/commit-conventions.md` for details.

## 📄 License
© 2025 Michael Böckler. All rights reserved.
---
*Last Updated: 2025-09-18 00:48:38*
