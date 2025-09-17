import Skeleton from './Skeleton';
import { truncateCaption } from '../lib/instagram';

export default function InstagramGrid({ posts, loading, error }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">
          Aktuell können keine Instagram-Beiträge geladen werden.
        </p>
        <a
          href="https://www.instagram.com/michaelboeckler"
          target="_blank"
          rel="noopener noreferrer"
          className="text-wine-red underline hover:text-wine-red-dark"
        >
          Besuchen Sie mich auf Instagram →
        </a>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Keine Beiträge verfügbar.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100"
        >
          <img
            src={post.thumbnail_url}
            alt={truncateCaption(post.caption, 50) || 'Instagram Beitrag'}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
          {post.media_type === 'VIDEO' && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </a>
      ))}
    </div>
  );
}