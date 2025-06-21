import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let start = Date.now();
    const duration = 2000; // Slightly faster loading
    const frame = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(() => setIsFading(true), 200);
        setTimeout(() => onComplete && onComplete(), 600);
      }
    };
    frame();
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50"
    >
      <div className="text-center">
        <div className="relative mb-8">
          <div className="text-8xl font-light text-orange-500 dark:text-orange-400 font-mono tracking-tight">
            {count}
            <span className="text-5xl text-orange-400/70 dark:text-orange-500/70 ml-1">%</span>
          </div>
          {/* Progress bar container */}
          <div className="w-64 h-2 bg-slate-200 dark:bg-slate-700 mt-4 mx-auto rounded-full overflow-hidden">
            {/* Progress bar */}
            <motion.div 
              className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 dark:from-orange-500 dark:via-orange-400 dark:to-yellow-400 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}