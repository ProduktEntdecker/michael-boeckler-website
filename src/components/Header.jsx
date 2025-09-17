import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Start', href: '/' },
    { name: 'Bücher', href: '/buecher' },
    { name: 'Über mich', href: '/ueber' },
    { name: 'Aktuelles', href: '/aktuelles' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Newsletter', href: '/newsletter' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="bg-black text-cream">
      <nav className="container mx-auto px-4" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center">
            <h1 className="font-serif text-2xl md:text-3xl font-bold">Michael Böckler</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`py-2 px-1 border-b-2 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'border-wine-red text-white'
                    : 'border-transparent hover:border-wine-red hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menü öffnen"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 px-4 ${
                    isActive(item.href)
                      ? 'bg-wine-red text-white'
                      : 'hover:bg-gray-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}