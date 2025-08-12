import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="py-20 container-content">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white text-center mb-12">Resume</h2>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Preview Card */}
          <div className="w-full md:w-2/3 aspect-[8.5/11] bg-slate-100 dark:bg-slate-700 rounded-lg shadow-inner overflow-hidden">
            {/* Replace with your actual resume preview image */}
            <img
              src="/resume-preview.png"
              alt="Resume Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Download Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Download Resume</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Get a copy of my resume in PDF format
              </p>
            </div>

            <motion.button
              onClick={handleDownload}
              className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </div>
            </motion.button>

            <div className="text-sm text-slate-500 dark:text-slate-400 text-center">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 