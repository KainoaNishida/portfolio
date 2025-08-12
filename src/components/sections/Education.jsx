import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      institution: 'University of California, Irvine (UCI)',
      degree: 'Bachelor of Science, Computer Science | Minor in Mathematics',
      period: '2022 - 2026 (Expected)',
      gpa: '3.96/4.0',
      logo: '/portfolio/uci-logo.png',
      details: [
        'Dean\'s List',
        'Phi Beta Kappa Member',
        'ICS Honors Member',
        'Regents Scholar'
      ]
    },
    {
      id: 2,
      institution: 'Arnold O. Beckman High School',
      degree: 'High School Diploma',
      period: '2018 - 2022', 
      gpa: '4.0/4.0', 
      logo: '/portfolio/arnold-beckman-logo.png', 
      details: [
        'National Merit Finalist',
        'Student of the Month',
      ]
    }
  ];

  const courses = [
    { code: 'CS 161', name: 'Design and Analysis of Algorithms' },
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
      period: '2022 - Present',
      details: [
        'Built onboarding program for new members',
        'Equipped members with necessary technical skills and language familiarity',
        'Implemented professional software development practices like AGILE'
      ]
    },
    {
      id: 2,
      organization: 'Association for Computing Machinery (ACM)',
      role: 'Member',
      period: '2022 - Present',
      details: [
        'Active member participating in club activities'
      ]
    },
    {
      id: 3,
      organization: 'Zhang Lab',
      role: 'Student Researcher',
      period: '2024 - Present',
      details: [
        'Working on deep learning and genomics research projects',
        'Focusing on RNA velocity prediction and knowledge distillation'
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Education & Involvements
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My academic journey and extracurricular activities.
        </p>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white text-center">Education</h3>
        
        <div className="space-y-8 flex flex-col items-center">
          {educationItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="flex flex-row items-start text-left max-w-3xl w-full gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-28 h-28 flex-shrink-0 p-2 flex items-center justify-center dark:bg-white rounded-lg">
                <img 
                  src={item.logo} 
                  alt={item.institution} 
                  className={`object-contain ${item.institution.includes('UCI') ? 'w-4/5 h-4/5' : 'w-full h-full'}`}
                />
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.institution}
                </h4>
                <p className="text-md text-orange-600 dark:text-orange-400 font-medium mb-3">{item.degree}</p>
                <div className="flex items-center justify-start gap-3 mb-4">
                  <span className="text-slate-600 dark:text-slate-400">{item.period}</span>
                  <span className="text-slate-400">•</span>
                  {item.gpa && <span className="text-slate-600 dark:text-slate-400">GPA: {item.gpa}</span>}
                </div>
                
                <div className="flex flex-wrap gap-2 justify-start">
                {/* Awards */}
                  {item.details.map((detail, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1  text-slate-900 dark:text-white rounded-full text-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coursework */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white text-center">Coursework</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">Computer Science</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-medium">CS 161:</span> Design and Analysis of Algorithms
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Study of algorithms and their complexity</div>
              </li>
              <li>
                <span className="font-medium">CS 46:</span> Data Structures
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Implementation and analysis of fundamental data structures</div>
              </li>
              <li>
                <span className="font-medium">CS 122A-B:</span> Databases and Web Application
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Database design and full-stack web development</div>
              </li>
              <li>
                <span className="font-medium">CS 274C:</span> Neural Networks and Deep Learning
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Advanced deep learning architectures and applications</div>
              </li>
              <li>
                <span className="font-medium">CS 175:</span> Project in AI
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Practical implementation of AI systems</div>
              </li>
              <li>
                <span className="font-medium">CS 179:</span> Graphical Models
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Probabilistic modeling and inference</div>
              </li>
              <li>
                <span className="font-medium">CS 178:</span> Machine Learning and Data Mining
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Core ML algorithms and applications</div>
              </li>
              <li>
                <span className="font-medium">CS 163:</span> Graph Algorithms
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Advanced graph theory and algorithms</div>
              </li>
              <li>
                <span className="font-medium">CS 274A:</span> Probabilistic Learning
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Statistical learning methods</div>
              </li>
              <li>
                <span className="font-medium">CS 280:</span> Algorithmic Game Theory
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Game theory and mechanism design</div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">Mathematics</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-medium">MATH 130C:</span> Markov Chains & Stochastic Processes
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Advanced probability theory</div>
              </li>
              <li>
                <span className="font-medium">MATH 130A-B:</span> Probability
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Foundations of probability theory</div>
              </li>
              <li>
                <span className="font-medium">MATH 121A-B:</span> Linear Algebra
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Advanced linear algebra and applications</div>
              </li>
              <li>
                <span className="font-medium">MATH 120A:</span> Group Theory
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Abstract algebra and group theory</div>
              </li>
              <li>
                <span className="font-medium">MATH 8D:</span> Discrete Mathematics
                <div className="text-sm text-slate-500 dark:text-slate-500 ml-6">Foundations of discrete mathematics</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Involvements */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">School Involvements</h3>
        
        <ul className="space-y-6 text-slate-600 dark:text-slate-400">
          <li>
            <div className="mb-2">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white inline">Commit the Change</h4>
              <span className="mx-2">•</span>
              <span className="text-orange-600 dark:text-orange-400">Software Engineer, Treasurer, Education Director</span>
              <span className="mx-2">•</span>
              <span className="text-sm">2022 - Present</span>
            </div>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Built onboarding program for new members</li>
              <li>Equipped members with necessary technical skills and language familiarity</li>
              <li>Implemented professional software development practices like AGILE</li>
            </ul>
          </li>
          
          <li>
            <div className="mb-2">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white inline">Zhang Lab</h4>
              <span className="mx-2">•</span>
              <span className="text-orange-600 dark:text-orange-400">Student Researcher</span>
              <span className="mx-2">•</span>
              <span className="text-sm">2024 - Present</span>
            </div>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Working on deep learning and genomics research projects</li>
              <li>Focusing on RNA velocity prediction and knowledge distillation</li>
            </ul>
          </li>
          
          <li>
            <div className="mb-2">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white inline">Association for Computing Machinery (ACM)</h4>
              <span className="mx-2">•</span>
              <span className="text-orange-600 dark:text-orange-400">Member</span>
              <span className="mx-2">•</span>
              <span className="text-sm">2022 - Present</span>
            </div>
            <ul className="list-disc list-inside pl-4">
              <li>Active member participating in club activities</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
