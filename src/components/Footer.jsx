import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-cream mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl mb-3">Michael Böckler</h3>
            <p className="text-sm text-gray-400">
              Autor kulinarischer Kriminalromane
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-3">Schnellzugriff</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/buecher" className="hover:text-white transition-colors">
                Werke
              </Link>
              <Link to="/kontakt" className="hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-3">Folgen Sie mir</h3>
            <a
              href="https://www.instagram.com/michael_boeckler/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              Instagram →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p className="mb-2">© {currentYear} Michael Böckler. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}