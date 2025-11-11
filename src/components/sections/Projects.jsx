import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [photoIndices, setPhotoIndices] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({});
  const isExpanded = useCallback((id) => !!expandedProjects[id], [expandedProjects]);
  const toggleExpanded = useCallback((id) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Collete's Children Home Dashboard",
      description: "Internal dashboard for client–manager matching, treatment tracking, and operations at a nonprofit serving disadvantaged mothers.",
      longDescription: (
        <>
          Built a production dashboard for{" "}
          <a
            href="https://www.coletteschildrenshome.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-0.5"
          >
            Colette&apos;s Children&apos;s Home
            <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          {" "}that turns scattered spreadsheets into a single, reliable system:
          <br />
          <br />
          • <strong>Client–manager matching:</strong> searchable client table with filters, assignment workflow, and role-based views.<br />
          • <strong>Treatment tracking:</strong> progress notes, milestones, and status history with audit-friendly timestamps.<br />
          • <strong>Donations & operations:</strong> a unified ledger for donation intake and disbursement, with quick reports and CSV export.<br />
          • <strong>Forms & onboarding:</strong> multi-step, paginated forms with autosave, validation, file uploads (Firebase Storage), and admin review.<br />
          • <strong>Reliability & DX:</strong> input validation, optimistic UI, empty/error states, and basic metrics/logging for easier support.
          <br />
          <br />
          Under the hood it uses React + TypeScript, Node/Express APIs, MongoDB for data modeling, Firebase Auth/Storage for identity and secure uploads, Chakra UI for accessible components, and the AWS SDK for durable document storage integrations.
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
    }
    ,
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          , UCLA Ranked turns pickup results into a transparent, competitive ladder:
          <br />
          <br />
          • <strong>Match reporting & verification:</strong> players submit results; opponents confirm; admins can resolve disputes with an audit trail.<br />
          • <strong>Live ELO & leaderboards:</strong> instant rating updates, season filters, and historical snapshots to track progress over time.<br />
          • <strong>Player analytics:</strong> win/loss, streaks, head-to-head, surface/opponent breakdowns, and per-season summaries with exportable tables.<br />
          • <strong>Alumni network:</strong> profiles that carry forward after graduation, with graduation-year tagging and opt-in contact links for mentorship and events.<br />
          • <strong>Reliability & ops:</strong> pagination and rate-limits on API routes, input validation, error/empty states, and scheduled jobs for backups and recomputes.
          <br />
          <br />
        </>
      ),
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Chakra UI", "AWS"],
      categories: ["software"],
      github: "https://github.com/maxfukuh4ra/uclaranked",
      status: "Live",
      featured: false,
      year: "2024"
    }
    ,
    {
      id: 3,
      title: "Sustainably",
      description: "Product search that ranks brands by an ML-based sustainability score, built at a Caltech hackathon.",
      longDescription: (
        <>
          Sustainably helps shoppers discover clothing from companies with stronger sustainability signals. We built a small
          ML pipeline that aggregates company attributes (disclosures, impact reports, news signals, and product metadata)
          and produces a continuous “eco score,” then validated it against publicly traded companies’ ESG benchmarks.
          <br />
          <br />
          • <strong>Search & results:</strong> a React UI for product search with brand badges, score tooltips, and quick filters.<br />
          • <strong>Company spotlight:</strong> profile pages with an at-a-glance scorecard, rationale snippets, and links to sources.<br />
          • <strong>Weekly spotlight:</strong> a rotating highlight that surfaces new or improving brands and explains the lift.<br />
          • <strong>Data & storage:</strong> product/brand metadata and model outputs persisted in PostgreSQL; APIs paginate and cache responses.<br />
          • <strong>Transparency:</strong> every score shows contributing factors and caveats—this is an assistive signal,
          not investment advice.
          <br />
          <br />
        </>
      ),
      tech: ["TypeScript", "Python", "PyTorch", "FastAPI", "React", "PostgreSQL", "AWS"],
      categories: ["machine learning", "artificial intelligence", "software"],
      github: "https://github.com/KainoaNishida/calhacks",
      demo: "https://www.youtube.com/watch?v=eRWfTVFnekc",
      status: "Completed",
      featured: true,
      year: "2024",
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
    }
    ,
    {
      id: 4,
      title: "Fabflix",
      description: "Full-stack movie e-commerce site built from scratch with secure login, full-text search, and high-performance AWS deployment.",
      longDescription: (
        <>
          Fabflix is a production-grade Netflix-style web app where users can browse, search, and purchase from a catalog of thousands of movies.  
          Built entirely from scratch, it demonstrates the complete software stack—from backend architecture and database engineering to frontend interaction and performance scaling.
          <br /><br />
          • <strong>Architecture:</strong> designed and deployed a full-stack system using Java, Tomcat, MySQL, and Apache on AWS EC2 with HTTPS and RESTful APIs.<br />
          • <strong>Frontend:</strong> built a rich interface with JavaScript, jQuery, and AJAX for live search, pagination, and responsive UX across the catalog and checkout flows.<br />
          • <strong>Database:</strong> implemented an ETL pipeline that parses large XML datasets to expand the MySQL movie database with metadata, cast, and genre relationships.<br />
          • <strong>Security:</strong> added SHA-256 password hashing, reCAPTCHA bot detection, session-based login, and parameterized queries to prevent SQL injection.<br />
          • <strong>Performance:</strong> optimized throughput via MySQL connection pooling, read replication, query caching, and Apache load balancing, measured with JMeter benchmarking.<br />
          • <strong>Deployment:</strong> containerized the application and orchestrated it on a Kubernetes cluster spanning multiple AWS instances for scalability and fault tolerance.<br />
          <br /><br />
        </>
      ),
      tech: ["Java", "MySQL", "Tomcat", "AWS", "jQuery", "Android SDK", "JDBC", "Apache", "Kubernetes", "HTTPS", "RESTful APIs", "reCAPTCHA", "Git", "JMeter"],
      categories: ["software"],
      demo: "https://youtu.be/vBxpvysVO_Y",
      status: "Completed",
      featured: false,
      year: "2023"
    }
    ,
    {
      id: 5,
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
          </a>
          {" "}that turns email- and spreadsheet-heavy workflows into a simple, trackable system:
          <br /><br />
          • <strong>Admin dashboard:</strong> role-based views for sites vs. HQ, with searchable tables, status filters, and CSV exports for audits and reports.<br />
          • <strong>Donation reporting:</strong> guided form with validation, autosave, and file uploads (receipts/photos via Firebase Storage); submissions flow into review queues with clear states.<br />
          • <strong>Partner onboarding:</strong> multi-step, paginated intake that saves progress between steps and captures key documents, contacts, and service capacity.<br />
          • <strong>Communication:</strong> automatic email confirmations and in-app alerts on approvals, rejections, or missing info to keep partners in sync.<br />
          <br /><br />
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
    }
    ,
    {
      id: 6,
      title: "Valnotes",
      description: "Video note-taking for gameplay analysis with timestamped annotations and Riot Games data overlays.",
      longDescription: (
        <>
          Valnotes lets players and coaches upload scrims/VODs, drop timestamped notes, and layer in match data pulled from the{" "}
          <a
            href="https://developer.riotgames.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-0.5"
          >
            Riot Games API
            <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
          </a>
          . The result is a single workspace to review plays, tag decisions, and visualize patterns across matches.
          <br /><br />
          • <strong>Video review:</strong> upload VODs, scrub the timeline, and create timestamped notes with tags, color labels, and quick keybinds.<br />
          • <strong>Data overlays:</strong> pull match metadata, player stats, and round outcomes from Riot; show per-round summaries alongside the note timeline.<br />
          • <strong>Analysis views:</strong> head-to-head panels, economy/ult tracking, streaks, and simple charts to spot repeatable mistakes or strengths.<br />
          • <strong>Backend & auth:</strong> secure uploads, JWT sessions, rate-limited API routes, and MongoDB schemas for users, videos, notes, and match links.
          <br /><br />
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
    }
    ,
    {
      id: 7,
      title: "Pokéscape",
      description: "Java adventure puzzler with custom art, original sound design, and a handcrafted forest to explore.",
      longDescription: (
        <>
          Pokéscape is a 2D adventure puzzle game built in pure <strong>Java</strong> where players traverse a hand-drawn forest,
          talk to NPCs, and solve environmental puzzles to rescue an endangered forest spirit. I designed the core loop,
          implemented the engine, and collaborated with a professional artist for sprites, tiles, and UI, plus original SFX/music.
          <br /><br />
          • <strong>Gameplay:</strong> exploration, dialogue choices, inventory gating, and puzzle rooms that unlock new forest areas.<br />
          • <strong>Engine:</strong> custom state manager (title ↔ gameplay ↔ dialogue ↔ pause), fixed-timestep game loop, and scene transitions.<br />
          • <strong>Dialogue system:</strong> scriptable conversations with portrait frames, typing effects, and branching responses.<br />
          • <strong>Audio:</strong> lightweight mixer for music/SFX, with spatial cues and per-scene playlists for atmosphere.<br />
          <br /><br />
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
    }
    ,
    {
      id: 8,
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
          , this app turns beach surveys into clean, searchable data and instant insights:
          <br /><br />
          • <strong>Survey dashboard:</strong> at-a-glance KPIs (counts by color/status, CPUE, size distributions) with filters for date range, site, tide, and team.<br />
          • <strong>Data entry:</strong> guided form for species/size/color, GPS/location, date/time, photos, and notes with validation and autosave to reduce errors in the field.<br />
          • <strong>Results table:</strong> searchable/paginated records with advanced filters and quick detail panels for verifying submissions.<br />
          • <strong>Data export:</strong> CSV downloads for sharing with researchers and agencies; exports respect current filters for reproducible reports.<br />
          <br /><br />
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
    }
    ,
    {
      id: 9,
      title: "Agape",
      description: "Mental health AI chatbot with real-time mood analysis via a Chrome extension and OpenAI-powered responses.",
      longDescription: (
        <>
          Agape is a mental-health–focused assistant that analyzes live chats in the browser and returns supportive, context-aware guidance:
          <br /><br />
          • <strong>Chrome extension:</strong> captures on-page chat text in real time and sends minimal snippets to the backend for analysis.<br />
          • <strong>AI inference:</strong> Express.js service integrates the OpenAI API for mood classification, sentiment trends, and tailored response suggestions.<br />
          • <strong>Data pipeline:</strong> web-scraped text is cleaned and templated, then stored in SQL (AWS RDS) with user/session metadata for analytics and history.<br />
          • <strong>Frontend:</strong> React UI (HTML/CSS) surfaces live mood predictions, suggested replies, and longitudinal visualizations pulled from the database.<br />
          <br /><br />
        </>
      ),
      tech: ["React", "Express.js", "OpenAI API", "Chrome Extension", "AWS", "SQL"],
      categories: ["software", "artificial intelligence"],
      github: "https://github.com/KainoaNishida/agape",
      demo: "https://youtu.be/lDC4x5Eh4fE",
      status: "Live",
      featured: false,
      year: "2024"
    }
    
    ,
    {
      id: 10,
      title: "Maze Runner",
      description: "Interactive Python visualizer for maze generation and pathfinding algorithms.",
      longDescription: (
        <>
          Maze Runner is an educational visualization tool built with <strong>Python</strong> and <strong>Pygame</strong> that brings maze algorithms to life. 
          It shows how different generation and solving strategies behave in real time—helping learners see computational thinking unfold step by step.
          <br /><br />
          • <strong>Maze generation:</strong> supports recursive backtracking, randomized Prim’s, and Kruskal’s algorithms with color-coded growth to show frontier expansion.<br />
          • <strong>Pathfinding:</strong> visualizes breadth-first search (BFS), depth-first search (DFS), and A* with clear traversal and backtrack animations.<br />
          • <strong>Visualization controls:</strong> adjustable speed sliders, maze size, start/goal placement, and instant reset for quick experimentation.<br />
          • <strong>Performance insights:</strong> overlays generation/solving time, step count, and algorithm efficiency metrics using <strong>NumPy</strong> for computation.<br />
          • <strong>Learning experience:</strong> designed for students exploring algorithmic design, offering a tangible way to connect theory to runtime behavior.
          <br /><br />
        </>
      ),
      tech: ["Python", "Pygame", "NumPy"],
      categories: ["algorithms", "software"],
      github: "https://github.com/KainoaNishida/maze-solver",
      demo: "https://youtu.be/mmP9CtKYGtM",
      status: "Completed",
      featured: false,
      year: "2023"
    }
    ,
    {
      id: 11,
      title: "Minecraft RL Agent",
      description: "Deep Q-learning agent in Malmo that learns to navigate caves and mine diamonds efficiently.",
      longDescription: (
        <>
          A reinforcement learning project using <strong>Microsoft Malmo</strong> to train an agent for diamond mining.
          The agent learns navigation, tool use, and resource gathering through reward shaping and curriculum tasks that
          progress from coal/iron to diamond.  
          <br /><br />
          • <strong>Environment:</strong> custom Malmo missions with procedurally varied cave layouts, sparse lighting, lava hazards, and diamond targets.<br />
          • <strong>State & actions:</strong> frame-stacked observations + inventory/status features; discrete action set for movement, mining, and item use.<br />
          • <strong>Algorithm:</strong> DQN with target network, epsilon-greedy exploration, and prioritized experience replay; conv encoder + small MLP head in <strong>PyTorch</strong>.<br />
          • <strong>Reward shaping:</strong> positive rewards for ore discovery/extraction and goal completion; penalties for damage/timeouts; bonuses for efficient pathing.<br />
          • <strong>Training:</strong> mini-batch updates on GPU with gradient clipping; curriculum schedules reduce exploration over time for stable convergence.<br />
          • <strong>Evaluation:</strong> success rate to first diamond, steps-to-diamond, survival rate, and average episodic return across randomized seeds.
          <br /><br />
          <a
            href="https://youtu.be/kgeDFwxfVCM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-0.5"
          >
            YouTube
            <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          .
        </>
      ),
      tech: ["Python", "PyTorch", "Malmo", "NumPy"],
      categories: ["machine learning", "artificial intelligence"],
      demo: "https://youtu.be/kgeDFwxfVCM",
      status: "Completed",
      featured: false,
      year: "2023"
    }
    ,
    {
      id: 12,
      title: "Rubik's Cube Solver",
      description: "Python visualizer that scrambles and solves a 3×3 using group-theoretic move notation and permutation math.",
      longDescription: (
        <>
          A 3×3 solver inspired by MIT’s “The Mathematics of the Rubik’s Cube.” The cube is modeled as permutations of faces/edges/corners,
          with generators (U, D, L, R, F, B) and their inverses. The program visualizes scrambles and step-by-step solutions, showing how
          group operations compose, invert, and reduce sequences.
          <br /><br />
          • <strong>Representation:</strong> sticker-level permutations with orientation tracking for corners/edges; moves are group elements you can compose/invert.<br />
          • <strong>Solving pipeline:</strong> structured phases (reduce cross → place corners/edges → final layer orientation/permutation) guided by admissible heuristics.<br />
          • <strong>Notation & proofs-of-correctness:</strong> human-readable sequences with sanity checks for parity and orientation invariants.<br />
          • <strong>Visualization:</strong> Matplotlib renders scrambles and each solution step; playback controls make the group actions tangible.<br />
          • <strong>Extensibility:</strong> clean move tables and helper utilities to add algorithms, pattern sets, or alternative metrics.
          <br /><br />
        </>
      ),
      tech: ["Python", "NumPy", "Matplotlib"],
      categories: ["algorithms", "software"],
      status: "Completed",
      featured: false,
      year: "2023"
    },
    {
      id: 13,
      title: "Minesweeper AI Solver",
      description: "Python AI agent that solves Minesweeper boards using constraint satisfaction and heuristic search.",
      longDescription: (
        <>
          The Minesweeper AI Solver is a fully automated agent that can solve boards of arbitrary size and difficulty using classical AI and combinatorial reasoning:
          <br /><br />
          • <strong>Constraint satisfaction:</strong> models each revealed tile as a local constraint and propagates implications across the board.<br />
          • <strong>Frontier splitting:</strong> divides independent regions to reduce branching complexity and improve runtime.<br />
          • <strong>Recursive backtracking:</strong> systematically explores possible mine placements with pruning via early contradiction detection.<br />
          • <strong>Heuristics:</strong> employs the Minimum Remaining Value (MRV) heuristic and equivalence-class compression for optimal move selection.<br />
        </>
      ),
      tech: ["Python", "NumPy"],
      categories: ["algorithms", "artificial intelligence", "software"],
      github: "https://github.com/KainoaNishida/minesweeper-solver",
      status: "Completed",
      featured: false,
      year: "2024"
    },
    {
      id: 14,
      title: "Personal Portfolio",
      description: "Minimalist React portfolio with expandable sections, real-time stats, and multi-page navigation.",
      longDescription: (
        <>
          A minimalist, performance-focused portfolio built to showcase research, projects, and experience with clean design and smooth interactions:
          <br />
          <br />
          • <strong>Multi-page navigation:</strong> React Router powers separate pages for home, experience, projects, research, background, skills, blog, and contact with instant route transitions.<br />
          • <strong>Expandable content:</strong> projects and research items collapse to short descriptions and expand to reveal full details, technologies, and media galleries with photo navigation.<br />
          • <strong>Real-time widgets:</strong> world clock with multiple timezones, LeetCode stats via GraphQL API, lines of code estimates, Fermi questions, and test scores in a fixed sidebar.<br />
          • <strong>Performance optimizations:</strong> lazy-loaded pages, GPU-accelerated animations, native image lazy loading, reduced backdrop blur, and CSS containment for smoother scrolling.<br />
          • <strong>Design system:</strong> Tailwind CSS with custom dark mode (slate-1000), orange accent colors, monospace typography, and consistent minimalist styling across all sections.<br />
          • <strong>Interactive features:</strong> category-based project filtering with counts, expandable blog posts, PDF resume viewer with zoom controls, and smooth Framer Motion animations.<br />
          <br />
          <br />
        </>
      ),
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router", "Vercel"],
      categories: ["software"],
      github: "https://github.com/KainoaNishida/portfolio",
      demo: "https://kainoanishida.github.io/portfolio",
      status: "Live",
      featured: true,
      year: "2025"
    }
    
    
    
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const nextPhoto = useCallback((projectId) => {
    setPhotoIndices(prev => {
      const currentIndex = prev[projectId] || 0;
      const project = projects.find(p => p.id === projectId);
      const maxIndex = project && project.photos ? project.photos.length - 1 : 0;
      return {
        ...prev,
        [projectId]: Math.min(currentIndex + 1, maxIndex)
      };
    });
  }, [projects]);

  const prevPhoto = useCallback((projectId) => {
    setPhotoIndices(prev => {
      const currentIndex = prev[projectId] || 0;
      return {
        ...prev,
        [projectId]: Math.max(currentIndex - 1, 0)
      };
    });
  }, []);

  const getCurrentPhotoIndex = useCallback((projectId) => {
    return photoIndices[projectId] || 0;
  }, [photoIndices]);

  // Get all unique categories
  const categories = useMemo(() => {
    const allCategories = new Set();
    projects.forEach(project => {
      if (project.categories) {
        project.categories.forEach(cat => allCategories.add(cat));
      }
    });
    return ['all', ...Array.from(allCategories).sort()];
  }, [projects]);

  const categoryCounts = useMemo(() => {
    const counts = { all: projects.length };
    categories.forEach(cat => {
      if (cat === 'all') return;
      counts[cat] = projects.filter(p => Array.isArray(p.categories) && p.categories.includes(cat)).length;
    });
    return counts;
  }, [projects, categories]);

  // Sort and filter projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(project => {
        if (!project.categories || !Array.isArray(project.categories)) {
          return false;
        }
        return project.categories.includes(selectedCategory);
      });
    }
    
    // Sort by ID (original order)
    return filtered.sort((a, b) => {
      return a.id - b.id;
    });
  }, [projects, selectedCategory]);

  return (
    <section
      id="projects"
      className="py-12"
      aria-labelledby="projects-heading"
    >
      <div>
        <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.2, ease: "easeOut" }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="mb-12"
        >
          <h2
            id="projects-heading"
            className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase"
          >
            selected projects
          </h2>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4">
            a showcase of my recent work in web development, data visualization, and full-stack applications
          </p>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <p>
              these projects come from various contexts — volunteer work with commit the change, professional roles, school assignments, hackathons, and personal exploration. each one represents a different challenge and an opportunity to learn something new, whether it's building for real users, experimenting with new technologies, or solving problems that matter.
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {`${category} (${category === 'all' ? categoryCounts.all : (categoryCounts[category] ?? 0)})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
                 key={selectedCategory}
                 className=""
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={index > 0 ? "pt-8 mt-8 border-t border-dashed border-slate-300 dark:border-slate-700" : ""}
              variants={itemVariants}
            >
              {/* Title and Links */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-2 pr-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono lowercase">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0 pr-1">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-xs font-mono text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github
                        <svg className="inline-block w-2 h-2 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-xs font-mono text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        demo
                        <svg className="inline-block w-2 h-2 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      aria-expanded={isExpanded(project.id)}
                      aria-label="Toggle details"
                      className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <motion.svg
                        className="w-4 h-4 text-slate-500 dark:text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isExpanded(project.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-500">{project.year}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono mb-4">
                {isExpanded(project.id) ? project.longDescription : project.description}
              </p>

              {/* Skills as simple tags (expanded) */}
              {isExpanded(project.id) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-orange-500 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Media (expanded) */}
              {isExpanded(project.id) && (project.video || (project.image && !project.image.includes('placehold.co')) || (project.hasPhotos && project.photos && project.photos.length > 0)) && (
                <div className="mt-6">
                  {project.hasPhotos && project.photos && project.photos.length > 0 ? (
                    <div className="w-full max-w-2xl mx-auto">
                      <div className="flex items-center gap-3">
                        {/* Left arrow - always reserve space */}
                        <div className="flex-shrink-0" style={{ width: '2rem', visibility: project.photos.length > 1 && getCurrentPhotoIndex(project.id) > 0 ? 'visible' : 'hidden' }}>
                          <button
                            onClick={() => prevPhoto(project.id)}
                            className="transition-opacity hover:opacity-70"
                            aria-label="Previous photo"
                          >
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                              <polygon points="15,19 7,12 15,5" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Image container - fixed width that accounts for arrows */}
                        <div className="flex-1 relative min-w-0" style={{ maxWidth: 'calc(100% - 4rem)' }}>
                          <div className="overflow-hidden rounded">
                            <div 
                              className="flex transition-transform duration-300 ease-in-out" 
                              style={{ 
                                transform: `translateX(-${getCurrentPhotoIndex(project.id) * 100}%)`
                              }}
                            >
                              {project.photos.map((photo, photoIndex) => (
                                <div 
                                  key={photoIndex} 
                                  className="flex-shrink-0 w-full"
                                >
                                         <img
                                           src={photo}
                                           alt={`${project.title} screenshot ${photoIndex + 1}`}
                                           className="w-full object-cover"
                                           style={{ aspectRatio: '16/10' }}
                                           loading="lazy"
                                         />
                                  {project.captions && project.captions[photoIndex] && (
                                    <div className="mt-2 text-center">
                                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                                        {project.captions[photoIndex]}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right arrow - always reserve space */}
                        <div className="flex-shrink-0" style={{ width: '2rem', visibility: project.photos.length > 1 && getCurrentPhotoIndex(project.id) < project.photos.length - 1 ? 'visible' : 'hidden' }}>
                          <button
                            onClick={() => nextPhoto(project.id)}
                            className="transition-opacity hover:opacity-70"
                            aria-label="Next photo"
                          >
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                              <polygon points="9,5 17,12 9,19" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : project.video ? (
                    <div className="w-full max-w-md mx-auto">
                      <iframe
                        src={project.video}
                        className="w-full aspect-video rounded"
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="true"
                      />
                    </div>
                  ) : (project.image && !project.image.includes('placehold.co')) ? (
                    <div className="w-full max-w-md mx-auto">
                             <img
                               src={project.image}
                               alt={`${project.title} preview`}
                               className="w-full rounded"
                               loading="lazy"
                             />
                    </div>
                  ) : null}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
