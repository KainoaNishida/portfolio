import React from 'react';
import { motion } from 'framer-motion';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      name: 'Photography',
      icon: '📷',
      description: 'Capturing moments and landscapes through my lens.'
    },
    {
      id: 2,
      name: 'Tennis',
      icon: '🎾',
      description: 'Playing competitively and following professional tournaments.'
    },
    {
      id: 3,
      name: 'Coffee Brewing',
      icon: '☕',
      description: 'Experimenting with different beans and brewing methods.'
    },
    {
      id: 4,
      name: 'Hiking',
      icon: '🥾',
      description: 'Exploring trails and enjoying nature.'
    },
    {
      id: 5,
      name: 'Reading',
      icon: '📚',
      description: 'Science fiction and technical books.'
    },
    {
      id: 6,
      name: 'Travel',
      icon: '✈️',
      description: 'Experiencing different cultures and cuisines.'
    }
  ];

  return (
    <section id="hobbies" className="py-20">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Hobbies & Interests
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            When I'm not coding, you can find me enjoying these activities. I believe maintaining a
            balanced life helps fuel creativity and problem-solving abilities.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.id}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{hobby.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
