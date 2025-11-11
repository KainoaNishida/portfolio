import React, { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Loader from "./Loader";
import Layout from "../../../components/Layout";

// Lazy load pages for better performance
const HomePage = lazy(() => import("../../../pages/HomePage"));
const TimelinePage = lazy(() => import("../../../pages/TimelinePage"));
const ProjectsPage = lazy(() => import("../../../pages/ProjectsPage"));
const ResearchPage = lazy(() => import("../../../pages/ResearchPage"));
const BackgroundPage = lazy(() => import("../../../pages/BackgroundPage"));
const SkillsPage = lazy(() => import("../../../pages/SkillsPage"));
const ResumePage = lazy(() => import("../../../pages/ResumePage"));
const BlogPage = lazy(() => import("../../../pages/BlogPage"));
const ContactPage = lazy(() => import("../../../pages/ContactPage"));

export default function Intro() {
  const [phase, setPhase] = useState("load");

  return (
    <div 
      className="w-full h-full"
      style={{
        overflow: phase === "portfolio" ? 'visible' : 'hidden',
        height: phase === "portfolio" ? 'auto' : '100%'
      }}
    >
      <AnimatePresence mode="wait">
        {phase === "load" && (
          <Loader key="loader" onComplete={() => setPhase("portfolio")} />
        )}
      </AnimatePresence>

      {phase === "portfolio" && (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="timeline" element={<TimelinePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="research" element={<ResearchPage />} />
              <Route path="background" element={<BackgroundPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
}
