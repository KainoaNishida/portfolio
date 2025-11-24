import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { researchContent } from '../../content/research';

const Research = () => {
  const [photoIndices, setPhotoIndices] = useState({});
  const [expandedProjects, setExpandedProjects] = useState({});
  const isExpanded = useCallback((id) => !!expandedProjects[id], [expandedProjects]);
  const toggleExpanded = useCallback((id) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const researchProjects = useMemo(() => researchContent.projects, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const nextPhoto = useCallback((projectId) => {
    setPhotoIndices(prev => {
      const currentIndex = prev[projectId] || 0;
      const project = researchProjects.find(p => p.id === projectId);
      const maxIndex = project && project.photos ? project.photos.length - 1 : 0;
      return {
        ...prev,
        [projectId]: Math.min(currentIndex + 1, maxIndex)
      };
    });
  }, [researchProjects]);

  const prevPhoto = useCallback((projectId) => {
    setPhotoIndices(prev => {
      const currentIndex = prev[projectId] || 0;
      return {
        ...prev,
        [projectId]: Math.max(currentIndex - 1, 0)
      };
    });
  }, []);

  const getCurrentPhotoIndex = useCallback((projectId) => {
    return photoIndices[projectId] || 0;
  }, [photoIndices]);

  return (
    <section id="research" className="py-12">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2
            id="research-heading"
            className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase"
          >
            {researchContent.title}
          </h2>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            {researchContent.subtitle}
          </p>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              {researchContent.intro}
            </p>
          </div>

        </motion.div>

        {/* All Research Projects */}
        <motion.div
          className=""
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={index > 0 ? "pt-8 mt-8 border-t border-dashed border-slate-300 dark:border-slate-700" : ""}
              variants={itemVariants}
            >
              {/* Title and Period */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-2 pr-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono lowercase">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0 pr-1">
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      aria-expanded={isExpanded(project.id)}
                      aria-label="Toggle details"
                      className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <motion.svg
                        className="w-4 h-4 text-slate-500 dark:text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isExpanded(project.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-500">{project.period}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono mb-4">
                {isExpanded(project.id) ? project.longDescription : project.shortDescription}
              </p>

              {/* Technologies as simple tags (expanded) */}
              {isExpanded(project.id) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-orange-500 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Media (expanded) - smaller */}
              {isExpanded(project.id) && ((project.hasPhotos && project.photos && project.photos.length > 0) || (project.image && !project.image.includes('placehold.co'))) ? (
                <div className="mt-6">
                  {project.hasPhotos && project.photos && project.photos.length > 0 ? (
                    <div className="w-full max-w-sm mx-auto">
                      <div className="flex items-center gap-3">
                        {/* Left arrow - outside */}
                        {project.photos.length > 1 && getCurrentPhotoIndex(project.id) > 0 && (
                          <button
                            onClick={() => prevPhoto(project.id)}
                            className="flex-shrink-0 bg-slate-200 dark:bg-slate-700 rounded-full p-2 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                            aria-label="Previous photo"
                          >
                            <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                        )}
                        
                        {/* Media container */}
                        <div className="flex-1 relative">
                          <div className="overflow-hidden rounded">
                            <div 
                              className="flex transition-transform duration-300 ease-in-out" 
                              style={{ 
                                transform: `translateX(-${getCurrentPhotoIndex(project.id) * 100}%)`
                              }}
                            >
                              {project.photos.map((photo, photoIndex) => (
                                <div 
                                  key={photoIndex} 
                                  className="flex-shrink-0 w-full"
                                >
                                  {photo.endsWith('.pdf') ? (
                                    <iframe
                                      src={photo}
                                      className="w-full"
                                      style={{ aspectRatio: '16/10', minHeight: '400px' }}
                                      title={`${project.title} document ${photoIndex + 1}`}
                                    />
                                  ) : (
                                           <img
                                             src={photo}
                                             alt={`${project.title} screenshot ${photoIndex + 1}`}
                                             className="w-full object-cover"
                                             style={{ aspectRatio: '16/10' }}
                                             loading="lazy"
                                           />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right arrow - outside */}
                        {project.photos.length > 1 && getCurrentPhotoIndex(project.id) < project.photos.length - 1 && (
                          <button
                            onClick={() => nextPhoto(project.id)}
                            className="flex-shrink-0 bg-slate-200 dark:bg-slate-700 rounded-full p-2 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                            aria-label="Next photo"
                          >
                            <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ) : project.image ? (
                    <div className="w-full max-w-sm mx-auto">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full rounded"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 