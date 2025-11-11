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
    <nav className="flex flex-row gap-2 sm:gap-4 font-mono text-xs sm:text-sm overflow-x-auto scrollbar-hide px-1">
      {navItems.map(({ path, label }) => {
        const active = isActive(path);
        return (
          <motion.button
            key={path}
            onClick={() => navigate(path)}
            onMouseEnter={() => setHoveredItem(path)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative transition-colors duration-200 outline-none focus:outline-none px-2 sm:px-2 py-1 flex-shrink-0
              ${active 
                ? 'text-orange-500' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
          >
            <span className="relative block">
              {label}
              {active && (
                <motion.div
                  className="absolute border border-dashed border-orange-500 rounded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ 
                    left: '-2px',
                    right: '-2px',
                    top: '-2px',
                    bottom: '-2px'
                  }}
                />
              )}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default Navbar;
