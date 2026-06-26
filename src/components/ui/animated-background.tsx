"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 9998 }}
    >
      {/* Orb 1 - Primary Blue - drifts from top-left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          left: "-100px",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(14,165,233,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 300, 150, 0],
          y: [0, 200, 50, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 - Violet - drifts from top-right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          top: "15%",
          right: "-50px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, -250, -50, 0],
          y: [0, 300, 100, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Orb 3 - Cyan - drifts from bottom */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          bottom: "-200px",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -350, -100, 0],
          scale: [1, 1.4, 1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Orb 4 - Rose accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          top: "50%",
          left: "-50px",
          background:
            "radial-gradient(circle, rgba(244,63,94,0.1) 0%, rgba(244,63,94,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 200, 50, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Glowing particles */}
      {[
        { x1: 100, y1: 200, x2: 150, y2: 250, dur: 12, del: 0, sz: 4 },
        { x1: 800, y1: 100, x2: 750, y2: 180, dur: 15, del: 2, sz: 3 },
        { x1: 500, y1: 600, x2: 550, y2: 550, dur: 10, del: 4, sz: 5 },
        { x1: 200, y1: 800, x2: 250, y2: 750, dur: 14, del: 1, sz: 3 },
        { x1: 700, y1: 400, x2: 650, y2: 450, dur: 11, del: 6, sz: 4 },
        { x1: 400, y1: 300, x2: 450, y2: 350, dur: 13, del: 3, sz: 3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.sz,
            height: p.sz,
            left: p.x1,
            top: p.y1,
            background: "white",
            boxShadow: `0 0 ${p.sz * 6}px ${p.sz * 2}px rgba(255,255,255,0.7), 0 0 ${p.sz * 12}px ${p.sz * 3}px rgba(14,165,233,0.4)`,
          }}
          animate={{
            x: [0, p.x2 - p.x1, 0],
            y: [0, p.y2 - p.y1, 0],
            opacity: [0, 1, 0.5, 1, 0],
            scale: [0, 1, 1.5, 1, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.del,
          }}
        />
      ))}
    </div>
  );
}
