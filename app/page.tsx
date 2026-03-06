"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BootSequence from "@/components/BootSequence";
import KatakanaRain from "@/components/KatakanaRain";
import ScanLines from "@/components/ScanLines";
import NavBar from "@/components/NavBar";
import MusicPlayer from "@/components/MusicPlayer";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import DailyLog from "@/components/sections/DailyLog";
import Experience from "@/components/sections/Experience";
import CurrentProjects from "@/components/sections/CurrentProjects";
import PastProjects from "@/components/sections/PastProjects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    // Use sessionStorage to run boot only once per session
    const hasBooted = sessionStorage.getItem("hasBooted");
    if (hasBooted) {
      setShowBoot(false);
      setBooted(true);
    } else {
      sessionStorage.setItem("hasBooted", "true");
    }
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    setTimeout(() => setShowBoot(false), 700);
  };

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Boot sequence (first visit only) */}
      {showBoot && <BootSequence onComplete={handleBootComplete} />}

      {/* Visual overlay layers */}
      <KatakanaRain />
      <ScanLines />

      {/* Main content */}
      <AnimatePresence>
        {booted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <NavBar />
            <main style={{ position: "relative", zIndex: 10 }}>
              <Hero />
              <AboutMe />
              <Education />
              <DailyLog />
              <Experience />
              <CurrentProjects />
              <PastProjects />
              <Skills />
              <Contact />
            </main>
            <MusicPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
