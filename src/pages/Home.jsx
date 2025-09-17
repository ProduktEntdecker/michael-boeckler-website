import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import NewsletterForm from '../components/NewsletterForm';
import { getLatestBook } from '../lib/books';

export default function Home() {
  const latestBook = getLatestBook();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="section-spacing text-center">
        <h1 className="heading-xl mb-6">Michael Böckler</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Willkommen in der Welt spannender Kriminalromane.
          Begleiten Sie Kommissar Hippolyt Hermanus auf seinen Ermittlungen
          durch die malerischen Weinberge und historischen Städte.
        </p>
        <div className="mt-8 space-x-4">
          <Link to="/buecher" className="btn-primary inline-block">
            Zu den Büchern
          </Link>
          <Link to="/newsletter" className="btn-secondary inline-block">
            Newsletter abonnieren
          </Link>
        </div>
      </section>

      {/* Latest Book Feature */}
      <section className="bg-white py-12 -mx-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg text-center mb-8">Neueste Veröffentlichung</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-sm mx-auto">
              <BookCard book={latestBook} />
            </div>
            <div className="space-y-4">
              <blockquote className="text-lg italic text-gray-700 border-l-4 border-wine-red pl-4">
                "Ein meisterhaft erzählter Krimi, der den Leser von der ersten bis zur letzten Seite fesselt."
              </blockquote>
              <p className="text-sm text-gray-600">— Literaturkritik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Introduction */}
      <section className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/assets/images/author-portrait.jpg"
              alt="Michael Böckler"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="heading-md">Über den Autor</h2>
            <p className="text-gray-700">
              Michael Böckler ist ein preisgekrönter Kriminalautor, dessen Werke
              für ihre atmosphärische Dichte und psychologische Tiefe bekannt sind.
            </p>
            <p className="text-gray-700">
              Mit seiner erfolgreichen Hippolyt Hermanus-Reihe hat er sich einen
              festen Platz in der deutschen Krimiszene erobert.
            </p>
            <Link to="/ueber" className="link-wine inline-block mt-4">
              Mehr erfahren →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-cream-dark py-12 -mx-4 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="heading-md mb-4">Bleiben Sie auf dem Laufenden</h2>
          <p className="text-gray-700 mb-8">
            Erhalten Sie exklusive Einblicke, Leseproben und Neuigkeiten
            direkt in Ihr Postfach.
          </p>
          <NewsletterForm source="home_page" />
        </div>
      </section>
    </div>
  );
}