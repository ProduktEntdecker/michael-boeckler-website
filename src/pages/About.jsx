export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-xl text-center mb-12">Über Michael Böckler</h1>

      {/* Author Image */}
      <div className="mb-12">
        <img
          src="/assets/images/author-portrait-large.jpg"
          alt="Michael Böckler"
          className="w-full max-w-md mx-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Biography */}
      <section className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <p>
          Michael Böckler wurde 1965 in einer kleinen Stadt am Rhein geboren.
          Schon früh entdeckte er seine Leidenschaft für das geschriebene Wort
          und verbrachte unzählige Stunden in der örtlichen Bibliothek, vertieft
          in Kriminalromane der großen Meister.
        </p>

        <p>
          Nach dem Studium der Germanistik und Geschichte arbeitete er zunächst
          als Journalist für verschiedene Tageszeitungen, bevor er sich ganz dem
          Schreiben von Romanen widmete. Seine journalistische Erfahrung prägt
          bis heute seinen präzisen, atmosphärischen Schreibstil.
        </p>

        <h2 className="heading-md mt-8 mb-4">Der Weg zum Krimiautor</h2>

        <p>
          Der Durchbruch gelang ihm 2018 mit dem ersten Band der Hippolyt Hermanus-Reihe,
          "Tod im Weinberg". Die Figur des eigenwilligen Kommissars, der seine Fälle
          mit einer Mischung aus Intuition und akribischer Ermittlungsarbeit löst,
          begeisterte Leser und Kritiker gleichermaßen.
        </p>

        <p>
          Die Inspiration für seine Geschichten findet Böckler auf ausgedehnten
          Wanderungen durch die Weinberge und historischen Städte Süddeutschlands.
          "Die Landschaft erzählt ihre eigenen Geschichten", sagt er. "Man muss
          nur genau hinhören."
        </p>

        <h2 className="heading-md mt-8 mb-4">Auszeichnungen</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>2019: Deutscher Krimipreis - Nominierung für "Tod im Weinberg"</li>
          <li>2020: Goldene Feder - Bester Regionalkrimi</li>
          <li>2022: Publikumspreis der Krimi-Couch</li>
          <li>2024: Friedrich-Glauser-Preis - Ehrende Erwähnung</li>
        </ul>

        <h2 className="heading-md mt-8 mb-4">Schreibphilosophie</h2>

        <p>
          "Ein guter Krimi ist wie ein guter Wein", erklärt Böckler seine
          Philosophie. "Er braucht Zeit zum Reifen, die richtigen Zutaten
          und vor allem Leidenschaft bei der Herstellung. Ich möchte meinen
          Lesern nicht nur Spannung bieten, sondern sie in eine Welt entführen,
          in der sie für einige Stunden verweilen möchten."
        </p>

        <h2 className="heading-md mt-8 mb-4">Privat</h2>

        <p>
          Michael Böckler lebt mit seiner Familie in einem renovierten Winzerhaus
          in der Pfalz. Wenn er nicht schreibt, widmet er sich seinem Garten,
          kocht leidenschaftlich gern oder erkundet auf dem Fahrrad die Umgebung.
          Er ist Mitglied im Syndikat der deutschsprachigen Krimiautoren und
          engagiert sich für die Leseförderung an Schulen.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="mt-12 p-8 bg-cream-dark rounded-lg text-center">
        <h3 className="heading-md mb-4">Kontakt aufnehmen</h3>
        <p className="text-gray-700 mb-6">
          Für Lesungen, Interviews oder andere Anfragen erreichen Sie mich über das Kontaktformular.
        </p>
        <a href="/kontakt" className="btn-primary inline-block">
          Zum Kontaktformular
        </a>
      </section>
    </div>
  );
}