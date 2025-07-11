import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpotifyWidget = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 rounded-2xl overflow-hidden shadow-xl bg-white/10 dark:bg-slate-800/10 backdrop-blur-lg border border-white/20 dark:border-slate-700/30"
          style={{ width: '320px' }}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent z-10 flex items-center px-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="100%"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-500"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="text-white/90 text-sm font-medium">Now Playing</span>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="relative">
            <iframe
              src="https://open.spotify.com/embed/playlist/2X1WMvXCmZBO4hVRYcHu6K?utm_source=generator&theme=0"
              width="100%"
              height="900"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl bg-transparent"
            />
          </div>

          {/* Gradient Overlay for smoother edges */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpotifyWidget; 