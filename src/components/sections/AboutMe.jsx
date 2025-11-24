import React from 'react';
import { motion } from 'framer-motion';
import { aboutMeContent } from '../../content/aboutMe';

const AboutMe = () => {
  const facts = aboutMeContent.facts;

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
          {aboutMeContent.title}
        </h2>
        <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
          {aboutMeContent.subtitle.replace('{date}', aboutMeContent.lastUpdated)}
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

