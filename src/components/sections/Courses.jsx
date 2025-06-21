import React from 'react';
import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    {
      id: 1,
      code: 'CS 31',
      name: 'Introduction to Computer Science I',
      description: 'Fundamentals of programming in C++, including variables, control structures, functions, and object-oriented programming.',
      quarter: 'Fall 2023',
      grade: 'A'
    },
    {
      id: 2,
      code: 'CS 32',
      name: 'Introduction to Computer Science II',
      description: 'Advanced programming techniques in C++, data structures, and algorithms.',
      quarter: 'Winter 2024',
      grade: 'A'
    },
    {
      id: 3,
      code: 'CS 33',
      name: 'Computer Organization',
      description: 'Introduction to computer architecture, assembly language, and operating systems.',
      quarter: 'Spring 2024',
      grade: 'In Progress'
    },
    {
      id: 4,
      code: 'MATH 32A',
      name: 'Calculus of Several Variables',
      description: 'Multivariable calculus, partial derivatives, and multiple integrals.',
      quarter: 'Fall 2023',
      grade: 'A'
    },
    {
      id: 5,
      code: 'MATH 33A',
      name: 'Linear Algebra',
      description: 'Systems of linear equations, matrices, determinants, eigenvalues, and vector spaces.',
      quarter: 'Winter 2024',
      grade: 'A-'
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Relevant Coursework
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Key courses that have shaped my technical foundation and expertise.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {course.code} - {course.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                      {course.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {course.quarter}
                    </span>
                    <span className={`text-sm font-medium mt-1 ${
                      course.grade === 'In Progress' 
                        ? 'text-secondary-500 dark:text-secondary-400'
                        : 'text-accent-500 dark:text-accent-400'
                    }`}>
                      {course.grade}
                    </span>
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

export default Courses; 