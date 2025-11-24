import React from 'react';

// Helper function to create long descriptions with links
const createLongDescription = (content) => {
  return content;
};

export const projectsContent = {
  title: "selected projects",
  subtitle: "a showcase of my recent work in web development, data visualization, and full-stack applications",
  intro: "welcome to my projects page! here you'll find a wide range of the different projects I have created in my engineering journey, from  personal to professional projects, as well as everything in between. feel free to filter to find the most relevant ones :)",
  projects: [
    {
      id: 1,
      title: "Collete's Children Home",
      description: "Internal dashboard for client–manager matching, treatment tracking, and operations at a nonprofit serving disadvantaged mothers.",
      longDescription: (
  <>
    I built a <strong>production dashboard</strong> for{" "}
    <a
      href="https://www.coletteschildrenshome.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-0.5"
    >
      Colette&apos;s Children&apos;s Home
      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>{" "}
    that turns scattered spreadsheets into a <strong>single, reliable system for client care and operations</strong>. The platform
    centralizes client–manager matching, treatment progress, and donation tracking into one searchable, audit-friendly interface,
    while streamlining onboarding with multi-step forms, autosave, validation, and secure file uploads. Built with React, TypeScript,
    Node/Express, MongoDB, Firebase Auth/Storage, Chakra UI, and AWS integrations, it is designed to be <strong>easy for staff to use</strong> while
    maintaining <strong>data integrity, clear workflows, and fast reporting</strong>.
  </>
),

      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Chakra UI', 'Firebase', 'AWS SDK'],
      categories: ['software'],
      github: 'https://github.com/ctc-uci/cch',
      demo: 'https://www.youtube.com/watch?v=5TsfGhw38d4',
      status: 'Live',
      featured: true,
      year: '2024',
      hasPhotos: true,
      photoFolder: 'cch',
      photos: [
        `${import.meta.env.BASE_URL}project_photos/cch/dashboard.png`,
        `${import.meta.env.BASE_URL}project_photos/cch/client_table.png`,
        `${import.meta.env.BASE_URL}project_photos/cch/client_tracking.png`,
        `${import.meta.env.BASE_URL}project_photos/cch/donation_tracking.png`,
        `${import.meta.env.BASE_URL}project_photos/cch/forms.png`
      ],
      captions: ['Dashboard', 'Client Table', 'Client Tracking', 'Donation Tracking', 'Forms']
    },
    {
      id: 2,
      title: "UCLA Ranked",
      description: "ELO-driven ladder for UCLA with verified match reporting, live leaderboards, alumni profiles, and rich player stats.",
      longDescription: (
  <>
    Co-built with{" "}
    <a
      href="https://github.com/maxfukuh4ra/uclaranked"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-0.5"
    >
      Max Fukuhara
      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
    , UCLA Ranked turns casual pickup results into a <strong>transparent, competitive ladder</strong> for the UCLA tennis community. Players
    can report and verify match results with an audit trail, while a live ELO system powers dynamic leaderboards and season-based
    rankings that make progress visible over time. Rich player analytics (win/loss trends, streaks, head-to-head records, and
    season summaries) help students track their growth, and persistent alumni profiles with graduation-year tags and optional contact
    info support a <strong>lasting mentorship and alumni network</strong>. Under the hood, careful attention to reliability—pagination, rate limits,
    validation, and scheduled backups—keeps the system stable as the ladder grows.
  </>
),

      tech: ["Next.js", "TypeScript", "PostgreSQL", "Chakra UI", "AWS"],
      categories: ["software"],
      github: "https://github.com/maxfukuh4ra/uclaranked",
      status: "Live",
      featured: false,
      year: "2024"
    },
    {
      id: 3,
      title: "Sustainably",
      description: "Product search that ranks brands by an ML-based sustainability score, built at a Caltech hackathon.",
      longDescription: (
  <>
    Sustainably helps shoppers discover clothing from companies with <strong>stronger sustainability signals</strong> by turning scattered
    disclosures, impact reports, news, and product metadata into a single, continuous <strong>&quot;eco score&quot;</strong> for each brand. We built and
    validated this scoring pipeline against ESG benchmarks for publicly traded companies, then surfaced it through a React search
    experience with brand badges, explanatory tooltips, and company spotlight pages that summarize the rationale behind each score
    and link directly to sources. Backed by PostgreSQL and paginated APIs for storing products, brands, and model outputs, the
    product is designed to be <strong>transparent and assistive</strong>: every score highlights its contributing factors and caveats so users can
    make more informed, sustainable choices—not receive investment advice.
  </>
),

      tech: ["TypeScript", "Python", "PyTorch", "FastAPI", "React", "PostgreSQL", "AWS"],
      categories: ["machine learning", "artificial intelligence", "software"],
      github: "https://github.com/KainoaNishida/calhacks",
      demo: "https://www.youtube.com/watch?v=eRWfTVFnekc",
      status: "Completed",
      featured: true,
      year: "2025",
      hasPhotos: true,
      photoFolder: "sustainably",
      photos: [
        `${import.meta.env.BASE_URL}project_photos/sustainably/search.png`,
        `${import.meta.env.BASE_URL}project_photos/sustainably/search_result.png`,
        `${import.meta.env.BASE_URL}project_photos/sustainably/company_spotlight.png`,
        `${import.meta.env.BASE_URL}project_photos/sustainably/weekly_spotlight.png`,
        `${import.meta.env.BASE_URL}project_photos/sustainably/mission.png`
      ],
      captions: ["Search Interface", "Search Results", "Company Spotlight", "Weekly Spotlight", "Mission"]
    },
    {
      id: 4,
      title: "Fabflix",
      description: "Full-stack movie e-commerce site built from scratch with secure login, full-text search, and high-performance AWS deployment.",
      longDescription: (
  <>
    Fabflix is a <strong>Netflix-style movie platform</strong> where users can browse, search, and purchase from a catalog of thousands of films, built
    end-to-end from scratch to demonstrate the full web stack. It combines a secure Java/Tomcat backend and MySQL database—populated via
    custom XML ETL pipelines for rich movie, cast, and genre metadata—with a responsive JavaScript/jQuery frontend that supports live search,
    pagination, and smooth checkout flows. Deployed on AWS with Apache, HTTPS, and RESTful APIs, the system emphasizes <strong>security and
    scalability</strong> through hashed authentication, bot protection, parameterized queries, connection pooling, replication, and Kubernetes-based
    orchestration, turning the app into a realistic, production-grade environment rather than a toy demo.
  </>
),

      tech: ["Java", "MySQL", "Tomcat", "AWS", "jQuery", "Android SDK", "JDBC", "Apache", "Kubernetes", "HTTPS", "RESTful APIs", "reCAPTCHA", "Git", "JMeter"],
      categories: ["software"],
      demo: "https://youtu.be/vBxpvysVO_Y",
      status: "Completed",
      featured: false,
      year: "2024"
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description: "Minimalist React portfolio with expandable sections, real-time stats, and multi-page navigation.",
      longDescription: (
  <>
    A minimalist, performance-focused portfolio built to <strong>showcase my research, projects, and experience</strong> in a clean, distraction-free way.
    Content is organized into focused pages with fast navigation, while projects and research items expand from short summaries into richer detail
    when needed. Powered by React and Tailwind with lazy loading and lightweight animations, the site stays <strong>fast, readable, and pleasantly interactive</strong>
    without feeling heavy.
  </>
),


      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router", "Vercel"],
      categories: ["software"],
      github: "https://github.com/KainoaNishida/portfolio",
      status: "Live",
      featured: true,
      year: "2025"
    },
    {
      id: 6,
      title: "Feeding Pets of the Homeless",
      description: "Partner-site portal that streamlines onboarding and donation reporting for a nonprofit supporting homeless pet guardians.",
      longDescription: (
  <>
    Built a centralized portal for{" "}
    <a
      href="https://petsofthehomeless.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-0.5"
    >
      Feeding Pets of the Homeless
      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>{" "}
    that turns email- and spreadsheet-heavy workflows into a <strong>simple, trackable system for donation reporting and partner management</strong>.
    The portal gives HQ and partner sites clear role-based dashboards, streamlines donation submissions and onboarding through guided multi-step
    forms with autosave and file uploads, and keeps everyone aligned with automatic confirmations and in-app alerts, making it much easier to
    <strong> monitor impact, stay audit-ready, and support partners at scale</strong>.
  </>
),

      tech: ["React", "Firebase", "Node.js", "Express"],
      categories: ["software"],
      github: "https://github.com/ctc-uci/fph-frontend",
      status: "Live",
      featured: false,
      year: "2023",
      hasPhotos: true,
      photoFolder: "fph",
      photos: [
        `${import.meta.env.BASE_URL}project_photos/fph/admin-dashboard.png`,
        `${import.meta.env.BASE_URL}project_photos/fph/donation-form.png`,
        `${import.meta.env.BASE_URL}project_photos/fph/onboarding.png`
      ],
      captions: ["Dashboard", "Donation Form", "Onboarding Entry"]
    },
    {
      id: 7,
      title: "Valnotes",
      description: "Video note-taking for gameplay analysis with timestamped annotations and Riot Games data overlays.",
      longDescription: (
  <>
    Valnotes is a workspace for Valorant players and coaches to <strong>turn raw scrims and VODs into structured, searchable insight</strong>. Users can
    upload match recordings, scrub the timeline, and drop timestamped notes with tags and color labels, while match metadata, player stats, and
    round outcomes from the Riot Games API are overlaid alongside the video to ground every comment in context. Dedicated analysis views—like
    economy and ultimate tracking, streaks, and simple head-to-head charts—help reveal repeatable mistakes and strengths across matches, all
    backed by a secure MongoDB-powered backend with JWT sessions, rate-limited APIs, and schemas for users, videos, notes, and match links.
  </>
),

      tech: ["React", "Node.js", "Riot API", "MongoDB", "Express"],
      categories: ["software"],
      github: "https://github.com/KainoaNishida/Valnotes",
      status: "Live",
      featured: false,
      year: "2023",
      hasPhotos: true,
      photoFolder: "valnotes",
      photos: [
        `${import.meta.env.BASE_URL}project_photos/valnotes/photo1.png`,
        `${import.meta.env.BASE_URL}project_photos/valnotes/photo2.png`,
        `${import.meta.env.BASE_URL}project_photos/valnotes/photo3.png`,
        `${import.meta.env.BASE_URL}project_photos/valnotes/photo4.png`,
        `${import.meta.env.BASE_URL}project_photos/valnotes/photo5.png`,
        `${import.meta.env.BASE_URL}project_photos/valnotes/photo6.png`,
        `${import.meta.env.BASE_URL}project_photos/valnotes/photo7.png`
      ],
      captions: [
        "Video Upload Interface",
        "Annotation Tools",
        "Game Data Display",
        "Player Statistics",
        "Match Analysis",
        "Note Management",
        "Settings Panel"
      ]
    },
    {
      id: 8,
      title: "Pokéscape",
      description: "Java adventure puzzler with custom art, original sound design, and a handcrafted forest to explore.",
      longDescription: (
  <>
    Pokéscape is a 2D adventure puzzle game built in pure <strong>Java</strong> where players explore a hand-drawn forest, talk to NPCs, and solve
    environmental puzzles to rescue an endangered forest spirit. I designed the core gameplay loop and implemented a custom engine with a
    state manager, fixed-timestep game loop, and smooth scene transitions, then layered on a scriptable dialogue system with branching choices
    and a lightweight audio mixer for music and SFX. The result is a small but complete game that <strong>ties custom engine work, narrative, and art
    direction into one cohesive experience</strong>.
  </>
),

      tech: ["Java"],
      categories: ["software", "games"],
      github: "https://github.com/KainoaNishida/pokescape",
      status: "Completed",
      featured: false,
      year: "2023",
      demo: "https://youtu.be/VISm_A_FCxw",
      hasPhotos: true,
      photoFolder: "pokescape",
      photos: [
        `${import.meta.env.BASE_URL}project_photos/pokescape/start.png`,
        `${import.meta.env.BASE_URL}project_photos/pokescape/2.png`,
        `${import.meta.env.BASE_URL}project_photos/pokescape/3.png`,
        `${import.meta.env.BASE_URL}project_photos/pokescape/4.png`,
        `${import.meta.env.BASE_URL}project_photos/pokescape/5.png`,
        `${import.meta.env.BASE_URL}project_photos/pokescape/6.png`,
        `${import.meta.env.BASE_URL}project_photos/pokescape/7.png`
      ],
      captions: [
        "Start Screen",
        "Dialogue 1",
        "Dialogue 2",
        "Dialogue 3",
        "World Exploration 1",
        "World Exploration 2",
        "Puzzle"
      ]
    },
    {
      id: 9,
      title: "Get Inspired",
      description: "Survey & analytics portal for Pismo clam restoration with fast data entry, queryable records, and auto-computed stats.",
      longDescription: (
  <>
    Built for{" "}
    <a
      href="https://getinspiredinc.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-0.5"
    >
      Get Inspired
      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
    , this app turns raw beach survey submissions into <strong>clean, searchable data and instant insights</strong> for educators and researchers.
    A guided entry flow helps teams capture species, size, color, GPS, photos, and notes with fewer errors, while a central dashboard and
    results table make it easy to filter by site, date, or tide and quickly verify records. CSV exports respect active filters so that
    partners can generate <strong>reproducible reports for agencies and long-term monitoring</strong> without extra spreadsheet work.
  </>
),

      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      categories: ["software"],
      github: "https://github.com/ctc-uci/get-inspired-frontend",
      status: "Completed",
      featured: false,
      year: "2024",
      hasPhotos: true,
      photoFolder: "gsp",
      photos: [
        `${import.meta.env.BASE_URL}project_photos/gsp/1.png`,
        `${import.meta.env.BASE_URL}project_photos/gsp/2.png`,
        `${import.meta.env.BASE_URL}project_photos/gsp/3.png`,
        `${import.meta.env.BASE_URL}project_photos/gsp/4.png`,
        `${import.meta.env.BASE_URL}project_photos/gsp/5.png`
      ],
      captions: [
        "Survey Dashboard",
        "Data Entry Form",
        "Statistics Overview",
        "Survey Results",
        "Data Export"
      ]
    },
    {
      id: 10,
      title: "Agape",
      description: "Mental health AI chatbot with real-time mood analysis via a Chrome extension and OpenAI-powered responses.",
      longDescription: (
  <>
    Agape is a mental-health–focused assistant that <strong>analyzes live chats in the browser and offers supportive, context-aware guidance</strong>.
    A Chrome extension streams minimal snippets of on-page conversation to an Express.js backend that uses the OpenAI API to infer mood,
    track sentiment trends, and suggest compassionate replies. Cleaned and templated chat data is stored in an AWS RDS SQL database with
    user and session metadata, and a React frontend surfaces live mood predictions, suggested responses, and simple longitudinal
    visualizations so users can better understand and support the people they’re talking to.
  </>
),

      tech: ["React", "Express.js", "OpenAI API", "Chrome Extension", "AWS", "SQL"],
      categories: ["software", "artificial intelligence"],
      github: "https://github.com/KainoaNishida/agape",
      demo: "https://youtu.be/lDC4x5Eh4fE",
      status: "Live",
      featured: false,
      year: "2024"
    },
    {
      id: 11,
      title: "Maze Runner",
      description: "Interactive Python visualizer for maze generation and pathfinding algorithms.",
      longDescription: (
  <>
    Maze Runner is an educational visualization tool built with <strong>Python</strong> and <strong>Pygame</strong> that helps learners <strong>see maze algorithms and
    pathfinding strategies unfold in real time</strong>. It animates popular generation methods like recursive backtracking and randomized Prim’s,
    alongside solvers like BFS and DFS, with controls for speed, maze size, and start/goal placement to encourage experimentation.
    Simple overlays report timing and step counts (via <strong>NumPy</strong>), turning abstract ideas about algorithm design and efficiency into a concrete,
    interactive learning experience.
  </>
),

      tech: ["Python", "Pygame", "NumPy"],
      categories: ["algorithms", "software"],
      github: "https://github.com/KainoaNishida/maze-solver",
      demo: "https://youtu.be/mmP9CtKYGtM",
      status: "Completed",
      featured: false,
      year: "2023"
    },
    {
      id: 12,
      title: "Minecraft RL Agent",
      description: "Deep Q-learning agent in Malmo that learns to navigate caves and mine diamonds efficiently.",
      longDescription: (
  <>
    A reinforcement learning project using <strong>Microsoft Malmo</strong> to train an agent that can <strong>navigate caves and mine diamonds autonomously</strong>.
    I designed custom Minecraft-like environments with varied cave layouts, hazards, and ore distributions, then used a DQN-based policy
    (with a convolutional encoder in <strong>PyTorch</strong>) over frame-stacked observations and inventory features to learn movement, mining, and tool use.
    Through careful reward shaping and a simple curriculum that progresses from coal and iron to diamonds, the agent learns to reach its
    first diamond efficiently and reliably across randomized seeds.
  </>
),

      tech: ["Python", "PyTorch", "Malmo", "NumPy"],
      categories: ["machine learning", "artificial intelligence"],
      demo: "https://youtu.be/kgeDFwxfVCM",
      status: "Completed",
      featured: false,
      year: "2023"
    },
    {
      id: 13,
      title: "Rubik's Cube Solver",
      description: "Python visualizer that scrambles and solves a 3×3 using group-theoretic move notation and permutation math.",
      longDescription: (
  <>
    A 3×3 Rubik&apos;s Cube solver inspired by MIT&apos;s &quot;The Mathematics of the Rubik&apos;s Cube,&quot; modeling the cube as
    permutations of faces, edges, and corners with standard move generators (U, D, L, R, F, B) and their inverses. The tool focuses on
    <strong>making group theory tangible</strong> by visualizing scrambles and step-by-step solutions, showing how moves compose, invert, and reduce
    into structured solving phases—from building the cross to orienting and permuting the final layer—while enforcing parity and orientation
    invariants. A Matplotlib-based viewer lets users play back each move, making the underlying algebra feel concrete and extensible for new
    algorithms or pattern sets.
  </>
),

      tech: ["Python", "NumPy", "Matplotlib"],
      categories: ["algorithms", "software"],
      status: "Completed",
      featured: false,
      year: "2024"
    },
    {
      id: 14,
      title: "Minesweeper AI Solver",
      description: "Python AI agent that solves Minesweeper boards using constraint satisfaction and heuristic search.",
      longDescription: (
  <>
    The Minesweeper AI Solver is a fully automated agent that uses <strong>classical AI and combinatorial reasoning</strong> to tackle boards of
    arbitrary size and difficulty. It treats each revealed tile as a constraint, propagates implications across the board, splits the
    frontier into independent regions to keep the search manageable, and uses recursive backtracking with strong pruning to rule out
    impossible mine configurations. Guided by MRV-style heuristics and equivalence-class compression, the solver focuses on the most
    informative moves first, turning a simple game into a concrete showcase of <strong>constraint satisfaction in action</strong>.
  </>
),

      tech: ["Python", "NumPy"],
      categories: ["algorithms", "artificial intelligence", "software"],
      github: "https://github.com/KainoaNishida/minesweeper-solver",
      status: "Completed",
      featured: false,
      year: "2024"
    }
  ]
};

