import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../TypewriterText';

const Header = () => {
  const typewriterWords = [
    "Designer",
    "Adventurer",
    "Researcher",
    "Soccer Player",
    "Snowboarder",
    "Barista",
    "Gamer"
  ];

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center py-20">
      <div className="container-header">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500">Kai Nishida</span>
            </h1>
            <div className="text-2xl md:text-3xl mb-6">
              <span className="text-slate-600 dark:text-slate-300">Developer & </span>
              <span className="inline-block min-w-[200px] text-left relative text-orange-600 dark:text-orange-400">
                <TypewriterText words={typewriterWords} />
                <span className="animate-pulse text-yellow-500">|</span>
              </span>
            </div>

            {/* Info Badges */}
            <div className="flex flex-col space-y-3 mb-8">
            {/* Second Row - Professional Info */}
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                  </svg>
                  <span className="text-sm">Incoming SDE Intern at Amazon</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Researcher at Zhang Lab</span>
                </div>
              </div>

              {/* First Row - Personal Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  <span className="text-sm">UC Irvine '26</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  <span className="text-sm">20 Years Old</span>
                </div>
              </div>
              
              
            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="btn bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white hover:from-orange-600 hover:via-orange-500 hover:to-yellow-600"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline border-orange-200 dark:border-orange-800 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-orange-500 shadow-xl bg-white dark:bg-slate-800">
              <img
                src="/avatar.png"
                alt="Kai Nishida"
                className="w-full h-full object-cover object-center scale-110 translate-y-2"
              />
            </div>
            {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 animate-pulse" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header; 