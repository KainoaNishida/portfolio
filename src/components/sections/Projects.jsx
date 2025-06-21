import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Collete's Children Home Dashboard",
      description: "Internal management system for a non-profit organization helping disadvantaged mothers, featuring client-manager matching and treatment tracking capabilities.",
      longDescription: "Developed a comprehensive dashboard system for Collete's Children Home that streamlines the process of matching clients with managers and tracking treatment progress. The system helps the non-profit organization efficiently manage and monitor the care provided to disadvantaged mothers, improving their ability to deliver essential services and support.",
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Chakra UI', 'Firebase', 'AWS SDK'],
      github: 'https://github.com/ctc-uci/cch',
      demo: '/colletes-demo.mp4',
      image: 'https://placehold.co/800x600/2563EB/FFFFFF?text=Colletes+Dashboard&font=inter',
      video: '/colletes-demo.mp4',
      status: 'Live',
      featured: true,
      year: '2024'
    },
    {
      id: 2,
      title: 'UCLA Ranked',
      description: 'Platform for ELO ranking system at UCLA, featuring alumni network integration and comprehensive player statistics.',
      longDescription: 'Collaborated with Max Fukuhara to develop a sophisticated ELO ranking platform for UCLA. Currently expanding the project with a growing team to implement additional features including an alumni network and enhanced statistical analysis tools.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chakra UI', 'AWS'],
      github: 'https://github.com/maxfukuh4ra/uclaranked',
      demo: 'https://ucla-ranked.vercel.app',
      image: 'https://placehold.co/800x600/059669/FFFFFF?text=UCLA+Ranked&font=inter',
      status: 'Live',
      featured: true,
      year: '2024'
    },
    {
      id: 3,
      title: 'Sustainably',
      description: 'Eco-friendly product search engine using deep learning to score company sustainability, developed at Caltech Hackathon.',
      longDescription: 'Created a search engine that helps users find clothing products from eco-friendly companies. Implemented a deep learning model that generates eco-friendliness scores based on multiple data inputs, trained and validated against publicly traded companies\' ESG scores.',
      tech: ['TypeScript', 'Python', 'PyTorch', 'FastAPI', 'React', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/KainoaNishida/calhacks',
      demo: '/sustainably_demo.mov',
      image: 'https://placehold.co/800x600/7C3AED/FFFFFF?text=Sustainably&font=inter',
      video: '/sustainably_demo.mov',
      status: 'Completed',
      featured: true,
      year: '2024'
    },
    {
      id: 4,
      title: 'Fabflix',
      description: 'Full-stack Netflix clone with comprehensive movie database, search functionality, and performance optimizations.',
      longDescription: 'Built a complete movie database web application from scratch, featuring secure login, full-text search with auto-complete, cart checkout, and extensive performance optimizations including MySQL connection pooling and load balancing.',
      tech: ['Java', 'MySQL', 'Tomcat', 'AWS', 'jQuery', 'Android SDK'],
      // github: 'https://github.com/kainoa-nishida/fabflix',
      image: 'https://placehold.co/800x600/059669/FFFFFF?text=Fabflix&font=inter',
      status: 'Completed',
      featured: false,
      year: '2023'
    },
    {
      id: 5,
      title: 'Feeding Pets of the Homeless',
      description: 'Streamlined platform for managing pet food donations and veterinary care for homeless pet owners.',
      longDescription: 'Developed a centralized platform to expedite the onboarding and donation reporting processes for donation sites. The system enables efficient tracking of contributions, streamlines communication, and helps monitor the impact of donations on homeless pet guardians.',
      tech: ['React', 'Firebase', 'Node.js', 'Express'],
      github: 'https://github.com/ctc-uci/fph-frontend',
      image: 'https://placehold.co/800x600/2563EB/FFFFFF?text=FPOTH&font=inter',
      status: 'Live',
      featured: false,
      year: '2023'
    },
    {
      id: 6,
      title: 'Valnotes',
      description: 'Video note-taking application specialized for gameplay analysis with Riot Games API integration.',
      longDescription: 'Developed an application that enables users to upload and annotate gameplay videos, featuring automatic data gathering and visualization through Riot Games API integration.',
      tech: ['React', 'Node.js', 'Riot API', 'MongoDB', 'Express'],
      github: 'https://github.com/KainoaNishida/Valnotes',
      image: 'https://placehold.co/800x600/DC2626/FFFFFF?text=Valnotes&font=inter',
      status: 'Live',
      featured: false,
      year: '2023'
    },
    
    {
      id: 7,
      title: 'Pokéscape',
      description: 'Java-based adventure game featuring professional artwork and custom sound design.',
      longDescription: 'Developed an immersive video game where players explore a forest environment and solve puzzles to rescue an endangered Celebi, featuring custom artwork from a professional artist.',
      tech: ['Java'],
      github: 'https://github.com/KainoaNishida/pokescape',
      image: 'https://placehold.co/800x600/059669/FFFFFF?text=Pokescape&font=inter',
      status: 'Completed',
      featured: false,
      year: '2023'
    },
    {
      id: 8,
      title: 'Minecraft RI Agent',
      description: 'Custom reinforcement learning agent for automated diamond mining in Minecraft.',
      longDescription: 'Implemented a deep Q-learning algorithm to train an agent in a custom Minecraft environment, focusing on efficient resource gathering and navigation.',
      tech: ['Python', 'PyTorch', 'Malmo', 'NumPy'],
      image: 'https://placehold.co/800x600/059669/FFFFFF?text=Minecraft+RL&font=inter',
      status: 'Completed',
      featured: false,
      year: '2023'
    },
    {
      id: 9,
      title: "Rubik's Cube Solver",
      description: "Python script that visually mixes and solves the Rubik's Cube using group theory and permutation puzzles.",
      longDescription: "Implemented a Rubik's Cube solver based on MIT's 'The Mathematics of the Rubik's Cube' paper, utilizing group theory and permutation algorithms. The program provides a visual representation of cube manipulation and solution steps, demonstrating the mathematical principles behind puzzle solving.",
      tech: ['Python', 'NumPy', 'Matplotlib'],
      image: 'https://placehold.co/800x600/7C3AED/FFFFFF?text=Rubiks+Solver&font=inter',
      status: 'Completed',
      featured: false,
      year: '2023'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="py-20"
      aria-labelledby="projects-heading"
    >
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2
            id="projects-heading"
            className="section-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50"
          >
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mx-auto">
            A showcase of my recent work in web development, data visualization, and full-stack applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-20 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative"
              variants={itemVariants}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Project Image/Video */}
                <div
                  className="lg:w-1/2"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-md shadow-strong bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700/90">
                      {project.video ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
                          aria-hidden="true"
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}

                      {/* Overlay with links */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <a
                          href={project.github}
                          className="btn btn-outline text-white border-white/80 hover:bg-white hover:text-slate-900 backdrop-blur-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code`}
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </a>
                        {/* <a
                          href={project.demo}
                          className="btn bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white hover:from-orange-600 hover:via-orange-500 hover:to-yellow-600"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">{project.year}</span>
                      <div className="h-1 w-8 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 rounded"></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium shadow-sm border border-orange-100 dark:border-orange-800/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-outline border-orange-200 dark:border-orange-800 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 text-center">
              More Projects...
            </h3>

            <div className="max-w-4xl mx-auto">
              <ul className="space-y-6 text-slate-600 dark:text-slate-400">
                {otherProjects.map((project, index) => (
                  <li key={project.id}>
                    <div className="mb-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white inline">
                        {project.title}
                      </h4>
                      {project.github && (
                        <>
                          <span className="mx-2">•</span>
                          <a
                            href={project.github}
                            className="text-orange-600 dark:text-orange-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        </>
                      )}
                      {project.demo && (
                        <>
                          <span className="mx-2">•</span>
                          <a
                            href={project.demo}
                            className="text-orange-600 dark:text-orange-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </>
                      )}
                    </div>
                    <p className="mb-2">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm text-slate-500 dark:text-slate-400"
                        >
                          {tech}{techIndex < project.tech.length - 1 ? ' • ' : ''}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
