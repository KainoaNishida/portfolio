import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Software development engineer Intern",
      company: "Amazon",
      location: "Bellevue, WA",
      period: "July 2025 - September 2025",
      companyLink: "https://amazon.com",
      logo: `${import.meta.env.BASE_URL}amazon-logo.png`,
      bullets: [
  "I built a serverless automation that streamlined a complex change-management flow using AWS Lambda, Bedrock agents, and S3—so requests moved from days to minutes without manual handoffs.",
  "I collaborated with stakeholders to shape requirements, wrote approachable design docs, and shipped in small, reviewable slices that aligned with Amazon's SDLC rhythm.",
  "Behind the scenes, I focused on resilience—idempotent steps, smart retries and backoff, and clear observability with structured logs, metrics, and alerts.",
  "For knowledge ingestion, I wrote a regex-based preprocessor and a domain-aware chunking strategy, then embedded and indexed everything into an Amazon OpenSearch vector knowledge base.",
  "On top of that KB, I wired an agentic system that did retrieval-augmented reasoning and executed tools with guardrails, turning scattered docs into actionable workflows."
],
      technologies: ["AWS", "Cloud Infrastructure", "Distributed Systems"]
    },
    {
      title: "Software Engineer",
      company: "Commit the Change",
      location: "Irvine, CA",
      period: "November 2022 - June 2025",
      companyLink: "https://ctc-uci.com",
      logo: `${import.meta.env.BASE_URL}commit-the-change-logo.svg`,
      bullets: [
  "Partnered with nonprofit stakeholders to map real workflows into tickets and shipped features end-to-end—from design reviews to production rollouts.",
  "Built a multi-step, paginated, multimedia onboarding flow in React with Firebase Auth/Storage and form validation, saving progress between steps to reduce drop-off.",
  "Designed the data model and wrote SQL triggers/stored procedures that automatically compute and update KPIs (e.g., fulfillment rates, monthly routing totals), maintain rollups, and keep audit trails in sync.",
  "Implemented user-facing features like searchable tables, role-based dashboards, and CSV exports, and connected them to backend APIs for reliable, fast operations.",
  "Hardened reliability with input validation, graceful error states, and basic end-to-end checks; set up logs/metrics to surface problems early in staging and production."
],
      technologies: ["TypeScript", "React", "Node.js", "MongoDB", "AWS", "Firebase"]
    },
    {
      title: "Machine Learning Research Assistant",
      company: "Irvine Zhang Lab",
      location: "Irvine, CA",
      period: "January 2025 - Present",
      companyLink: "https://www.ics.uci.edu/~jingz31/",
      bullets: [
  "I’m driving three active research projects—RNA velocity with Neural ODEs, long-context sequence-to-Hi-C prediction, and knowledge distillation for DNA foundation models—with manuscripts targeted for late 2025.",
  "I turn prototypes into usable tools by packaging reusable PyTorch modules, CLI utilities, and clean configs so others in the lab can run experiments without code changes.",
  "I maintain reproducible benchmarks (datasets, metrics, and scripts) to compare baselines and ablations across GPUs and seeds.",
  "I collaborate closely with PhD mentors on study design, writing, and figures, aligning experiments to conference-ready standards.",
  "I also run deep literature dives—tracking leading genomics/ML papers and distilling takeaways to guide architectures and evaluation choices."
],
      technologies: ["PyTorch", "TensorFlow", "CUDA", "NumPy", "Scikit-learn", "HuggingFace"]
    },
    {
      title: "Software Engineer",
      company: "Irvine Neuroscience Laboratory",
      location: "Irvine, CA",
      period: "June 2024 - June 2025",
      companyLink: "https://faculty.sites.uci.edu/spatialneuro/",
      bullets: [
        "Contributed to a custom scheduling system that helped over 50 researchers coordinate experiments and resources."
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "ChakraUI", "JWT", "Docker"]
    }
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-12">
      <div>
        <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.2, ease: "easeOut" }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="mb-12"
        >
          <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
            experience
          </h2>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            my journey in software development, machine learning research, and technical leadership.
          </p>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <p>
              over the past few years, i've had the opportunity to work across different domains — from building production systems at scale to conducting cutting-edge research in computational biology. each role has taught me something unique about problem-solving, collaboration, and the craft of software development.
            </p>
            <p>
              whether it's designing resilient cloud infrastructure, collaborating with nonprofits to solve real-world problems, or pushing the boundaries of what's possible with deep learning, i'm driven by the challenge of building things that matter and learning something new every day.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left timeline line - positioned at 150px from left */}
          <div className="absolute top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" style={{ left: '150px' }}></div>
          
          <div className="relative">
            {experiences.map((experience, index) => {
              // Calculate the top position of this experience card
              const cardTop = index * 200; // Approximate, will be adjusted by actual card heights
              
              return (
                <div key={index} className="relative mb-8">
                  {/* Date on left side - extends to just before the timeline line */}
                  <div className="absolute left-0 top-0 text-right pr-3 flex flex-col items-end" style={{ width: '150px' }}>
                    {(() => {
                      const parts = experience.period.split(' - ');
                      const startDate = parts[0] || experience.period;
                      const endDate = parts[1] || 'present';
                      return (
                        <>
                          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 leading-tight whitespace-nowrap">
                            <span className="text-slate-400 dark:text-slate-500">start:</span> {startDate}
                          </div>
                          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 leading-tight mt-1 whitespace-nowrap">
                            <span className="text-slate-400 dark:text-slate-500">end:</span> {endDate}
                          </div>
                          {experience.location && (
                            <div className="text-xs font-mono text-orange-500 dark:text-orange-400 leading-tight mt-1 whitespace-nowrap">
                              {experience.location}
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>

                  {/* Timeline dot - positioned on the timeline line, outside the card */}
                  <div 
                    className="absolute z-10 flex items-center" 
                    style={{ 
                      left: '144px',  // 150px - 6px (half of 12px circle width) to center it
                      top: '6px',  // Center vertically between the two date lines
                      height: '12px'
                    }}
                  >
                    <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className="relative flex items-start"
                    custom={false}
                    variants={itemVariants}
                  >
                    <div className="w-full" style={{ marginLeft: '166px' }}>
                    <div className="bg-white dark:bg-slate-800 rounded p-6 border border-slate-200 dark:border-slate-700">
                      <div className="flex flex-col mb-3">
                        <div className="flex items-start gap-4">
                          {experience.logo && (
                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded flex items-center justify-center dark:bg-white p-1">
                              <img 
                                src={experience.logo} 
                                alt={`${experience.company} logo`}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex flex-col flex-1">
                            <a 
                              href={experience.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors text-base font-bold font-mono mb-1 inline-flex items-center gap-1"
                            >
                              {experience.company}
                              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <h3 className="text-sm text-slate-900 dark:text-white font-mono lowercase">
                              {experience.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      {experience.bullets && experience.bullets.length > 0 && (
                        <ul className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed font-mono space-y-2">
                          {experience.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-2">
                              <span className="text-orange-500 flex-shrink-0" style={{ marginTop: '0.35rem' }}>
                                <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <polygon points="2,2 22,12 2,22" strokeLinejoin="round" />
                                </svg>
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

