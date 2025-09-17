import NewsletterForm from '../components/NewsletterForm';

export default function Newsletter() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-xl text-center mb-12">Newsletter</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Newsletter Benefits */}
        <div>
          <h2 className="heading-md mb-6">Exklusive Vorteile für Abonnenten</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-wine-red mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Exklusive Leseproben</h3>
                <p className="text-gray-700 text-sm">
                  Lesen Sie als Erste Auszüge aus neuen Büchern, noch vor der Veröffentlichung.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-wine-red mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Veranstaltungshinweise</h3>
                <p className="text-gray-700 text-sm">
                  Erfahren Sie zuerst von Lesungen, Signierstunden und Online-Events.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-wine-red mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Blick hinter die Kulissen</h3>
                <p className="text-gray-700 text-sm">
                  Erhalten Sie Einblicke in meinen Schreibprozess und die Entstehung neuer Geschichten.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-wine-red mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Gewinnspiele</h3>
                <p className="text-gray-700 text-sm">
                  Nehmen Sie an exklusiven Verlosungen signierter Bücher und Buchpakete teil.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-wine-red mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Persönlicher Kontakt</h3>
                <p className="text-gray-700 text-sm">
                  Stellen Sie Fragen und erhalten Sie persönliche Antworten in speziellen Q&A-Runden.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="heading-md mb-4">Jetzt anmelden</h2>
          <p className="text-gray-700 mb-6">
            Der Newsletter erscheint etwa einmal im Monat.
            Sie können sich jederzeit wieder abmelden.
          </p>
          <NewsletterForm source="newsletter_page" />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16 bg-cream-dark p-8 rounded-lg">
        <h2 className="heading-md mb-6">Häufige Fragen</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Wie oft erscheint der Newsletter?</h3>
            <p className="text-gray-700 text-sm">
              Der Newsletter erscheint in der Regel einmal im Monat, bei besonderen Anlässen
              auch mal öfter. Ich achte aber darauf, Ihr Postfach nicht zu überfluten.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Kann ich mich wieder abmelden?</h3>
            <p className="text-gray-700 text-sm">
              Selbstverständlich! In jedem Newsletter finden Sie einen Abmeldelink.
              Mit einem Klick sind Sie abgemeldet - ohne Angabe von Gründen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Was passiert mit meinen Daten?</h3>
            <p className="text-gray-700 text-sm">
              Ihre E-Mail-Adresse wird ausschließlich für den Newsletter-Versand verwendet
              und niemals an Dritte weitergegeben. Weitere Informationen finden Sie in
              unserer <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Kostet der Newsletter etwas?</h3>
            <p className="text-gray-700 text-sm">
              Nein, der Newsletter ist völlig kostenlos und verpflichtet Sie zu nichts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}