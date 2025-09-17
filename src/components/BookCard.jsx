import { trackBookLinkClick } from '../lib/analytics';
import { addAffiliateId } from '../lib/books';

export default function BookCard({ book }) {
  const affiliateId = import.meta.env.VITE_HUGENDUBEL_AFFILIATE_ID;
  const bookUrl = addAffiliateId(book.hugendubelUrl, affiliateId);

  const handleClick = () => {
    trackBookLinkClick(book.title);
  };

  return (
    <article className="group book-card p-4">
      <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
        <img
          src={book.cover}
          alt={`Cover: ${book.title}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-semibold">{book.title}</h3>
        {book.series && (
          <p className="text-sm text-gray-600">
            {book.series} Band {book.seriesNumber}
          </p>
        )}
        <p className="line-clamp-3 text-sm text-gray-700">{book.description}</p>
        <div className="pt-2 space-y-2">
          <a
            href={bookUrl}
            rel="noopener noreferrer"
            target="_blank"
            onClick={handleClick}
            className="inline-flex items-center text-wine-red hover:text-wine-red-dark underline font-medium"
          >
            Bei Hugendubel kaufen
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          {book.rowohltUrl && (
            <a
              href={book.rowohltUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center text-dark-blue hover:text-dark-blue-dark underline font-medium ml-4"
            >
              Bei Rowohlt ansehen
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}