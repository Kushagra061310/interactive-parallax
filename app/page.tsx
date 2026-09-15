"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- GLOBAL FOREGROUND (Moves across the entire page journey) ---
  const box1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-800%"]);
  const box1X = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const box1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const box2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-600%"]);
  const box2X = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const box2Rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);

  // --- SECTION 1: HERO PARALLAX ---
  const heroBgY = useTransform(scrollYProgress, [0, 0.4], ["0%", "60%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-120%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // --- SECTION 2: HORIZONTAL PARALLAX ---
  // Text slides in from the left and right based on scroll depth
  const s2TitleX = useTransform(scrollYProgress, [0.1, 0.5], ["-100%", "0%"]);
  const s2BodyX = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);
  const s2Opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  // --- SECTION 3: DEPTH & SCALE PARALLAX ---
  // Massive background text sliding sideways
  const s3BgTextX = useTransform(scrollYProgress, [0.6, 1], ["50%", "-50%"]);
  const s3CtaY = useTransform(scrollYProgress, [0.7, 1], ["50%", "0%"]);

  const [isJoined, setIsJoined] = useState(false);

  return (
    <main ref={containerRef} className="relative w-full bg-[#050505] font-sans overflow-hidden">
      
      {/* GLOBAL FOREGROUND LAYER: These objects float over ALL sections */}
      <motion.div 
        style={{ y: box1Y, x: box1X, rotate: box1Rotate }}
        className="fixed top-[70%] left-[10%] z-40 w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(79,70,229,0.2)] pointer-events-none"
      />
      <motion.div 
        style={{ y: box2Y, x: box2X, rotate: box2Rotate }}
        className="fixed top-[85%] right-[15%] z-40 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-bl from-[#00ffcc]/20 to-transparent border border-[#00ffcc]/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,204,0.2)] pointer-events-none"
      />

      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
          <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-[#00ffcc] blur-[120px]" />
        </motion.div>

        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="relative z-10 text-center px-4">
          <p className="text-[#00ffcc] font-mono tracking-[0.3em] text-sm md:text-base mb-4 uppercase">IIT Bombay Presents</p>
          <h1 className="text-7xl md:text-9xl font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl">Techfest</h1>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg font-light">Scroll to experience the depth.</p>
        </motion.div>
      </section>

      {/* --- SECTION 2: HORIZONTAL KINETICS --- */}
      <section className="relative h-[150vh] w-full bg-black z-30 flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-5xl relative z-10 overflow-hidden">
          <motion.h2 style={{ x: s2TitleX, opacity: s2Opacity }} className="text-6xl md:text-8xl font-bold uppercase mb-6 text-white leading-tight">
            Push The <span className="text-indigo-500 block">Limits</span>
          </motion.h2>
          <motion.p style={{ x: s2BodyX, opacity: s2Opacity }} className="text-2xl md:text-4xl text-gray-400 leading-relaxed font-light">
            True parallax doesn't stop at the top. The foreground, midground, and background layers are actively responding to your scroll position, proving structural mastery of the DOM.
          </motion.p>
        </div>
      </section>

      {/* --- SECTION 3: CALL TO ACTION --- */}
      <section className="relative h-[120vh] w-full bg-gradient-to-b from-black to-indigo-950 flex flex-col items-center justify-center z-30 overflow-hidden">
        
        {/* Massive Background Typography Layer */}
        <motion.div style={{ x: s3BgTextX }} className="absolute z-0 whitespace-nowrap opacity-[0.03] pointer-events-none">
          <h1 className="text-[12rem] md:text-[20rem] font-black text-white uppercase tracking-tighter">
            Innovation Legacy Techfest
          </h1>
        </motion.div>

        {/* Foreground CTA Layer */}
        <motion.div style={{ y: s3CtaY }} className="relative z-10 flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white mb-8 text-center tracking-tighter">
            Become An<br/>Ambassador
          </h2>
          <button 
            onClick={() => setIsJoined(true)}
            disabled={isJoined}
            className={`px-10 py-4 font-bold text-xl rounded-sm transition-all duration-300 ${
              isJoined 
                ? "bg-green-500 text-white cursor-default shadow-[0_0_30px_rgba(34,197,94,0.4)]" 
                : "bg-[#00ffcc] text-black hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(0,255,204,0.2)]"
            }`}
          >
            {isJoined ? "✓ INITIATIVE JOINED" : "JOIN THE INITIATIVE"}
          </button>
        </motion.div>
      </section>

    </main>
  );
}