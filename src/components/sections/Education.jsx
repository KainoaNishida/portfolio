import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
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
  const educationItems = [
    {
      id: 1,
      institution: 'University of California, Irvine (UCI)',
      degree: 'Bachelor of Science, Computer Science | Minor in Mathematics',
      period: '2022 - 2026 (Expected)',
      gpa: '3.95/4.0',
      logo: `${import.meta.env.BASE_URL}uci-logo.png`,
      details: [
        'Dean\'s List',
        'Phi Beta Kappa Member',
        'ICS Honors Member',
        'Regents Scholar',
        'Summer Undergraduate Scholarship Recipient',
        'Undergraduate Research Scholarship'
      ]
    },
    {
      id: 2,
      institution: 'Arnold O. Beckman High School',
      degree: 'High School Diploma',
      period: '2018 - 2022', 
      gpa: '4.0/4.0', 
      logo: `${import.meta.env.BASE_URL}arnold-beckman-logo.png`, 
      details: [
        'National Merit Finalist',
        'Student of the Month',
      ]
    }
  ];

  const courses = [
    { code: 'CS 161', name: 'Design and Analysis of Algorithms' },
    { code: 'CS 177', name: 'Probability in Computer Science' },
    { code: 'CS 46', name: 'Data Structures' },
    { code: 'CS 122A-B', name: 'Databases and Web Application' },
    { code: 'CS 274C', name: 'Neural Networks and Deep Learning' },
    { code: 'CS 175', name: 'Project in AI' },
    { code: 'CS 179', name: 'Graphical Models' },
    { code: 'CS 178', name: 'Machine Learning and Data Mining' },
    { code: 'CS 163', name: 'Graph Algorithms' },
    { code: 'CS 274A', name: 'Probabilistic Learning' },
    { code: 'CS 280', name: 'Algorithmic Game Theory' },
    { code: 'MATH 130C', name: 'Markov Chains & Stochastic Processes' },
    { code: 'MATH 130A-B', name: 'Probability' },
    { code: 'MATH 121A-B', name: 'Linear Algebra' },
    { code: 'MATH 120A', name: 'Group Theory' },
    { code: 'MATH 8D', name: 'Discrete Mathematics' }
  ];

  const involvements = [
    {
      id: 1,
      organization: 'Commit the Change',
      role: 'Software Engineer, Treasurer, Education Director',
      period: '2022 - 2025',
      
    },
    {
      id: 2,
      organization: 'Association for Computing Machinery (ACM)',
      role: 'Member',
      period: '2022 - Present',
      
    },
    {
      id: 3,
      organization: 'Zhang Lab',
      role: 'Student Researcher',
      period: '2024 - Present',
      
    },
    {
      id: 4,
      organization: 'CS 161 - Design and Analysis of Algorithms',
      role: 'Learning Assistant',
      period: '2025 - Present',
      
    }
  ];

  return (
    <section id="education" className="py-12">
      <div>
        {/* Education */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: 'opacity, transform' }}
        >
          <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white font-mono lowercase">education</h3>
          
          <div className="">
            {educationItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className={index > 0 ? "pt-8 mt-8 border-t border-dashed border-slate-300 dark:border-slate-700" : ""}
                variants={itemVariants}
              >
                <div className="mb-4">
                  <div className="flex items-start gap-4 mb-4">
                    {item.logo && (
                      <div className="w-16 h-16 flex-shrink-0 p-2 flex items-center justify-center dark:bg-white rounded">
                  <img 
                    src={item.logo} 
                    alt={item.institution} 
                    className={`object-contain ${item.institution.includes('UCI') ? 'w-4/5 h-4/5' : 'w-full h-full'}`}
                    loading="lazy"
                  />
                </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white font-mono lowercase mb-2">
                    {item.institution}
                  </h4>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">{item.period}</p>
                      {item.gpa && <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-2">GPA: {item.gpa}</p>}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono mb-4">
                        {item.degree}
                      </p>
                      
                      {item.details && item.details.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-xs font-bold text-slate-900 dark:text-white font-mono lowercase mb-2">
                            awards & distinctions
                          </h5>
                          <ul className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono space-y-2">
                            {item.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-orange-500 flex-shrink-0" style={{ marginTop: '0.35rem' }}>
                                  <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <polygon points="2,2 22,12 2,22" strokeLinejoin="round" />
                                  </svg>
                                </span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: 'opacity, transform' }}
        >
          <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white font-mono lowercase">coursework</h3>
          
          <div className="space-y-8">
            {/* Computer Science */}
            <div>
              <h4 className="text-base font-bold mb-4 text-slate-900 dark:text-white font-mono lowercase">computer science</h4>
              <div className="space-y-4">
                {courses.filter(c => c.code.startsWith('CS')).map((course, index) => (
                  <div key={index} className={index > 0 ? "pt-4 border-t border-dashed border-slate-300 dark:border-slate-700" : ""}>
                    <div className="mb-1">
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">{course.code}:</span>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-300 ml-2">{course.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mathematics */}
            <div className="pt-8 border-t border-dashed border-slate-300 dark:border-slate-700">
              <h4 className="text-base font-bold mb-4 text-slate-900 dark:text-white font-mono lowercase">mathematics</h4>
              <div className="space-y-4">
                {courses.filter(c => c.code.startsWith('MATH')).map((course, index) => (
                  <div key={index} className={index > 0 ? "pt-4 border-t border-dashed border-slate-300 dark:border-slate-700" : ""}>
                    <div className="mb-1">
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">{course.code}:</span>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-300 ml-2">{course.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Involvements */}
        <motion.div
          className=""
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: 'opacity, transform' }}
        >
          <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white font-mono lowercase">involvements</h3>
          
          <div className="">
            {involvements.map((involvement, index) => (
              <motion.div
                key={involvement.id}
                className={index > 0 ? "pt-8 mt-8 border-t border-dashed border-slate-300 dark:border-slate-700" : ""}
                variants={itemVariants}
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white font-mono lowercase mb-2">
                    {involvement.organization}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono mb-2">
                    {involvement.role}
                  </p>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-4">{involvement.period}</p>
                  
                  {involvement.bullets && involvement.bullets.length > 0 && (
                    <ul className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed font-mono space-y-2">
                      {involvement.bullets.map((bullet, bulletIndex) => (
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
