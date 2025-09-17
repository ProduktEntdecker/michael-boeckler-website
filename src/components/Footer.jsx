import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-cream mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-3 text-cream">Michael Böckler</h3>
            <p className="text-sm opacity-80">
              Autor kulinarischer Kriminalromane
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-3 text-cream">Schnellzugriff</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/buecher" className="opacity-80 hover:opacity-100 hover:text-cream transition-opacity">
                Werke
              </Link>
              <Link to="/kontakt" className="opacity-80 hover:opacity-100 hover:text-cream transition-opacity">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-3 text-cream">Folgen Sie mir</h3>
            <a
              href="https://www.instagram.com/michael_boeckler/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-80 hover:opacity-100 hover:text-cream transition-opacity"
            >
              Instagram →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-6 text-center text-sm">
          <p className="mb-2 opacity-80">© {currentYear} Michael Böckler. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/impressum" className="opacity-80 hover:opacity-100 hover:text-cream transition-opacity">
              Impressum
            </Link>
            <Link to="/datenschutz" className="opacity-80 hover:opacity-100 hover:text-cream transition-opacity">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}