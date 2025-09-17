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
          <h2 className="text-3xl font-serif mb-4">Hippolyt Hermanus Serie</h2>
          <p className="text-gray-700 mb-8">
            Weinkenner und Psychologe Hippolyt Hermanus löst Mordfälle im kulinarischen Milieu
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
    </div>
  );
}