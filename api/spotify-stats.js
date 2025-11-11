// Example serverless function for Vercel/Netlify
// This handles Spotify API calls securely on the backend

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN; // You'll get this from initial OAuth flow

  try {
    // Refresh access token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN
      })
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to refresh token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Fetch user's top artists
    const topArtistsResponse = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=3', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // Fetch user's top tracks
    const topTracksResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=3', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // Fetch user profile for total listening time (if available)
    const profileResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const [topArtists, topTracks, profile] = await Promise.all([
      topArtistsResponse.json(),
      topTracksResponse.json(),
      profileResponse.json()
    ]);

    // Calculate approximate listening time (Spotify doesn't provide exact total)
    // You might need to use a third-party service or estimate based on playlists

    const stats = {
      topArtists: topArtists.items?.map(artist => artist.name.toLowerCase()) || [],
      topTracks: topTracks.items?.map(track => track.name.toLowerCase()) || [],
      totalMinutes: null, // Spotify doesn't provide this directly
      topGenre: topArtists.items?.[0]?.genres?.[0] || 'unknown',
      profile: {
        displayName: profile.display_name,
        followers: profile.followers?.total || 0
      }
    };

    return res.status(200).json(stats);
  } catch (error) {
    console.error('Spotify API error:', error);
    return res.status(500).json({ error: 'Failed to fetch Spotify stats' });
  }
}

