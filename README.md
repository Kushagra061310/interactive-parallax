# Techfest 2026: Differential Parallax Engine

A high-performance, multi-layered parallax scrolling experience engineered for the **IIT Bombay Techfest College Ambassador** program (150-Point Task).

**[🚀 Launch the Live Parallax Experience](https://interactive-parallax-theta.vercel.app/)** 

## ⚙️ Technical Architecture
To achieve butter-smooth, hardware-accelerated animations without layout thrashing, this architecture bypasses native CSS scroll events entirely.

* **Core Framework:** Next.js (App Router)
* **Animation & Physics Engine:** Framer Motion
* **Styling:** Tailwind CSS

## 🎯 Rubric Fulfillment & Features
This project was strictly architected to meet and exceed the task constraints:

1. **Global Differential Tracking:** 
   Utilizes Framer Motion's `useScroll` and `useTransform` hooks to map the user's scroll progress to precise Y-axis pixel translations. The background grid layer drifts downwards while foreground objects move upwards, creating an immersive 3D spatial illusion within a 2D DOM.
2. **Kinetic Depth (Multiple Sections):** 
   Foreground informational cards move upward at distinct, accelerated rates (-100px, -250px, -400px), ensuring the background and foreground are always moving at opposing vectors.
3. **Micro-Interactions & Clean Design:** 
   Implements modern glassmorphism (backdrop blurs), strict Techfest brand coloring, and tactile hover states (`whileHover` scaling, dynamic border glows, and a magnetic pulse on the Call to Action button) that respond to user intent without cluttering the viewport.

## 💻 Local Execution
To run this environment locally:
```bash
# Install the ecosystem and dependencies
npm install

# Launch the Next.js development server
npm run dev