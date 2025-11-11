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