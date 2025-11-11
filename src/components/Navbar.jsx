import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navItems = [
    { path: '/', label: 'home' },
    { path: '/timeline', label: 'experience' },
    { path: '/projects', label: 'projects' },
    { path: '/research', label: 'research' },
    { path: '/background', label: 'background' },
    { path: '/skills', label: 'skills' },
    { path: '/resume', label: 'resume' },
    { path: '/blog', label: 'blog' },
    { path: '/contact', label: 'contact' }
  ];

  const isActive = (path) => {
    // Remove trailing slash from pathname for comparison
    const currentPath = location.pathname.replace(/\/$/, '') || '/';
    const checkPath = path.replace(/\/$/, '') || '/';
    
    if (checkPath === '/') {
      return currentPath === '/' || currentPath === '';
    }
    return currentPath.startsWith(checkPath);
  };

  return (
    <nav className="flex flex-row gap-2 sm:gap-4 font-mono text-xs sm:text-sm overflow-x-auto scrollbar-hide px-2">
      {navItems.map(({ path, label }) => {
        const active = isActive(path);
        return (
          <motion.button
            key={path}
            onClick={() => navigate(path)}
            onMouseEnter={() => setHoveredItem(path)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative transition-all duration-200 outline-none focus:outline-none px-3 sm:px-2 py-2 sm:py-1 flex-shrink-0 rounded
              ${active 
                ? 'text-orange-500 border border-dashed border-orange-500' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent'
              }`}
          >
            <span className="relative block whitespace-nowrap">
              {label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default Navbar;
