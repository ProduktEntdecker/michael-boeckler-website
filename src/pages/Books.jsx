import BookCard from '../components/BookCard';
import { books } from '../lib/books';

export default function Books() {
  const seriesBooks = books ? books.filter(book => book.series && book.series.includes('Hippolyt Hermanus')) : [];
  const standaloneBooks = books ? books.filter(book => book.series === 'Standalone' || !book.series) : [];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Werke</h1>

      {/* Hippolyt Hermanus Serie */}
      {seriesBooks.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-4">Die Hippolyt Hermanus Reihe</h2>
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
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-8">Weitere Bücher</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standaloneBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Purchase Info */}
      <section className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
        <p className="text-gray-700">
          Alle Bücher sind als Hardcover, Taschenbuch und E-Book erhältlich.
        </p>
        <p className="text-gray-600 mt-2">
          Signierte Exemplare können über das{' '}
          <a href="/kontakt" className="text-wine-red underline">Kontaktformular</a>{' '}
          angefragt werden.
        </p>
      </section>
    </div>
  );
}