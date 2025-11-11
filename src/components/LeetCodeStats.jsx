import React, { useState, useEffect } from 'react';

const LeetCodeStats = ({ username = 'kainoa' }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // LeetCode GraphQL API endpoint
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
        // Try using corsproxy.io which handles POST requests better
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
          setStats(data.data.matchedUser);
        } else {
          throw new Error('User not found');
        }
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, [username]);

  if (loading) {
    return (
      <div className="text-xs font-mono text-slate-500 dark:text-slate-500">
        loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-xs font-mono text-slate-500 dark:text-slate-500">
        {error}
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  // Extract stats
  const acStats = stats.submitStats?.acSubmissionNum || [];
  const easy = acStats.find(s => s.difficulty === 'Easy')?.count || 0;
  const medium = acStats.find(s => s.difficulty === 'Medium')?.count || 0;
  const hard = acStats.find(s => s.difficulty === 'Hard')?.count || 0;
  const total = easy + medium + hard;
  const ranking = stats.profile?.ranking || 'N/A';

  return (
    <div className="space-y-2">
      <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
        leetcode
      </div>
      <div className="space-y-1.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[4.5rem] flex-shrink-0">
            solved:
          </span>
          <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
            {total}
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[4.5rem] flex-shrink-0">
            easy:
          </span>
          <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
            {easy}
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[4.5rem] flex-shrink-0">
            medium:
          </span>
          <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
            {medium}
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[4.5rem] flex-shrink-0">
            hard:
          </span>
          <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
            {hard}
          </span>
        </div>
        {ranking !== 'N/A' && (
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[4.5rem] flex-shrink-0">
              rank:
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
              #{ranking.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCodeStats;

