import React from 'react';
import { motion } from 'framer-motion';
import { experienceContent } from '../../content/experience';

const Experience = () => {
  const experiences = experienceContent.experiences;
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-12">
      <div>
        <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.2, ease: "easeOut" }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="mb-12"
        >
          <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
            {experienceContent.title}
          </h2>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            {experienceContent.subtitle}
          </p>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            {experienceContent.intro.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left timeline line - positioned at 180px from left */}
          <div className="absolute top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" style={{ left: '180px' }}></div>
          
          <div className="relative">
            {experiences.map((experience, index) => {
              // Calculate the top position of this experience card
              const cardTop = index * 200; // Approximate, will be adjusted by actual card heights
              
              return (
                <div key={index} className="relative mb-8">
                  {/* Date on left side - extends to just before the timeline line */}
                  <div className="absolute left-0 top-0 text-right pr-3 flex flex-col items-end" style={{ width: '180px' }}>
                    {(() => {
                      const parts = experience.period.split(' - ');
                      const startDate = parts[0] || experience.period;
                      const endDate = parts[1] || 'present';
                      return (
                        <>
                          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 leading-tight whitespace-nowrap">
                            <span className="text-slate-400 dark:text-slate-500">start:</span> {startDate}
                          </div>
                          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 leading-tight mt-1 whitespace-nowrap">
                            <span className="text-slate-400 dark:text-slate-500">end:</span> {endDate}
                          </div>
                          {experience.location && (
                            <div className="text-xs font-mono text-orange-500 dark:text-orange-400 leading-tight mt-1 whitespace-nowrap">
                              {experience.location}
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>

                  {/* Timeline dot - positioned on the timeline line, outside the card */}
                  <div 
                    className="absolute z-10 flex items-center" 
                    style={{ 
                      left: '174px',  // 180px - 6px (half of 12px circle width) to center it
                      top: '6px',  // Center vertically between the two date lines
                      height: '12px'
                    }}
                  >
                    <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-slate-100 dark:border-slate-900"></div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className="relative flex items-start"
                    custom={false}
                    variants={itemVariants}
                  >
                    <div className="w-full" style={{ marginLeft: '196px' }}>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded p-6 border border-slate-200 dark:border-slate-700">
                      <div className="flex flex-col mb-3">
                        <div className="flex items-start gap-4">
                          {experience.logo && (
                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded flex items-center justify-center bg-slate-50 dark:bg-white p-1">
                              <img 
                                src={experience.logo} 
                                alt={`${experience.company} logo`}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex flex-col flex-1">
                            <a 
                              href={experience.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors text-base font-bold font-mono mb-1 inline-flex items-center gap-1"
                            >
                              {experience.company}
                              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <h3 className="text-sm text-slate-900 dark:text-white font-mono lowercase">
                              {experience.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      {experience.bullets && experience.bullets.length > 0 && (
                        <ul className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed font-mono space-y-2">
                          {experience.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-2">
                              <span className="text-orange-500 flex-shrink-0" style={{ marginTop: '0.35rem' }}>
                                <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <polygon points="2,2 22,12 2,22" strokeLinejoin="round" />
                                </svg>
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

