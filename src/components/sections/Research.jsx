import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const researchProjects = [
    {
      id: 1,
      title: 'RNA Velocity Estimation using Deep Learning',
      subtitle: 'Modeling Cell Fate Transitions with Deep Generative Models',
      period: 'January 2024 - Present',
      description: 'Developing continuous normalizing flow (CNF) models to predict cell fate transitions from single-cell RNA-seq data. Inspired by VeloVAE, this approach replaces kinetic equations with a learned CNF generative model to flexibly capture population-level dynamics through smooth, data-driven transformations.',
      technologies: ['Deep Generative Models', 'RNA Velocity', 'Normalizing Flows', 'Variational Autoencoders'],
      image: 'rna-flux-logo.png'
    },
    {
      id: 2,
      title: 'Knowledge Distillation for DNA Foundation Models',
      subtitle: 'Exploring KD Algorithms to Train Small Genomic Models',
      period: 'March 2024 - Present',
      description: 'Making large-scale DNA foundation models more computationally accessible through knowledge distillation. This project develops lightweight student models that maintain high performance on genomic tasks while significantly reducing compute and memory requirements.',
      technologies: ['Knowledge Distillation', 'Genomics', 'DNA Foundation Models'],
      image: 'kd-logo.png'
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Research
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Current research in deep learning and computational biology at the Zhang Lab, UC Irvine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-md shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="md:w-72 md:h-72 relative flex items-center justify-center p-6 self-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 font-medium text-sm mt-1">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {project.period}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research; 