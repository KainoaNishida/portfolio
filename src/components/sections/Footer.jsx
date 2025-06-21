import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Kai Nishida. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 