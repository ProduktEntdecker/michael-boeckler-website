import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { getLatestBook } from '../lib/books';

export default function Home() {
  const latestBook = getLatestBook();

  return (
    <div>
      {/* Hero Section with Cream Background */}
      <section className="bg-cream py-24 -mt-8 -mx-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6 text-wine-red">
            Michael Böckler
          </h1>
          <p className="text-2xl md:text-3xl text-dark-blue font-light mb-8">
            Autor kulinarischer Kriminalromane
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Wo Verbrechen auf Genuss trifft – spannende Kriminalfälle aus der Welt des Weins,
            der Gastronomie und der Kultur Italiens und Frankreichs.
          </p>
          <Link
            to="/buecher"
            className="inline-block bg-wine-red text-cream px-10 py-4 text-lg hover:bg-wine-red-dark transition-all transform hover:scale-105"
          >
            Werke entdecken
          </Link>
        </div>
      </section>

      {/* Latest Book Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12 text-dark-blue">
            Neueste Veröffentlichung
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-sm mx-auto">
              <BookCard book={latestBook} />
            </div>
            <div className="space-y-6">
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-wine-red pl-6">
                "Ein meisterhaft erzählter Krimi, der den Leser von der ersten bis zur letzten Seite fesselt.
                Böckler versteht es wie kein anderer, Spannung mit kulinarischen Genüssen zu verbinden."
              </blockquote>
              <p className="text-gray-600">— Literaturkritik</p>
              <Link
                to="/buecher"
                className="inline-block text-wine-red hover:text-wine-red-dark underline text-lg"
              >
                Alle Bücher ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with sophisticated styling */}
      <section className="py-20 bg-cream-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-4xl mb-10 text-center text-dark-blue">
            Über den Autor
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Michael Böckler, geboren 1949 in Berlin und wohnhaft in München, verbindet als
              Schriftsteller und Journalist auf einzigartige Weise spannende Kriminalfälle mit
              touristischen und kulinarischen Informationen.
            </p>
            <p className="leading-relaxed">
              Seine Romane führen die Leser in die genussvolle Welt des Weins und der gehobenen
              Gastronomie – von den sonnigen Weinbergen der Provence bis zu den malerischen
              Landschaften Südtirols. Mit seinen beiden Hauptserien um den Weinkenner Hippolyt
              Hermanus hat er sich als Meister des kulinarischen Krimis etabliert.
            </p>
            <p className="leading-relaxed">
              Seine Leidenschaft für Italien, Frankreich, Wein und Kultur durchzieht alle seine
              Werke und macht jeden Roman zu einer Reise für alle Sinne.
            </p>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/ueber"
              className="inline-block bg-dark-blue text-cream px-8 py-3 hover:bg-dark-blue-dark transition"
            >
              Mehr über Michael Böckler
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 hover:border-wine-red transition-colors">
              <h3 className="font-serif text-2xl mb-4 text-wine-red">
                Hippolyt Hermanus Serie
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Weinkenner und Psychologe löst Mordfälle im kulinarischen Milieu
              </p>
              <Link to="/buecher" className="text-wine-red hover:text-wine-red-dark underline">
                Zur Buchreihe →
              </Link>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:border-wine-red transition-colors">
              <h3 className="font-serif text-2xl mb-4 text-wine-red">
                Veranstaltungen
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lesungen, Signierstunden und kulinarische Events
              </p>
              <Link to="/aktuelles" className="text-wine-red hover:text-wine-red-dark underline">
                Termine ansehen →
              </Link>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:border-wine-red transition-colors">
              <h3 className="font-serif text-2xl mb-4 text-wine-red">
                Kontakt
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Für Anfragen zu Lesungen und Interviews
              </p>
              <Link to="/kontakt" className="text-wine-red hover:text-wine-red-dark underline">
                Kontakt aufnehmen →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}