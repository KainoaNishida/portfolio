import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    return null;
  }
  
  const { theme, toggleTheme } = context;
  
  return (
    <motion.button
      className={`w-10 h-10 flex items-center justify-center transition-all duration-300 outline-none focus:outline-none
        ${theme === 'light' 
          ? 'text-slate-600 hover:text-orange-500' 
          : 'text-yellow-400 hover:text-orange-500'
        }`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg 
          className="w-5 h-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      ) : (
        <svg 
          className="w-5 h-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
