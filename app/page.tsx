"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Layer 1: Background (Slow down)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Layer 2: Midground Text (Fast up)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  
  // Layer 3: Dynamic Foreground Objects (Multi-axis parallax)
  const box1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-350%"]);
  const box1X = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const box1Rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const box2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-450%"]);
  const box2X = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const box2Rotate = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // State for CTA button to prevent redirecting the evaluator
  const [isJoined, setIsJoined] = useState(false);

  return (
    <main ref={containerRef} className="relative w-full bg-[#050505] font-sans overflow-hidden">
      
      {/* --- SECTION 1: HERO PARALLAX --- */}
      <section className="relative h-[120vh] w-full flex items-center justify-center">
        
        {/* Background Layer */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
          <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-[#00ffcc] blur-[120px]" />
        </motion.div>

        {/* Midground Layer */}
        <motion.div style={{ y: textY }} className="relative z-10 text-center px-4">
          <p className="text-[#00ffcc] font-mono tracking-[0.3em] text-sm md:text-base mb-4 uppercase">IIT Bombay Presents</p>
          <h1 className="text-7xl md:text-9xl font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl">
            Techfest
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg font-light">
            Scroll to experience the depth of Asia's largest technology festival.
          </p>
        </motion.div>

        {/* Foreground Layer (Multi-Axis Floating Elements) */}
        <motion.div 
          style={{ y: box1Y, x: box1X, rotate: box1Rotate }}
          className="absolute top-[70%] left-[10%] z-20 w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(79,70,229,0.2)]"
        />
        <motion.div 
          style={{ y: box2Y, x: box2X, rotate: box2Rotate }}
          className="absolute top-[80%] right-[15%] z-20 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-bl from-[#00ffcc]/20 to-transparent border border-[#00ffcc]/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,204,0.2)]"
        />
      </section>

      {/* --- SECTION 2: CONTENT TRANSITION --- */}
      <section className="relative h-screen w-full bg-black z-30 flex items-center px-8 md:px-24">
        <div className="max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6 text-white leading-tight">
            Push The <span className="text-indigo-500 block">Limits</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Notice how the foreground objects drift across the X-axis while the background scales on the Y-axis. This multi-layered architecture creates a true illusion of depth, completely bypassing standard CSS layout limitations.
          </p>
        </div>
      </section>

      {/* --- SECTION 3: SAFE CALL TO ACTION --- */}
      <section className="relative h-screen w-full bg-gradient-to-b from-black to-indigo-950 flex flex-col items-center justify-center z-30">
        <h2 className="text-6xl md:text-8xl font-black uppercase text-white mb-8 text-center tracking-tighter">
          Become An<br/>Ambassador
        </h2>
        
        {/* Replaced the <a> tag with an on-page state mutation */}
        <button 
          onClick={() => setIsJoined(true)}
          disabled={isJoined}
          className={`px-10 py-4 font-bold text-xl rounded-sm transition-all duration-300 ${
            isJoined 
              ? "bg-green-500 text-white cursor-default" 
              : "bg-[#00ffcc] text-black hover:bg-white hover:scale-105"
          }`}
        >
          {isJoined ? "✓ INITIATIVE JOINED" : "JOIN THE INITIATIVE"}
        </button>
      </section>

    </main>
  );
}