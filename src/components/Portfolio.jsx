import React from 'react';
import Header from './sections/Header';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Research from './sections/Research';

const SectionDivider = () => (
  <div className="py-28 flex justify-center items-center">
    <div className="w-96 h-1 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500"></div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="fixed left-10 inset-y-5 z-50 flex flex-col items-center">
        <div className="mt-4">
          <ThemeToggle />
        </div>
        <div className="flex-1 flex items-center">
          <Navbar />
        </div>
      </div>

      <div className="max-w-[100%] sm:px-6 lg:px-2 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-1 flex items-center justify-center">
          <Header />
        </div>

        {/* Experience Section - Combined work, projects, and research */}
        <div id="experience">
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Research />
        </div>
        <SectionDivider />
        
        {/* Background Section - Combined education, skills, and resume */}
        <div id="education">
          <Education />
          <SectionDivider />
          <Skills />
          <SectionDivider />
        </div>
        {/* <SectionDivider /> */}
        
        {/* Contact Section */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
