import React, { useState, useEffect } from 'react';
import { fetchLeetCodeStats, getCachedStats } from '../utils/leetcodeStats';

const LeetCodeStats = ({ username = 'kainoa' }) => {
  const [stats, setStats] = useState(() => getCachedStats()); // Initialize with cached stats if available
  const [loading, setLoading] = useState(!stats); // Only show loading if we don't have cached stats
  const [error, setError] = useState(null);

  useEffect(() => {
    // If we already have cached stats, use them
    const cached = getCachedStats();
    if (cached) {
      setStats(cached);
      setLoading(false);
      return;
    }

    // Otherwise, fetch the stats
    const loadStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchLeetCodeStats(username);
        setStats(data);
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
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

