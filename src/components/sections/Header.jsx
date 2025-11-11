import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    `${import.meta.env.BASE_URL}pfp.jpg`,
    `${import.meta.env.BASE_URL}avatar.png`
  ];

  const toggleImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="intro" className="py-12">
      <div>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h1 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
            kainoa nishida
            </h1>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            software engineer, researcher, and builder
          </p>
          
          {/* Profile Image - Centered on mobile, floating on desktop */}
          <div className="flex justify-center mb-6 md:hidden">
            <div className="relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Kainoa Nishida"
                  className="w-32 rounded-full border-2 border-slate-300 dark:border-slate-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </AnimatePresence>
              <button
                onClick={toggleImage}
                className="absolute bottom-2 right-2 bg-slate-900/70 dark:bg-slate-100/70 text-white dark:text-slate-900 rounded-full p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity touch-manipulation"
                aria-label="Switch profile photo"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Introduction Text with Floating Image */}
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-3 relative">
            {/* Floating Profile Image - Desktop only */}
            <div className="hidden md:block float-right ml-4 mb-2 relative group mt-10">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Kainoa Nishida"
                  className="w-32 sm:w-40 rounded-full border-2 border-slate-300 dark:border-slate-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
                </AnimatePresence>
                <button
                  onClick={toggleImage}
                  className="absolute bottom-2 right-2 bg-slate-900/70 dark:bg-slate-100/70 text-white dark:text-slate-900 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity touch-manipulation"
                  aria-label="Switch profile photo"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
            <p>
              aloha! welcome to my corner of the internet! i'm kai, and i love building things.
            </p>
            
            <p>
              i'm a student at the <a href="https://www.uci.edu/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">university of california, irvine<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>. i've worked as a software development engineer intern at <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">amazon<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>, a software engineer with <a href="https://ctc-uci.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">commit the change<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> partnering with local nonprofits, and a researcher in the <a href="https://www.ics.uci.edu/~jingz31/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">zhang lab<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> applying machine learning and deep learning to biology.
            </p>
            
            <p>
              and, i also love math. for example, i like doing random fermi questions, which you can find on the left. the general outline is to start with a reasonable fixed point, then reason through the details to land on an estimate. i used the same approach for those "lines of code" estimates, so take them with a grain of salt :)
            </p>
            
            <p>
              i'm excited about thoughtful software, learning new tools, and connecting with people. when i'm not coding, i'm gaming with friends, bouldering, outside somewhere, or getting a little too competitive on the soccer field.
            </p>
            
            <p>
              this site started as a portfolio, but i'd like it to grow into a running journal of what i'm building and learning. feel free to poke around - <Link to="/projects" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">projects<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>, <Link to="/research" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">research<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>, <Link to="/skills" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">skills<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>, <Link to="/background" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">background<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link> - it's all here.
            </p>
            
            <p className="mt-6">
              —kainoa
            </p>
            {/* Clearfix for floating image */}
            <div className="clear-both"></div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Header; 