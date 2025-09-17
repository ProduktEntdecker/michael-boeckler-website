/**
 * Instagram integration helpers
 * Client-side utilities for rendering Instagram posts
 */

export function mapInstagramPosts(rawData) {
  if (!rawData?.data) return [];

  return rawData.data.map(post => ({
    id: post.id,
    media_url: post.media_url,
    media_type: post.media_type,
    permalink: post.permalink,
    caption: post.caption || '',
    timestamp: post.timestamp,
    thumbnail_url: post.thumbnail_url || post.media_url
  }));
}

export function formatInstagramDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString('de-DE', options);
}

export function truncateCaption(caption, maxLength = 100) {
  if (!caption) return '';
  if (caption.length <= maxLength) return caption;
  return caption.substring(0, maxLength).trim() + '...';
}

export async function fetchInstagramFeed(limit = 12) {
  try {
    const response = await fetch(`/api/instagram?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram feed');
    }
    const data = await response.json();
    return mapInstagramPosts(data);
  } catch (error) {
    console.error('Instagram fetch error:', error);
    return [];
  }
}