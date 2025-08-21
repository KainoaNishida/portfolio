import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'devicon/devicon.min.css';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Languages',
    'Web & Database',
    'Frameworks',
    'Technologies',
    'ML & Data',
    'DevOps'
  ];

  const skills = [
    // Languages
    { iconClass: 'devicon-python-plain colored', name: 'Python', category: 'Languages' },
    { iconClass: 'devicon-cplusplus-plain colored', name: 'C++', category: 'Languages' },
    { iconClass: 'devicon-java-plain colored', name: 'Java', category: 'Languages' },
    { iconClass: 'devicon-javascript-plain colored', name: 'JavaScript', category: 'Languages' },
    { iconClass: 'devicon-typescript-plain colored', name: 'TypeScript', category: 'Languages' },
    
    // Web & Database
    { iconClass: 'devicon-postgresql-plain colored', name: 'PostgreSQL', category: 'Web & Database' },
    { iconClass: 'devicon-html5-plain colored', name: 'HTML5', category: 'Web & Database' },
    { iconClass: 'devicon-css3-plain colored', name: 'CSS3', category: 'Web & Database' },
    { iconClass: 'devicon-mongodb-plain colored', name: 'MongoDB', category: 'Web & Database' },
    { iconClass: 'devicon-mysql-plain colored', name: 'MySQL', category: 'Web & Database' },
    
    // Frameworks
    { iconClass: 'devicon-react-original colored', name: 'React', category: 'Frameworks' },
    { iconClass: 'devicon-tailwindcss-plain colored', name: 'Tailwind', category: 'Frameworks' },
    { iconClass: 'devicon-nextjs-original-wordmark', name: 'Next.js', category: 'Frameworks' },
    { iconClass: 'devicon-express-original colored', name: 'Express', category: 'Frameworks' },
    { iconClass: 'devicon-firebase-plain colored', name: 'Firebase', category: 'Frameworks' },
    { iconClass: 'devicon-chakraui-plain colored', name: 'Chakra UI', category: 'Frameworks' },
    
    // Technologies
    { iconClass: 'devicon-git-plain colored', name: 'Git', category: 'Technologies' },
    { iconClass: 'devicon-npm-original-wordmark colored', name: 'npm', category: 'Technologies' },
    { iconClass: 'devicon-nodejs-plain colored', name: 'Node.js', category: 'Technologies' },
    { iconClass: 'devicon-postman-plain colored', name: 'Postman', category: 'Technologies' },
    { iconClass: 'devicon-jquery-plain colored', name: 'jQuery', category: 'Technologies' },
    { iconClass: 'devicon-android-plain colored', name: 'Android SDK', category: 'Technologies' },
    { iconClass: 'devicon-tomcat-line colored', name: 'Tomcat', category: 'Technologies' },
    
    // ML & Data
    { iconClass: 'devicon-numpy-plain colored', name: 'NumPy', category: 'ML & Data' },
    { iconClass: 'devicon-pytorch-original colored', name: 'PyTorch', category: 'ML & Data' },
    { iconClass: 'devicon-tensorflow-original colored', name: 'TensorFlow', category: 'ML & Data' },
    { iconClass: 'devicon-matplotlib-plain colored', name: 'Matplotlib', category: 'ML & Data' },
    
    // DevOps
    { iconClass: 'devicon-amazonwebservices-plain-wordmark colored', name: 'AWS', category: 'DevOps' },
    { iconClass: 'devicon-docker-plain colored', name: 'Docker', category: 'DevOps' },
    { iconClass: 'devicon-kubernetes-plain colored', name: 'Kubernetes', category: 'DevOps' },
    { iconClass: 'devicon-github-original', name: 'GitHub', category: 'DevOps' }
  ];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                  }
                }
              }}
            >
              <div className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200">
                <i className={`${skill.iconClass} text-3xl`} title={skill.name}></i>
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;