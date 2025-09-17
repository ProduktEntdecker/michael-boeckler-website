/**
 * Instagram API integration
 * Server-side route for fetching Instagram posts via Basic Display API
 */

export async function fetchInstagramPosts(limit = 12) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    throw new Error('Instagram access token not configured');
  }

  const fields = 'id,caption,media_url,media_type,permalink,thumbnail_url,timestamp';
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.text();
      console.error('Instagram API error:', error);
      throw new Error(`Instagram API returned ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch Instagram posts:', error);
    throw new Error('Failed to fetch Instagram posts');
  }
}

// API route handler for Vite/Express
export async function handleInstagramRoute(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 12;
    const posts = await fetchInstagramPosts(limit);

    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.json(posts);
  } catch (error) {
    console.error('Instagram route error:', error);
    res.status(500).json({
      error: 'Failed to fetch Instagram posts',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// Token refresh helper (Instagram tokens expire after 60 days)
export async function refreshInstagramToken() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    throw new Error('No token to refresh');
  }

  const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('Token refreshed successfully. Expires in:', data.expires_in, 'seconds');

    // You should save the new token to your environment or database here
    return data.access_token;
  } catch (error) {
    console.error('Failed to refresh Instagram token:', error);
    throw error;
  }
}