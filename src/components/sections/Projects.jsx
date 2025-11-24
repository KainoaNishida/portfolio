import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsContent } from '../../content/projects';

const Projects = () => {
  const [photoIndices, setPhotoIndices] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({});
  const isExpanded = useCallback((id) => !!expandedProjects[id], [expandedProjects]);
  const toggleExpanded = useCallback((id) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const projects = useMemo(() => projectsContent.projects, []);

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
      const project = projects.find(p => p.id === projectId);
      const maxIndex = project && project.photos ? project.photos.length - 1 : 0;
      return {
        ...prev,
        [projectId]: Math.min(currentIndex + 1, maxIndex)
      };
    });
  }, [projects]);

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

  // Get all unique categories
  const categories = useMemo(() => {
    const allCategories = new Set();
    projects.forEach(project => {
      if (project.categories) {
        project.categories.forEach(cat => allCategories.add(cat));
      }
    });
    return ['all', ...Array.from(allCategories).sort()];
  }, [projects]);

  const categoryCounts = useMemo(() => {
    const counts = { all: projects.length };
    categories.forEach(cat => {
      if (cat === 'all') return;
      counts[cat] = projects.filter(p => Array.isArray(p.categories) && p.categories.includes(cat)).length;
    });
    return counts;
  }, [projects, categories]);

  // Sort and filter projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(project => {
        if (!project.categories || !Array.isArray(project.categories)) {
          return false;
        }
        return project.categories.includes(selectedCategory);
      });
    }
    
    // Sort by ID (original order)
    return filtered.sort((a, b) => {
      return a.id - b.id;
    });
  }, [projects, selectedCategory]);

  return (
    <section
      id="projects"
      className="py-12"
      aria-labelledby="projects-heading"
    >
      <div>
        <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.2, ease: "easeOut" }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="mb-12"
        >
          <h2
            id="projects-heading"
            className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase"
          >
            {projectsContent.title}
          </h2>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            {projectsContent.subtitle}
          </p>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <p>
              {projectsContent.intro}
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {`${category} (${category === 'all' ? categoryCounts.all : (categoryCounts[category] ?? 0)})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
                 key={selectedCategory}
                 className=""
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={index > 0 ? "pt-8 mt-8 border-t border-dashed border-slate-300 dark:border-slate-700" : ""}
              variants={itemVariants}
            >
              {/* Title and Links */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-2 pr-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono lowercase">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0 pr-1">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-xs font-mono text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github
                        <svg className="inline-block w-2 h-2 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-xs font-mono text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        demo
                        <svg className="inline-block w-2 h-2 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
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
                <span className="text-xs font-mono text-slate-500 dark:text-slate-500">{project.year}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono mb-4">
                {isExpanded(project.id) ? project.longDescription : project.description}
              </p>

              {/* Skills as simple tags (expanded) */}
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

              {/* Media (expanded) */}
              {isExpanded(project.id) && (project.video || (project.image && !project.image.includes('placehold.co')) || (project.hasPhotos && project.photos && project.photos.length > 0)) && (
                <div className="mt-6">
                  {project.hasPhotos && project.photos && project.photos.length > 0 ? (
                    <div className="w-full max-w-2xl mx-auto">
                      <div className="flex items-center gap-3">
                        {/* Left arrow - always reserve space */}
                        <div className="flex-shrink-0" style={{ width: '2rem', visibility: project.photos.length > 1 && getCurrentPhotoIndex(project.id) > 0 ? 'visible' : 'hidden' }}>
                          <button
                            onClick={() => prevPhoto(project.id)}
                            className="transition-opacity hover:opacity-70"
                            aria-label="Previous photo"
                          >
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                              <polygon points="15,19 7,12 15,5" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Image container - fixed width that accounts for arrows */}
                        <div className="flex-1 relative min-w-0" style={{ maxWidth: 'calc(100% - 4rem)' }}>
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
                                         <img
                                           src={photo}
                                           alt={`${project.title} screenshot ${photoIndex + 1}`}
                                           className="w-full object-cover"
                                           style={{ aspectRatio: '16/10' }}
                                           loading="lazy"
                                         />
                                  {project.captions && project.captions[photoIndex] && (
                                    <div className="mt-2 text-center">
                                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                                        {project.captions[photoIndex]}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right arrow - always reserve space */}
                        <div className="flex-shrink-0" style={{ width: '2rem', visibility: project.photos.length > 1 && getCurrentPhotoIndex(project.id) < project.photos.length - 1 ? 'visible' : 'hidden' }}>
                          <button
                            onClick={() => nextPhoto(project.id)}
                            className="transition-opacity hover:opacity-70"
                            aria-label="Next photo"
                          >
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                              <polygon points="9,5 17,12 9,19" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : project.video ? (
                    <div className="w-full max-w-md mx-auto">
                      <iframe
                        src={project.video}
                        className="w-full aspect-video rounded"
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="true"
                      />
                    </div>
                  ) : (project.image && !project.image.includes('placehold.co')) ? (
                    <div className="w-full max-w-md mx-auto">
                             <img
                               src={project.image}
                               alt={`${project.title} preview`}
                               className="w-full rounded"
                               loading="lazy"
                             />
                    </div>
                  ) : null}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
