"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  // We attach the scroll listener to a container spanning the whole page
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Layer 1: The Background (Moves slowly down)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // Layer 2: The Midground Text (Moves quickly up)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  // Layer 3: Floating UI Elements (Moves very quickly up, creating extreme depth)
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "-250%"]);

  return (
    <main ref={containerRef} className="relative w-full bg-[#050505] font-sans">
      
      {/* --- SECTION 1: HERO PARALLAX --- */}
      <section className="relative h-[120vh] w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Layer (Slowest) */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 z-0 flex items-center justify-center opacity-30"
        >
          <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-gradient-to-tr from-indigo-900 to-[#00ffcc] blur-[100px]" />
        </motion.div>

        {/* Midground Layer (Typography) */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-10 text-center px-4"
        >
          <p className="text-[#00ffcc] font-mono tracking-[0.3em] text-sm md:text-base mb-4 uppercase">IIT Bombay Presents</p>
          <h1 className="text-7xl md:text-9xl font-extrabold uppercase tracking-tighter text-white">
            Techfest
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
            Scroll to experience the depth of Asia's largest technology festival.
          </p>
        </motion.div>

        {/* Foreground Layer (Fastest - Floating Tech Elements) */}
        <motion.div 
          style={{ y: floatingY }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <div className="absolute top-[80%] left-[10%] w-32 h-32 border border-indigo-500/30 rounded-lg backdrop-blur-sm" />
          <div className="absolute top-[60%] right-[15%] w-48 h-48 border border-[#00ffcc]/20 rounded-full backdrop-blur-md" />
        </motion.div>
      </section>

      {/* --- SECTION 2: CONTENT TRANSITION --- */}
      <section className="relative h-screen w-full bg-black z-30 flex items-center px-8 md:px-24">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6 text-white">
            Push The <span className="text-indigo-500">Limits</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            The parallax architecture you are currently experiencing mimics the multi-layered complexity of modern engineering. Different elements moving at different vectors, united by a single kinetic force.
          </p>
        </div>
      </section>

      {/* --- SECTION 3: CALL TO ACTION --- */}
      <section className="relative h-screen w-full bg-gradient-to-b from-black to-indigo-950 flex flex-col items-center justify-center z-30">
        <h2 className="text-6xl md:text-8xl font-black uppercase text-white mb-8 text-center">
          Become An<br/>Ambassador
        </h2>
        <a href="https://techfest.org" target="_blank" rel="noreferrer" className="px-10 py-4 bg-[#00ffcc] text-black font-bold text-xl rounded-sm hover:bg-white transition-colors duration-300">
          JOIN THE INITIATIVE
        </a>
      </section>

    </main>
  );
}