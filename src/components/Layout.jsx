import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import WorldClock from './WorldClock';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-1000 text-slate-900 dark:text-white">
      {/* World Clock */}
      <WorldClock />
      
      {/* Name - Hidden on small screens, fixed on top */}
      <div className="fixed top-4 left-4 sm:left-6 z-[60] hidden lg:block">
        <h1 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono lowercase whitespace-nowrap">
          kainoa nishida<span className="text-orange-500">.</span>
        </h1>
      </div>
      
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-50/95 dark:bg-slate-1000/95" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
        <div className="flex items-center justify-center px-2 sm:px-4 md:px-6 py-3 sm:py-4 relative min-h-[3.5rem] sm:min-h-[4rem]">
          <div className="flex-1 flex items-center justify-center min-w-0 px-6 sm:px-8 md:px-12 lg:px-16">
            <Navbar />
          </div>
          <div className="absolute right-2 sm:right-4 md:right-6 flex-shrink-0 z-10">
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Main Content - Centered in full screen */}
      <div className="pb-16 w-full pt-16 sm:pt-20">
        <div className="max-w-2xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

