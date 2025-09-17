import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-4">Michael Böckler</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Autor kulinarischer Kriminalromane
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Wo Verbrechen auf Genuss trifft – spannende Kriminalfälle aus der Welt des Weins,
          der Gastronomie und der Kultur Italiens und Frankreichs.
        </p>
        <Link to="/buecher" className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
          Werke entdecken
        </Link>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-6 text-center">Über Michael Böckler</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Michael Böckler, geboren 1949 in Berlin und wohnhaft in München, verbindet als
            Schriftsteller und Journalist auf einzigartige Weise spannende Kriminalfälle mit
            touristischen und kulinarischen Informationen.
          </p>
          <p>
            Seine Romane führen die Leser in die genussvolle Welt des Weins und der gehobenen
            Gastronomie – von den sonnigen Weinbergen der Provence bis zu den malerischen
            Landschaften Südtirols. Mit seinen beiden Hauptserien um den Weinkenner Hippolyt
            Hermanus und den exzentrischen Baron Emilio von Ritzfeld-Hechenstein hat er sich
            als Meister des kulinarischen Krimis etabliert.
          </p>
          <p>
            Seine Leidenschaft für Italien, Frankreich, Wein und Kultur durchzieht alle seine
            Werke und macht jeden Roman zu einer Reise für alle Sinne.
          </p>
        </div>
        <div className="text-center mt-8">
          <Link to="/ueber" className="text-black underline hover:no-underline">
            Mehr erfahren →
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-100 py-12 -mx-4 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-serif mb-2">Hippolyt Hermanus Serie</h3>
            <p className="text-gray-600 mb-4">
              Weinkenner und Psychologe löst Mordfälle im kulinarischen Milieu
            </p>
            <Link to="/buecher" className="text-black underline">
              Zu den Büchern →
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-2">Aktuelles</h3>
            <p className="text-gray-600 mb-4">
              Lesungen, Veranstaltungen und Neuigkeiten aus der Welt der Kriminalliteratur
            </p>
            <Link to="/aktuelles" className="text-black underline">
              Mehr erfahren →
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-2">Kontakt</h3>
            <p className="text-gray-600 mb-4">
              Für Anfragen zu Lesungen, Interviews oder kulinarischen Veranstaltungen
            </p>
            <Link to="/kontakt" className="text-black underline">
              Kontakt aufnehmen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}