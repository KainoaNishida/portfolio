import React from 'react';

const LinesOfCode = () => {
  const languages = [
    { language: 'python', projects: 8, loc: 80000 },
    { language: 'c++', projects: 4, loc: 20000 },
    { language: 'java', projects: 3, loc: 22500 },
    { language: 'typescript', projects: 3, loc: 45000 },
    { language: 'sql', projects: 3, loc: 5000 },
  ];

  const total = languages.reduce((sum, lang) => sum + lang.loc, 0);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toLocaleString();
  };

  return (
    <div className="space-y-2">
      <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
        lines of code
      </div>
      <div className="space-y-1.5">
        {languages.map((lang) => (
          <div key={lang.language} className="flex items-baseline gap-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[5rem] flex-shrink-0">
              {lang.language}:
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
              {formatNumber(lang.loc)}
            </span>
          </div>
        ))}
        <div className="pt-1.5 mt-1.5 border-t border-dashed border-slate-300 dark:border-slate-700">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[5rem] flex-shrink-0">
              total:
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
              {formatNumber(total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinesOfCode;

