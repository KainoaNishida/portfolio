import React from 'react';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).toLowerCase();

  return (
    <footer className="mt-16 pt-8 border-t border-dashed border-slate-300 dark:border-slate-700">
      <div className="font-mono text-xs text-slate-600 dark:text-slate-400 space-y-2">
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="mailto:kainoanishida@gmail.com" 
            className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
            <svg className="inline-block w-2 h-2 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/kainoa-nishida" 
            className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
            <svg className="inline-block w-2 h-2 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a 
            href="https://github.com/KainoaNishida" 
            className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
            <svg className="inline-block w-2 h-2 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div className="text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Kainoa Nishida
        </div>
      </div>
    </footer>
  );
};

export default Footer; 