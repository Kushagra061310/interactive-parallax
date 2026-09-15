"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // --- GLOBAL BACKGROUND PARALLAX ---
  const globalBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  // --- HERO PARALLAX ---
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // --- CARD PARALLAX (Foreground moving up) ---
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const [isJoined, setIsJoined] = useState(false);

  return (
    <main className="bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-indigo-500 relative">
      
      {/* GLOBAL PARALLAX LAYER */}
      <motion.div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #312e81 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          y: globalBgY
        }}
      />

      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="text-center flex flex-col items-center px-4">
          <div className="px-4 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <span className="text-[#00ffcc] font-mono text-sm tracking-widest uppercase">IIT Bombay Presents</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter drop-shadow-2xl leading-none">
            Techfest
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Scroll to explore the parallax depth.
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 2: DIFFERENTIAL PARALLAX CARDS --- */}
      <section className="relative min-h-[150vh] w-full flex items-center justify-center px-4 py-20 z-20">
        
        {/* Parallaxing Background Orbs */}
        <motion.div style={{ y: orbY }} className="absolute top-0 left-[10%] w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
        <motion.div style={{ y: orbY }} className="absolute bottom-0 right-[10%] w-96 h-96 bg-[#00ffcc]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl relative z-10">
          
          {/* Card 1 */}
          <motion.div 
            style={{ y: card1Y }} 
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-[#0a0a0a]/60 backdrop-blur-2xl border border-gray-700/50 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-colors duration-500 p-8 rounded-2xl shadow-2xl flex flex-col h-[350px]"
          >
            <h3 className="text-[#00ffcc] font-mono text-sm tracking-widest mb-4">01 // COMPETITIONS</h3>
            <h2 className="text-3xl font-bold mb-4 text-white">Innovate & Disrupt</h2>
            <p className="text-gray-400 leading-relaxed flex-grow">Compete against the sharpest minds across the continent. Push the boundaries of modern engineering.</p>
            <div className="h-1 w-12 bg-indigo-500 mt-auto" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            style={{ y: card2Y }} 
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-[#0a0a0a]/60 backdrop-blur-2xl border border-gray-700/50 hover:border-[#00ffcc]/50 hover:shadow-[0_0_30px_rgba(0,255,204,0.15)] transition-colors duration-500 p-8 rounded-2xl shadow-2xl flex flex-col h-[350px] md:mt-24"
          >
            <h3 className="text-indigo-400 font-mono text-sm tracking-widest mb-4">02 // WORKSHOPS</h3>
            <h2 className="text-3xl font-bold mb-4 text-white">Master The Tech</h2>
            <p className="text-gray-400 leading-relaxed flex-grow">Learn directly from industry leaders. Upskill yourself with hands-on technical sessions.</p>
            <div className="h-1 w-12 bg-[#00ffcc] mt-auto" />
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            style={{ y: card3Y }} 
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-[#0a0a0a]/60 backdrop-blur-2xl border border-gray-700/50 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-colors duration-500 p-8 rounded-2xl shadow-2xl flex flex-col h-[350px] md:mt-48"
          >
            <h3 className="text-purple-400 font-mono text-sm tracking-widest mb-4">03 // EXHIBITIONS</h3>
            <h2 className="text-3xl font-bold mb-4 text-white">Experience The Future</h2>
            <p className="text-gray-400 leading-relaxed flex-grow">Witness bleeding-edge technology from global labs. Autonomous vehicles and advanced robotics on display.</p>
            <div className="h-1 w-12 bg-purple-500 mt-auto" />
          </motion.div>

        </div>
      </section>

      {/* --- SECTION 3: CTA --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-30 bg-black/40 backdrop-blur-sm border-t border-white/5">
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-12">
            Represent Your <br/><span className="text-indigo-500">Campus</span>
          </h2>
          
          {/* Upgraded CTA with Hover Pulse */}
          <div className="relative group inline-block">
            <div className={`absolute -inset-1 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${isJoined ? 'bg-green-500' : 'bg-[#00ffcc]'}`}></div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsJoined(true)}
              disabled={isJoined}
              className={`relative px-12 py-5 font-bold text-lg rounded-full transition-all duration-300 ${
                isJoined 
                  ? "bg-green-500 text-white cursor-default border border-green-400" 
                  : "bg-black text-white border border-[#00ffcc]/50 hover:bg-[#00ffcc] hover:text-black"
              }`}
            >
              {isJoined ? "✓ INITIATIVE JOINED" : "SUBMIT APPLICATION"}
            </motion.button>
          </div>
        </div>
      </section>

    </main>
  );
}