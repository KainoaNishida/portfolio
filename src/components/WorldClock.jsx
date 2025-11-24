import React, { useState, useEffect, memo } from 'react';
import LeetCodeStats from './LeetCodeStats';
import LinesOfCode from './LinesOfCode';
import FermiQuestions from './FermiQuestions';
import TestScores from './TestScores';

const WorldClock = memo(() => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeZones = [
    { label: 'los angeles', zone: 'America/Los_Angeles' },
    { label: 'new york city', zone: 'America/New_York' },
    { label: 'tokyo', zone: 'Asia/Tokyo' },
    { label: 'seoul', zone: 'Asia/Seoul' },
  ];

  const formatTime = (date, timeZone) => {
    return date.toLocaleTimeString('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).toLowerCase();

  return (
    <div className="hidden lg:block fixed top-20 left-4 z-40">
      {/* Metrics Sidebar */}
      <div
        className="space-y-3 overflow-x-hidden"
        style={{ 
          width: '200px', 
          maxHeight: 'calc(100vh - 6.5rem)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
            {/* Date */}
            <div className="bg-slate-100/90 dark:bg-slate-1000/95 border border-dashed border-slate-300 dark:border-slate-700 rounded p-2.5 overflow-hidden flex-shrink-0" style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}>
              <div className="text-xs font-mono text-slate-700 dark:text-slate-300 break-words">
                {currentDate}
              </div>
            </div>
            
            {/* World Clock */}
            <div className="bg-slate-100/90 dark:bg-slate-1000/95 border border-dashed border-slate-300 dark:border-slate-700 rounded p-2.5 overflow-hidden flex-shrink-0" style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}>
              <div className="space-y-1.5">
                {timeZones.map((tz) => (
                  <div key={tz.label} className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-500 flex-shrink-0">
                      {tz.label}:
                    </span>
                    <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums tracking-wide whitespace-nowrap flex-shrink-0">
                      {formatTime(time, tz.zone)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* LeetCode Stats */}
            <div className="bg-slate-100/90 dark:bg-slate-1000/95 border border-dashed border-slate-300 dark:border-slate-700 rounded p-2.5 overflow-hidden flex-shrink-0" style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}>
              <LeetCodeStats />
            </div>
            
            {/* Lines of Code */}
            <div className="bg-slate-100/90 dark:bg-slate-1000/95 border border-dashed border-slate-300 dark:border-slate-700 rounded p-2.5 overflow-hidden flex-shrink-0" style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}>
              <LinesOfCode />
            </div>
            
            {/* Fermi Questions */}
            <div className="bg-slate-100/90 dark:bg-slate-1000/95 border border-dashed border-slate-300 dark:border-slate-700 rounded p-2.5 overflow-hidden flex-shrink-0" style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}>
              <FermiQuestions />
            </div>
            
            {/* Test Scores */}
            <div className="bg-slate-100/90 dark:bg-slate-1000/95 border border-dashed border-slate-300 dark:border-slate-700 rounded p-2.5 overflow-hidden flex-shrink-0" style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}>
              <TestScores />
            </div>
      </div>
    </div>
  );
});

WorldClock.displayName = 'WorldClock';

export default WorldClock;

