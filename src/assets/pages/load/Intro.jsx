import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Portfolio from "../../../components/Portfolio";

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

      {phase === "portfolio" && <Portfolio />}
    </div>
  );
}
