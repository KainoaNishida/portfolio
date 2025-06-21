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
    { iconClass: 'devicon-rust-plain', name: 'Rust', category: 'Languages' },
    
    // Web & Database
    { iconClass: 'devicon-postgresql-plain colored', name: 'PostgreSQL', category: 'Web & Database' },
    { iconClass: 'devicon-html5-plain colored', name: 'HTML5', category: 'Web & Database' },
    { iconClass: 'devicon-css3-plain colored', name: 'CSS3', category: 'Web & Database' },
    { iconClass: 'devicon-mongodb-plain colored', name: 'MongoDB', category: 'Web & Database' },
    { iconClass: 'devicon-firebase-plain colored', name: 'Firebase', category: 'Web & Database' },
    { iconClass: 'devicon-mysql-plain colored', name: 'MySQL', category: 'Web & Database' },
    
    // Frameworks
    { iconClass: 'devicon-react-original colored', name: 'React', category: 'Frameworks' },
    { iconClass: 'devicon-tailwindcss-plain colored', name: 'Tailwind', category: 'Frameworks' },
    { iconClass: 'devicon-nextjs-original-wordmark', name: 'Next.js', category: 'Frameworks' },
    { iconClass: 'devicon-vuejs-plain colored', name: 'Vue.js', category: 'Frameworks' },
    { iconClass: 'devicon-django-plain', name: 'Django', category: 'Frameworks' },
    
    // Technologies
    { iconClass: 'devicon-git-plain colored', name: 'Git', category: 'Technologies' },
    { iconClass: 'devicon-npm-original-wordmark colored', name: 'npm', category: 'Technologies' },
    { iconClass: 'devicon-nodejs-plain colored', name: 'Node.js', category: 'Technologies' },
    { iconClass: 'devicon-express-original', name: 'Express', category: 'Technologies' },
    { iconClass: 'devicon-figma-plain colored', name: 'Figma', category: 'Technologies' },
    
    // ML & Data
    { iconClass: 'devicon-numpy-plain colored', name: 'NumPy', category: 'ML & Data' },
    { iconClass: 'devicon-pytorch-original colored', name: 'PyTorch', category: 'ML & Data' },
    { iconClass: 'devicon-tensorflow-original colored', name: 'TensorFlow', category: 'ML & Data' },
    { iconClass: 'devicon-jupyter-plain colored', name: 'Jupyter', category: 'ML & Data' },
    { iconClass: 'devicon-pandas-plain', name: 'Pandas', category: 'ML & Data' },
    
    // DevOps
    { iconClass: 'devicon-amazonwebservices-plain-wordmark colored', name: 'AWS', category: 'DevOps' },
    { iconClass: 'devicon-azure-plain colored', name: 'Azure', category: 'DevOps' },
    { iconClass: 'devicon-docker-plain colored', name: 'Docker', category: 'DevOps' },
    { iconClass: 'devicon-kubernetes-plain colored', name: 'Kubernetes', category: 'DevOps' },
    { iconClass: 'devicon-github-original', name: 'GitHub', category: 'DevOps' }
  ];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container-skills">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
          {filteredSkills.map((skill, index) => {
            return (
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
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <i className={`${skill.iconClass} text-4xl`}></i>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
