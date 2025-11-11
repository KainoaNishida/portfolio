import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import Footer from '../components/sections/Footer';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for pdf.js
// Use local worker file that matches react-pdf's pdfjs version (5.4.296)
pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`;

const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <section id="resume" className="py-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
              resume
            </h2>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
              download or view my resume
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* PDF Controls */}
            {numPages && (
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-dashed border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                    disabled={pageNumber <= 1}
                    className="text-xs font-mono text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← prev
                  </button>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-500">
                    page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() => setPageNumber(prev => Math.min(numPages, prev + 1))}
                    disabled={pageNumber >= numPages}
                    className="text-xs font-mono text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    next →
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setScale(prev => Math.max(0.5, prev - 0.2))}
                    className="text-xs font-mono text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  >
                    −
                  </button>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-500 min-w-[3rem] text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={() => setScale(prev => Math.min(2, prev + 0.2))}
                    className="text-xs font-mono text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* PDF Viewer */}
            <div className="w-full flex justify-center overflow-auto bg-slate-100 dark:bg-slate-800 rounded border border-dashed border-slate-300 dark:border-slate-700 p-4">
              <Document
                file={resumeUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-500 py-8">
                    loading...
                  </div>
                }
                error={
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-500 py-8">
                    failed to load pdf
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="shadow-lg"
                />
              </Document>
            </div>

            {/* Download Link */}
            <div className="pt-4 border-t border-dashed border-slate-300 dark:border-slate-700">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 text-xs font-mono text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
              >
                download pdf
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResumePage;

