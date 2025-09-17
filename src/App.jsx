import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import News from './pages/News'
import Contact from './pages/Contact'
import Newsletter from './pages/Newsletter'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
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
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App