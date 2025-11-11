import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Languages',
    'Web & Database',
    'Frameworks',
    'Technologies',
    'ML & Data',
    'DevOps',
    'Cloud'
  ];
  
  const skills = [
    // Languages
    { name: 'Python', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'HTML5', category: 'Languages' },
    { name: 'CSS3', category: 'Languages' },
  
    // Web & Database
    { name: 'PostgreSQL', category: 'Web & Database' },
    { name: 'MongoDB', category: 'Web & Database' },
    { name: 'MySQL', category: 'Web & Database' },
    { name: 'Firebase', category: 'Web & Database' },
    { name: 'Prisma ORM', category: 'Web & Database' },
    { name: 'GraphQL', category: 'Web & Database' },
    { name: 'REST APIs', category: 'Web & Database' },
  
    // Frameworks
    { name: 'React', category: 'Frameworks' },
    { name: 'Next.js', category: 'Frameworks' },
    { name: 'Tailwind CSS', category: 'Frameworks' },
    { name: 'Chakra UI', category: 'Frameworks' },
    { name: 'Express.js', category: 'Frameworks' },
    { name: 'FastAPI', category: 'Frameworks' },
    { name: 'Flask', category: 'Frameworks' },
    { name: 'Node.js', category: 'Frameworks' },
    { name: 'Spring Boot', category: 'Frameworks' },
  
    // Technologies
    { name: 'Git', category: 'Technologies' },
    { name: 'GitHub', category: 'Technologies' },
    { name: 'npm', category: 'Technologies' },
    { name: 'Postman', category: 'Technologies' },
    { name: 'jQuery', category: 'Technologies' },
    { name: 'Tomcat', category: 'Technologies' },
    { name: 'Android SDK', category: 'Technologies' },
    { name: 'VS Code', category: 'Technologies' },
    { name: 'JMeter', category: 'Technologies' },
  
    // ML & Data
    { name: 'NumPy', category: 'ML & Data' },
    { name: 'Pandas', category: 'ML & Data' },
    { name: 'PyTorch', category: 'ML & Data' },
    { name: 'TensorFlow', category: 'ML & Data' },
    { name: 'Scikit-learn', category: 'ML & Data' },
    { name: 'Matplotlib', category: 'ML & Data' },
    { name: 'Seaborn', category: 'ML & Data' },
    { name: 'Jupyter', category: 'ML & Data' },
    { name: 'OpenCV', category: 'ML & Data' },
  
    // DevOps
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'CI/CD', category: 'DevOps' },
    { name: 'Nginx', category: 'DevOps' },
    { name: 'Linux', category: 'DevOps' },
    { name: 'Bash', category: 'DevOps' },
    { name: 'GitHub Actions', category: 'DevOps' },
  
    // Cloud
    { name: 'AWS EC2', category: 'Cloud' },
    { name: 'AWS Lambda', category: 'Cloud' },
    { name: 'AWS S3', category: 'Cloud' },
    { name: 'AWS RDS', category: 'Cloud' },
    { name: 'AWS Bedrock', category: 'Cloud' },
    { name: 'AWS CloudFormation', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Firebase Hosting', category: 'Cloud' },
    { name: 'Vercel', category: 'Cloud' }
  ];
  

  const categoryCounts = {
    All: skills.length,
    ...categories.reduce((acc, cat) => {
      if (cat === 'All') return acc;
      acc[cat] = skills.filter(s => s.category === cat).length;
      return acc;
    }, {})
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className="py-12">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
            skills
          </h2>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
            A comprehensive overview of my technical expertise and tools I work with.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
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
              {`${category.toLowerCase()} (${categoryCounts[category] ?? 0})`}
            </button>
          ))}
        </div>

        {/* Skills as tags */}
        <motion.div
          key={selectedCategory}
          className="flex flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {(selectedCategory === 'All' 
            ? skills 
            : skills.filter(skill => skill.category === selectedCategory)
          ).map((skill, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 text-xs font-mono text-orange-500 rounded"
              variants={itemVariants}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;