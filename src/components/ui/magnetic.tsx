"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Magnetic({
  children,
  strength = 0.2,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      style={{ position: "relative", display: "inline-flex" }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={prefersReducedMotion ? { x: 0, y: 0 } : position}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
