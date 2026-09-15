"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Hero Parallax (Moves down slightly to create depth)
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Card Parallax (Moving upward at strict, safe pixel rates)
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const [isJoined, setIsJoined] = useState(false);

  return (
    <main className="bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-indigo-500">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Grid Background */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #312e81 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 40px 40px, 40px 40px',
            y: heroBgY
          }}
        />
        
        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="relative z-10 text-center flex flex-col items-center">
          <div className="px-4 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md mb-6">
            <span className="text-[#00ffcc] font-mono text-sm tracking-widest uppercase">IIT Bombay Presents</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter drop-shadow-2xl">
            Techfest
          </h1>
          <p className="mt-6 text-xl text-gray-400 font-light tracking-wide">
            Scroll to explore the parallax depth.
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 2: DIFFERENTIAL PARALLAX CARDS --- */}
      <section className="relative min-h-[150vh] w-full bg-black flex items-center justify-center px-4 py-20 z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl relative z-10">
          
          {/* Card 1: Slow */}
          <motion.div style={{ y: card1Y }} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl flex flex-col h-[350px]">
            <h3 className="text-[#00ffcc] font-mono text-sm tracking-widest mb-4">01 // COMPETITIONS</h3>
            <h2 className="text-3xl font-bold mb-4">Innovate & Disrupt</h2>
            <p className="text-gray-400 leading-relaxed flex-grow">
              Compete against the sharpest minds across the continent. Push the boundaries of modern engineering.
            </p>
            <div className="h-1 w-12 bg-indigo-500 mt-auto" />
          </motion.div>

          {/* Card 2: Medium */}
          <motion.div style={{ y: card2Y }} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl flex flex-col h-[350px] md:mt-24">
            <h3 className="text-indigo-400 font-mono text-sm tracking-widest mb-4">02 // WORKSHOPS</h3>
            <h2 className="text-3xl font-bold mb-4">Master The Tech</h2>
            <p className="text-gray-400 leading-relaxed flex-grow">
              Learn directly from industry leaders. Upskill yourself with hands-on technical sessions.
            </p>
            <div className="h-1 w-12 bg-[#00ffcc] mt-auto" />
          </motion.div>

          {/* Card 3: Fast */}
          <motion.div style={{ y: card3Y }} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl flex flex-col h-[350px] md:mt-48">
            <h3 className="text-purple-400 font-mono text-sm tracking-widest mb-4">03 // EXHIBITIONS</h3>
            <h2 className="text-3xl font-bold mb-4">Experience The Future</h2>
            <p className="text-gray-400 leading-relaxed flex-grow">
              Witness bleeding-edge technology from global labs. Autonomous vehicles and advanced robotics on display.
            </p>
            <div className="h-1 w-12 bg-purple-500 mt-auto" />
          </motion.div>

        </div>
      </section>

      {/* --- SECTION 3: CTA --- */}
      <section className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden z-30">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
           <h1 className="text-[12vw] font-black text-transparent stroke-gray-800 stroke-2 whitespace-nowrap" style={{ WebkitTextStroke: '2px #1f2937' }}>
             TECHFEST 2026
           </h1>
        </motion.div>

        <motion.div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8">
            Represent Your <br/><span className="text-indigo-500">Campus</span>
          </h2>
          <button 
            onClick={() => setIsJoined(true)}
            disabled={isJoined}
            className={`inline-block px-12 py-5 font-bold text-lg rounded-full transition-all duration-300 ${
              isJoined 
                ? "bg-green-500 text-white cursor-default shadow-[0_0_40px_rgba(34,197,94,0.4)]" 
                : "bg-white text-black hover:bg-[#00ffcc] hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            }`}
          >
            {isJoined ? "✓ INITIATIVE JOINED" : "SUBMIT APPLICATION"}
          </button>
        </motion.div>
      </section>

    </main>
  );
}