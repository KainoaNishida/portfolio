import React from 'react';

const FermiQuestions = () => {
  const stats = [
    { label: 'caffeine', value: 342597, unit: 'mg' },
    { label: 'music', value: 599930, unit: 'min' },
    { label: 'sleeping', value: 75151, unit: 'hrs' },
    { label: 'words read', value: 26622726, unit: '' },
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'm';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toLocaleString();
  };

  return (
    <div className="space-y-2">
      <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
        fermi questions
      </div>
      <div className="space-y-1.5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[5rem] flex-shrink-0">
              {stat.label}:
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
              {formatNumber(stat.value)}{stat.unit && ` ${stat.unit}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FermiQuestions;

