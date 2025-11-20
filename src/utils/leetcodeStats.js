/**
 * LeetCode Stats API utility
 * Fetches LeetCode stats and caches them for reuse
 */

// Cache for preloaded stats
let statsCache = null;
let fetchPromise = null;

/**
 * Fetches LeetCode stats from the GraphQL API
 */
export async function fetchLeetCodeStats(username = 'kainoa') {
  // Return cached stats if available
  if (statsCache) {
    return statsCache;
  }

  // If a fetch is already in progress, return that promise
  if (fetchPromise) {
    return fetchPromise;
  }

  // Start new fetch
  fetchPromise = (async () => {
    try {
      const query = `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
            }
            submitStats {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
              totalSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
      `;

      const variables = {
        username: username
      };

      // Use CORS proxy to bypass CORS restrictions
      const proxyUrl = 'https://corsproxy.io/?';
      const leetcodeUrl = encodeURIComponent('https://leetcode.com/graphql/');
      
      const response = await fetch(`${proxyUrl}${leetcodeUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch LeetCode stats');
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0].message || 'Failed to fetch stats');
      }

      if (data.data?.matchedUser) {
        statsCache = data.data.matchedUser;
        return statsCache;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
      throw error;
    } finally {
      fetchPromise = null;
    }
  })();

  return fetchPromise;
}

/**
 * Preloads LeetCode stats (non-blocking)
 * Call this during the loader phase to start fetching stats early
 */
export function preloadLeetCodeStats(username = 'kainoa') {
  // Start fetching but don't wait for it
  fetchLeetCodeStats(username).catch(err => {
    // Silently fail - component will handle retry if needed
    console.warn('Failed to preload LeetCode stats:', err);
  });
}

/**
 * Gets cached stats if available, otherwise returns null
 */
export function getCachedStats() {
  return statsCache;
}

/**
 * Clears the cache (useful for testing or forcing refresh)
 */
export function clearCache() {
  statsCache = null;
  fetchPromise = null;
}

