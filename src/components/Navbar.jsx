import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'intro', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Background' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="flex flex-col gap-10">
      {navItems.map(({ id, label }) => (
        <motion.button
          key={id}
          onClick={() => scrollToSection(id)}
          onMouseEnter={() => setHoveredItem(id)}
          onMouseLeave={() => setHoveredItem(null)}
          className={`relative text-base font-medium transition-colors duration-200 outline-none focus:outline-none
            ${activeSection === id 
              ? 'text-orange-500' 
              : 'text-slate-600 dark:text-slate-400'
            }`}
          style={{ 
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)'
          }}
        >
          <span className="relative">
            {label}
            {(activeSection === id || hoveredItem === id) && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0, height: '0%' }}
                animate={{ opacity: 1, height: '100%' }}
                exit={{ opacity: 0, height: '0%' }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-[3px] h-full bg-orange-500" />
              </motion.div>
            )}
          </span>
        </motion.button>
      ))}
    </nav>
  );
};

export default Navbar;
