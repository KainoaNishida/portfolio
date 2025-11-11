import React from 'react';

const TestScores = () => {
  const testScores = [
    { label: 'sat', value: '1580' },
    { label: 'act', value: '35' },
    { label: 'gre', value: 'pending' },
  ];

  return (
    <div className="space-y-2">
      <div className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">
        test scores
      </div>
      <div className="space-y-1.5">
        {testScores.map((test, index) => (
          <div key={index} className="flex items-baseline gap-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[4rem] flex-shrink-0">
              {test.label}:
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
              {test.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestScores;

