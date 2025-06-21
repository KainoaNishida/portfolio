import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NowPlaying = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Placeholder song data
  const songData = {
    title: "Daylight",
    artist: "Taylor Swift",
    album: "Lover",
    coverArt: "https://placehold.co/300x300/87CEEB/FFF?text=Album+Cover",
    duration: "4:53"
  };
  
  return (
    <motion.div 
      className={`fixed bottom-4 left-4 z-50 rounded-lg overflow-hidden transition-all duration-300 ${
        isExpanded ? 'w-60' : 'w-auto'
      } bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      role="complementary"
      aria-label="Now playing music information"
    >
      <button 
        className={`w-full flex items-center p-2 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 ${
          isExpanded ? 'bg-gray-50 dark:bg-gray-700' : 'justify-center'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Collapse music player" : "Expand music player"}
      >
        {/* Always visible music icon */}
        <div className={`flex-shrink-0 ${isExpanded ? 'mr-2' : ''}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 text-sky-500 dark:text-sky-400`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" 
            />
          </svg>
        </div>
        
        {/* Only visible when expanded */}
        {isExpanded ? (
          <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
            Now Playing
          </span>
        ) : (
          <span className="sr-only">Music Player</span>
        )}
      </button>
      
      {/* Expanded content */}
      {isExpanded && (
        <div className="px-2 pb-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center mt-2">
            <img 
              src={songData.coverArt} 
              alt={`${songData.album} album cover`}
              className="w-10 h-10 rounded object-cover mr-2 border border-gray-100 dark:border-gray-600"
            />
            <div className="overflow-hidden">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-200 truncate" title={songData.title}>
                {songData.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate" title={songData.artist}>
                {songData.artist}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 truncate" title={songData.album}>
                {songData.album}
              </p>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-2">
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
              <motion.div 
                className="bg-gray-300 dark:bg-gray-500 h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-gray-400 dark:text-gray-500">2:15</span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500">{songData.duration}</span>
            </div>
          </div>
          
          {/* Playback controls */}
          <div className="flex justify-center space-x-4 mt-2">
            <button 
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              aria-label="Previous track"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2l5.334-4M12.066 11.2l5.334 4M12.066 11.2H3" />
              </svg>
            </button>
            <button 
              className="text-gray-600 dark:text-gray-300 p-1 rounded-full focus:outline-none"
              aria-label="Pause"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button 
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              aria-label="Next track"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.933 12.8l-5.334 4M11.933 12.8l-5.334-4M11.933 12.8H21" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NowPlaying;
