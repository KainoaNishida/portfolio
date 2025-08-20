import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quotes = () => {
  const quotes = [
    {
      id: 1,
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      id: 2,
      text: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    },
    {
      id: 3,
      text: "Make it work, make it right, make it fast.",
      author: "Kent Beck"
    },
    {
      id: 4,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      id: 5,
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    }
  ];

  const [activeQuote, setActiveQuote] = useState(0);

  // Auto-rotate quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);

  // Manually change quote
  const handleQuoteChange = (index) => {
    setActiveQuote(index);
  };

  return (
    <section 
      id="quotes" 
      className="min-h-[50vh] py-20 pl-20 flex items-center justify-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="quotes-heading"
    >
      <div className="container-content w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 
            id="quotes-heading"
            className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100"
          >
            Quotes I Live By
          </h2>
          <div className="w-20 h-1 bg-sky-400 mb-16"></div>
        </motion.div>

        <div className="relative h-64 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <svg 
                className="w-12 h-12 text-sky-400 mb-6 opacity-30" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <blockquote>
                <p className="text-2xl font-medium mb-4 text-gray-700 dark:text-gray-200">
                  "{quotes[activeQuote].text}"
                </p>
                <footer className="text-lg text-sky-500 dark:text-sky-400">
                  — {quotes[activeQuote].author}
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote navigation dots */}
        <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Quote navigation">
          {quotes.map((quote, index) => (
            <button
              key={quote.id}
              onClick={() => handleQuoteChange(index)}
              className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                activeQuote === index 
                  ? 'bg-sky-500 dark:bg-sky-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-selected={activeQuote === index}
              aria-label={`Quote ${index + 1} by ${quote.author}`}
              role="tab"
              tabIndex={activeQuote === index ? 0 : -1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
