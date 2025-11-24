import React from 'react';

export const experienceContent = {
  title: "experience",
  subtitle: "my journey in software development, machine learning research, and technical leadership.",
  intro: [
    "over the past few years, i've had the opportunity to work across different domains — from building production systems at scale to conducting cutting-edge research in computational biology. each role has taught me something unique about problem-solving, collaboration, and the craft of software development.",
    "whether it's designing resilient cloud infrastructure, collaborating with nonprofits to solve real-world problems, or pushing the boundaries of what's possible with deep learning, i'm driven by the challenge of building things that matter and learning something new every day."
  ],
  experiences: [
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
        "I partnered with nonprofit stakeholders to map real workflows into tickets and shipped features end-to-end—from design reviews to production rollouts.",
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
      period: "December 2024 - Present",
      companyLink: "https://www.ics.uci.edu/~jingz31/",
      bullets: [
        "I'm driving three active research projects—RNA velocity with Neural ODEs, long-context sequence-to-Hi-C prediction, and knowledge distillation for DNA foundation models—with manuscripts targeted for late 2025.",
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
  ]
};

