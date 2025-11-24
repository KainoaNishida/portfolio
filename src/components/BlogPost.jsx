import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPost = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-dashed border-slate-300 dark:border-slate-700 pb-8 pt-8 first:pt-0 last:border-b-0">
      {/* Card Header - Always Visible */}
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono lowercase">
            {post.title}
          </h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-500">{post.date}</span>
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-mono text-orange-500 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-xs font-mono text-slate-600 dark:text-slate-300 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-dashed border-slate-300 dark:border-slate-700">
              <div className="font-mono text-xs text-slate-600 dark:text-slate-300 space-y-6 leading-relaxed">
                {post.content ? (
                  post.content.map((section, index) => (
                    <div key={index}>
                      {section.heading && (
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 lowercase">
                          {section.heading}
                        </h4>
                      )}
                      {section.paragraphs && section.paragraphs.map((para, pIndex) => (
                        <p key={pIndex} className="mb-4">
                          {para}
                        </p>
                      ))}
                      {section.list && (
                        <ul className="list-disc list-inside space-y-2 ml-2">
                          {section.list.map((item, iIndex) => (
                            <li key={iIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {section.code && (
                        <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded mt-3 overflow-x-auto">
                          <code className="text-xs font-mono">{section.code}</code>
                        </pre>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 dark:text-slate-400 italic">
                    {post.customMessage || `work in progress${post.solved ? ' (i did actually solve it, you can see my name Kai Nishida in the solvers!)' : ''}`}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPost;

