import React, { useState, useEffect } from 'react';

const SpotifyStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpotifyStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch from your backend endpoint
        // Update this URL to match your deployed serverless function
        const apiUrl = import.meta.env.VITE_SPOTIFY_API_URL || '/api/spotify-stats';
        
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch Spotify stats');
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error('Error fetching Spotify stats:', err);
        setError(err.message);
        // Fallback to default stats if API fails
        setStats({
          topArtists: ['the strokes', 'arctic monkeys', 'interpol'],
          topTracks: ['ode to the mets', 'the modern age', 'reptilia'],
          totalMinutes: null,
          topGenre: 'indie rock'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyStats();
    // Refresh every 5 minutes
    const interval = setInterval(fetchSpotifyStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatMinutes = (minutes) => {
    if (!minutes) return 'N/A';
    if (minutes >= 1000) {
      return (minutes / 1000).toFixed(1) + 'k';
    }
    return minutes.toLocaleString();
  };

  if (loading && !stats) {
    return (
      <div className="space-y-2">
        <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
          spotify
        </div>
        <div className="text-xs font-mono text-slate-500 dark:text-slate-500">
          loading...
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
        spotify
      </div>
      {error && (
        <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
          {error}
        </div>
      )}
      <div className="space-y-1.5">
        {stats.totalMinutes && (
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[5rem]">
              minutes:
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums">
              {formatMinutes(stats.totalMinutes)}
            </span>
          </div>
        )}
        {stats.topGenre && (
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[5rem]">
              genre:
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
              {stats.topGenre}
            </span>
          </div>
        )}
        {stats.topArtists && stats.topArtists.length > 0 && (
          <div className="pt-1.5 mt-1.5 border-t border-dashed border-slate-300 dark:border-slate-700">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-1">
              top artists:
            </div>
            <div className="space-y-1">
              {stats.topArtists.slice(0, 3).map((artist, index) => (
                <div key={index} className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  {artist}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotifyStats;

