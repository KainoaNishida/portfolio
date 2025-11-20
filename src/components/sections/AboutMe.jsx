import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const lastUpdated = 'nov 10, 2025';
  
  const facts = [
    { label: 'favorite color', value: 'orange' },
    { label: 'favorite movie', value: 'interstellar' },
    { label: 'favorite song', value: 'ode to the mets by the strokes' },
    { label: 'favorite food', value: 'udon' },
    { label: 'favorite programming language', value: 'c++ or python' },
    { label: 'currently reading', value: 'the girl with the dragon tattoo by stieg larsson' },
    { label: 'currently playing', value: 'project zomboid' },
    { label: 'favorite hobby', value: 'running' },
    { label: 'favorite soccer team', value: 'arsenal' },
    { label: 'favorite baseball team', value: 'dodgers' },
    { label: 'favorite basketball team', value: 'lakers' },
    { label: 'goat', value: 'lionel messi' },
    { type: 'divider' },
    { label: 'other games that i play', value: 'league of legends, apex legends, animal crossing, valorant, wukong' },
    { type: 'divider' },
    { label: 'other hobbies', value: 'soccer, bouldering, reading, painting, snowboarding, fashion, poker' },
    { type: 'divider' },
    { label: 'interests', value: 'mathematics, cloud computing, education, genomics, machine learning, game theory, software' }
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).toLowerCase();
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
          about me
        </h2>
        <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
          quick facts · last updated {lastUpdated}
        </p>
      </motion.div>

      <motion.div
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {facts.map((fact, index) => (
          <React.Fragment key={index}>
            {fact.type === 'divider' ? (
              <motion.div
                className="pt-3 mt-3 border-t border-dashed border-slate-300 dark:border-slate-700"
                variants={itemVariants}
              />
            ) : (
              <motion.div
                className="flex items-baseline gap-3"
                variants={itemVariants}
              >
                <span className="text-xs font-mono text-slate-500 dark:text-slate-500 w-[200px] flex-shrink-0">
                  {fact.label}:
                </span>
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  {fact.value}
                </span>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutMe;

