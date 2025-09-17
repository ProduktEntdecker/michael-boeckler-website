import BookCard from '../components/BookCard';
import { books } from '../lib/books';

export default function Books() {
  const seriesBooks = books.filter(book => book.series === 'Hippolyt Hermanus');
  const standaloneBooks = books.filter(book => !book.series);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="heading-xl text-center mb-12">Bücher</h1>

      {/* Hippolyt Hermanus Serie */}
      {seriesBooks.length > 0 && (
        <section className="mb-16">
          <h2 className="heading-lg mb-8">Die Hippolyt Hermanus Reihe</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Folgen Sie Kommissar Hippolyt Hermanus durch spannende Fälle,
            die ihn durch malerische Weinberge und historische Städte führen.
            Jeder Band kann auch einzeln gelesen werden.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seriesBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Standalone Books */}
      {standaloneBooks.length > 0 && (
        <section>
          <h2 className="heading-lg mb-8">Weitere Bücher</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standaloneBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Reading Order Info */}
      <section className="mt-16 bg-cream-dark p-8 rounded-lg">
        <h3 className="heading-md mb-4">Lesereihenfolge</h3>
        <p className="text-gray-700 mb-4">
          Die Hippolyt Hermanus-Bücher können in beliebiger Reihenfolge gelesen werden,
          da jeder Fall in sich abgeschlossen ist. Für das beste Leseerlebnis empfehle
          ich jedoch die chronologische Reihenfolge:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {seriesBooks.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> ({book.year})
            </li>
          ))}
        </ol>
      </section>

      {/* Purchase Info */}
      <section className="mt-12 text-center">
        <p className="text-gray-600">
          Alle Bücher sind als Hardcover, Taschenbuch und E-Book erhältlich.
        </p>
        <p className="text-gray-600 mt-2">
          Signierte Exemplare können über das{' '}
          <a href="/kontakt" className="link-wine">Kontaktformular</a>{' '}
          angefragt werden.
        </p>
      </section>
    </div>
  );
}