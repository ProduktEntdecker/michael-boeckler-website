import BookCard from '../components/BookCard';
import { books } from '../lib/books';

export default function Books() {
  const seriesBooks = books ? books.filter(book => book.series && book.series.includes('Hippolyt Hermanus')) : [];
  const standaloneBooks = books ? books.filter(book => book.series === 'Standalone' || !book.series) : [];

  return (
    <div className="max-w-7xl mx-auto -mt-8">
      <div className="bg-cream py-12 -mx-4 px-4 mb-12">
        <h1 className="font-serif text-5xl md:text-6xl text-center text-wine-red">Werke</h1>
      </div>

      {/* Hippolyt Hermanus Serie */}
      {seriesBooks.length > 0 && (
        <section className="mb-16">
          <h2 className="font-serif text-4xl mb-6 text-dark-blue">Die Hippolyt Hermanus Reihe</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl leading-relaxed">
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
          <h2 className="font-serif text-4xl mb-10 text-dark-blue">Weitere Bücher</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standaloneBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Purchase Info */}
      <section className="mt-16 bg-white border border-gray-200 p-10 text-center">
        <h3 className="font-serif text-2xl mb-4 text-wine-red">Erhältlich in allen Formaten</h3>
        <p className="text-gray-700 text-lg mb-2">
          Alle Bücher sind als Hardcover, Taschenbuch und E-Book erhältlich.
        </p>
        <p className="text-gray-600">
          Signierte Exemplare können über das{' '}
          <a href="/kontakt" className="text-wine-red hover:text-wine-red-dark underline">Kontaktformular</a>{' '}
          angefragt werden.
        </p>
      </section>
    </div>
  );
}