export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-xl text-center mb-12">Impressum</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="heading-md mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Michael Böckler<br />
            Autor<br />
            Musterstraße 123<br />
            67890 Musterstadt<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="heading-md mb-4">Kontakt</h2>
          <p>
            E-Mail: kontakt@michael-boeckler.de<br />
            Telefon: Auf Anfrage
          </p>
        </section>

        <section>
          <h2 className="heading-md mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Michael Böckler<br />
            Musterstraße 123<br />
            67890 Musterstadt
          </p>
        </section>

        <section>
          <h2 className="heading-md mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX
          </p>
        </section>

        <section>
          <h2 className="heading-md mb-4">Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p>
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
            Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
            erstellt wurden, werden die Urheberrechte Dritter beachtet.
          </p>
        </section>

        <section>
          <h2 className="heading-md mb-4">Haftungsausschluss</h2>

          <h3 className="font-semibold mt-4 mb-2">Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
            wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
            fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="heading-md mb-4">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="link-wine">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}