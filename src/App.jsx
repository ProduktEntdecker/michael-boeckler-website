import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Footer from './components/Footer'
import Skeleton from './components/Skeleton'

// Eager load the home page for better initial performance
import Home from './pages/Home'

// Lazy load other pages
const Books = lazy(() => import('./pages/Books'))
const About = lazy(() => import('./pages/About'))
const News = lazy(() => import('./pages/News'))
const Contact = lazy(() => import('./pages/Contact'))
const Newsletter = lazy(() => import('./pages/Newsletter'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))

// Loading component for lazy loaded routes
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wine-red mb-4"></div>
    <p className="text-gray-600">Seite wird geladen...</p>
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-cream flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <ErrorBoundary>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/buecher" element={<Books />} />
                  <Route path="/ueber" element={<About />} />
                  <Route path="/aktuelles" element={<News />} />
                  <Route path="/kontakt" element={<Contact />} />
                  <Route path="/newsletter" element={<Newsletter />} />
                  <Route path="/impressum" element={<Impressum />} />
                  <Route path="/datenschutz" element={<Datenschutz />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App