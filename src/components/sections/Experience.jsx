import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Amazon",
      location: "Bellevue, WA",
      period: "July 2025 - Present",
      companyLink: "https://amazon.com",
      logo: "/portfolio/amazon-logo.png",
      description: "At Amazon, I'm building a serverless automation system that streamlines a complex change-management workflow using Lambda, Bedrock agents, and S3. I work with stakeholders to define requirements, write design docs, and deliver iteratively while following Amazon's SDLC practices. Through this, I'm learning how to design resilient cloud workflows with retries, logging, and monitoring, and how to balance trade-offs, present progress, and apply leadership principles to ship reliable, production-grade systems.",
      technologies: ["AWS", "Cloud Infrastructure", "Distributed Systems"]
    },
    {
      title: "Software Engineer",
      company: "Commit the Change",
      location: "Irvine, CA",
      period: "November 2022 - June 2025",
      companyLink: "https://ctc-uci.com",
      logo: "/portfolio/commit-the-change-logo.svg",
      description: "At Commit the Change, I collaborated with nonprofits to understand their needs and developed software that made their work more efficient. I contributed to projects by designing databases, building user-facing features, and testing for reliability, all of which gave me the chance to work closely with organizations making a difference and to see firsthand how technology can directly support their missions.",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB", "AWS", "Firebase"]
    },
    {
      title: "Machine Learning Research Assistant",
      company: "Irvine Zhang Lab",
      location: "Irvine, CA",
      period: "January 2025 - Present",
      companyLink: "https://www.ics.uci.edu/~jingz31/",
      description: "At the Zhang Lab, I'm conducting deep learning research in genomics across two projects. One focuses on designing generative models to improve RNA velocity prediction, and the other applies knowledge distillation to compress large DNA foundation models while maintaining high performance. I'm also collaborating with PhD students on research papers for submission to top machine learning conferences. I pursue this work because I love exploring where the future of computer science is headed and being at the frontier of new discoveries.",
      technologies: ["PyTorch", "TensorFlow", "CUDA", "NumPy", "Scikit-learn", "HuggingFace"]
    },
    {
      title: "Software Engineer",
      company: "Irvine Neuroscience Laboratory",
      location: "Irvine, CA",
      period: "June 2024 - June 2025",
      description: "At the Irvine Neuroscience Laboratory, I contributed to a custom scheduling system that helped over 50 researchers coordinate experiments and resources.",
      technologies: ["React", "Node.js", "PostgreSQL", "ChakraUI", "JWT", "Docker"]
    }
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: (isEven) => ({ 
      x: isEven ? 20 : -20, 
      opacity: 0 
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey in software development, machine learning research, and technical leadership.
          </p>
        </div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Center timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-yellow-500"></div>
          
          <div className="relative">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className="relative flex items-center mb-8 md:mb-16"
                  custom={isEven}
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                  </div>

                  {/* Date on opposite side */}
                  <div className={`absolute left-1/2 transform ${isEven ? '-translate-x-[calc(100%+2rem)]' : 'translate-x-8'} top-1/2 -translate-y-1/2`}>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>

                  {/* Content wrapper */}
                  <div className={`w-full flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                    {/* Card */}
                    <div className={`w-[45%] ${isEven ? 'ml-24' : 'mr-24'}`}>
                      <div className="bg-white dark:bg-slate-800 rounded-md p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col mb-4">
                          <div className="flex items-center gap-6">
                            {experience.logo && (
                              <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm flex items-center justify-center dark:bg-white p-2">
                                <img 
                                  src={experience.logo} 
                                  alt={`${experience.company} logo`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}
                            <div className="flex flex-col">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                              {experience.title}
                            </h3>
                              <a 
                                href={experience.companyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                              >
                                {experience.company}
                              </a>
                              <div className="flex items-center gap-2 mt-1">
                            {experience.location && (
                                  <>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">{experience.location}</span>
                                  </>
                            )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
