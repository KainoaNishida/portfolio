import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { preloadHomepageImages } from "../../../utils/imagePreloader";
import { preloadLeetCodeStats } from "../../../utils/leetcodeStats";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start preloading images and LeetCode stats immediately
    const imagePreloadPromise = preloadHomepageImages();
    preloadLeetCodeStats(); // Start fetching LeetCode stats in the background
    
    let start = Date.now();
    const duration = 2000; // Slightly faster loading
    const frame = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        // Wait for images to finish loading (or timeout after 500ms)
        Promise.race([
          imagePreloadPromise,
          new Promise(resolve => setTimeout(resolve, 500))
        ]).then(() => {
          setTimeout(() => setIsFading(true), 200);
          setTimeout(() => onComplete && onComplete(), 600);
        });
      }
    };
    frame();
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-1000 z-50"
    >
      <div className="text-center">
        <div className="relative">
          <div className="text-base font-mono text-slate-500 dark:text-slate-400 lowercase">
            {count}%
          </div>
        </div>
      </div>
    </motion.div>
  );
}