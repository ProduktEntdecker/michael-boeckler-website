import { useState, useEffect } from 'react';
import InstagramGrid from '../components/InstagramGrid';
import { fetchInstagramFeed } from '../lib/instagram';

export default function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadInstagramPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await fetchInstagramFeed(12);
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error('Error loading Instagram posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadInstagramPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="heading-xl text-center mb-4">Aktuelles</h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Folgen Sie mir auf Instagram für aktuelle Einblicke, Leseproben,
        Veranstaltungshinweise und Neuigkeiten aus der Welt der Bücher.
      </p>

      {/* Instagram Feed */}
      <section className="mb-12">
        <InstagramGrid posts={posts} loading={loading} error={error} />
      </section>

      {/* Upcoming Events */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="heading-lg mb-6">Kommende Veranstaltungen</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-wine-red pl-4">
            <h3 className="font-semibold text-lg">Lesung: "Das Geheimnis der alten Mühle"</h3>
            <p className="text-gray-600">15. März 2025 • 19:30 Uhr</p>
            <p className="text-gray-700 mt-2">
              Buchhandlung Hugendubel, Frankfurt am Main
            </p>
            <a
              href="/kontakt"
              className="link-wine text-sm mt-2 inline-block"
            >
              Platz reservieren →
            </a>
          </div>

          <div className="border-l-4 border-wine-red pl-4">
            <h3 className="font-semibold text-lg">Krimifestival München</h3>
            <p className="text-gray-600">22.-24. April 2025</p>
            <p className="text-gray-700 mt-2">
              Podiumsdiskussion und Signierstunde
            </p>
            <a
              href="https://krimifestival-muenchen.de"
              target="_blank"
              rel="noopener noreferrer"
              className="link-wine text-sm mt-2 inline-block"
            >
              Mehr Informationen →
            </a>
          </div>

          <div className="border-l-4 border-wine-red pl-4">
            <h3 className="font-semibold text-lg">Online-Lesung via Zoom</h3>
            <p className="text-gray-600">10. Mai 2025 • 20:00 Uhr</p>
            <p className="text-gray-700 mt-2">
              Kostenlose Teilnahme für Newsletter-Abonnenten
            </p>
            <a
              href="/newsletter"
              className="link-wine text-sm mt-2 inline-block"
            >
              Newsletter abonnieren →
            </a>
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="bg-cream-dark p-8 rounded-lg">
        <h2 className="heading-lg mb-6">Presse & Medien</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Interview im Deutschlandfunk</h3>
            <p className="text-gray-700 text-sm mb-2">
              "Die Kunst des Regionalkrimis" - Ein Gespräch über Schauplätze und Authentizität
            </p>
            <a
              href="#"
              className="link-wine text-sm"
            >
              Zum Interview →
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Rezension in der FAZ</h3>
            <p className="text-gray-700 text-sm mb-2">
              "Böckler versteht es meisterhaft, Spannung und Lokalkolorit zu verbinden"
            </p>
            <a
              href="#"
              className="link-wine text-sm"
            >
              Zur Rezension →
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Podcast: Krimi-Couch</h3>
            <p className="text-gray-700 text-sm mb-2">
              Folge 127: Im Gespräch mit Michael Böckler
            </p>
            <a
              href="#"
              className="link-wine text-sm"
            >
              Anhören →
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-2">SWR Fernsehen</h3>
            <p className="text-gray-700 text-sm mb-2">
              "Kaffee oder Tee" - Buchtipp der Woche
            </p>
            <a
              href="#"
              className="link-wine text-sm"
            >
              Zur Sendung →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}