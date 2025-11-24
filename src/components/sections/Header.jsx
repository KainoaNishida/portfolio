import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { headerContent } from '../../content/header';

const Header = () => {

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
            {headerContent.name}
            </h1>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            {headerContent.subtitle}
          </p>
          
          {/* Profile Image - Centered on mobile, floating on desktop */}
          <div className="flex justify-center mb-6 md:hidden">
            <motion.img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Kainoa Nishida"
              className="w-36 h-36 rounded-full border-2 border-slate-300 dark:border-slate-600 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Introduction Text with Floating Image */}
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-3 relative">
            {/* Floating Profile Image - Desktop only */}
            <div className="hidden md:block float-right ml-4 mb-2 relative mt-10">
              <motion.img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Kainoa Nishida"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-slate-300 dark:border-slate-600 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {headerContent.paragraphs.map((para, idx) => {
              // Handle the paragraph with links
              if (idx === 1) {
                return (
                  <p key={idx}>
                    {para.split('university of california, irvine')[0]}
                    <a href={headerContent.links.uci} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      university of california, irvine
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    {para.split('university of california, irvine')[1].split('amazon')[0]}
                    <a href={headerContent.links.amazon} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      amazon
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    {para.split('amazon')[1].split('commit the change')[0]}
                    <a href={headerContent.links.ctc} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      commit the change
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    {para.split('commit the change')[1].split('zhang lab')[0]}
                    <a href={headerContent.links.zhangLab} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      zhang lab
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    {para.split('zhang lab')[1]}
                  </p>
                );
              }
              if (idx === 3) {
                return (
                  <p key={idx}>
                    {para.split('commit the change')[0]}
                    <a href={headerContent.links.ctc} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      commit the change
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    {para.split('commit the change')[1]}
                  </p>
                );
              }
              if (idx === 5) {
                return (
                  <p key={idx}>
                    {para.split('projects')[0]}
                    <Link to="/projects" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      projects
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </Link>
                    {para.split('projects')[1].split('research')[0]}
                    <Link to="/research" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      research
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </Link>
                    {para.split('research')[1].split('skills')[0]}
                    <Link to="/skills" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      skills
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </Link>
                    {para.split('skills')[1].split('background')[0]}
                    <Link to="/background" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">
                      background
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </Link>
                    {para.split('background')[1]}
                  </p>
                );
              }
              return <p key={idx}>{para}</p>;
            })}
            
            <p className="mt-6">
              {headerContent.signature}
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