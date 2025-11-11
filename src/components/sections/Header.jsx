import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {

  return (
    <section id="intro" className="py-12">
      <div>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h1 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
            kainoa (kai) nishida
            </h1>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            software engineer, researcher, and builder
          </p>
          
          {/* Profile Image - Centered on mobile, floating on desktop */}
          <div className="flex justify-center mb-6 md:hidden">
            <motion.img
              src={`${import.meta.env.BASE_URL}pfp.jpg`}
              alt="Kainoa Nishida"
              className="w-32 rounded-full border-2 border-slate-300 dark:border-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </div>

          {/* Introduction Text with Floating Image */}
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-3 relative">
            {/* Floating Profile Image - Desktop only */}
            <div className="hidden md:block float-right ml-4 mb-2 relative mt-10">
              <motion.img
                src={`${import.meta.env.BASE_URL}pfp.jpg`}
                alt="Kainoa Nishida"
                className="w-32 sm:w-40 rounded-full border-2 border-slate-300 dark:border-slate-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </div>
            <p>
              aloha! welcome to my corner of the internet! i'm kai, and i love building things.
            </p>
            
            <p>
              i'm a student at the <a href="https://www.uci.edu/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">university of california, irvine<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>. i've worked as a software development engineer intern at <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">amazon<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>, a software engineer with <a href="https://ctc-uci.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">commit the change<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> partnering with local nonprofits, and a researcher in the <a href="https://www.ics.uci.edu/~jingz31/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">zhang lab<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> applying machine learning and deep learning to biology.
            </p>
            
            <p>
              and, i also love math. for example, i like doing random fermi questions, which you can find on the left. the general outline is to start with a reasonable fixed point, then reason through the details to land on an estimate. i used the same approach for those "lines of code" estimates, so take them with a grain of salt :)
            </p>
            
            <p>
              another thing i love to do is teach others. it's an experience like no other, being able to work together with others to solve complex problems. i've done this as an education director for <a href="https://ctc-uci.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">commit the change<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> where i led workshops and lectures to teach basic programming things such as typescript, git, relational databases, and the sdlc. i've also done this as a learning assistant for cs 161, our pivotal design and analysis of algorithms course at uci where we go over complex topics such as flow, dynamic programming, and divide and conquer.
            </p>
            
            <p>
              i'm excited about thoughtful software, learning new tools, and connecting with people. when i'm not coding, i'm gaming with friends, bouldering, outside somewhere, or getting a little too competitive on the soccer field.
            </p>
            
            <p>
              this site started as a portfolio, but i'd like it to grow into a running journal of what i'm building and learning. feel free to poke around - <Link to="/projects" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">projects<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>, <Link to="/research" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">research<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>, <Link to="/skills" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">skills<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>, <Link to="/background" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-0.5">background<svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link> - it's all here.
            </p>
            
            <p className="mt-6">
              —kainoa
            </p>
            {/* Clearfix for floating image */}
            <div className="clear-both"></div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Header; 