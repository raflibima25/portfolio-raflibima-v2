"use client";

import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollIndicatorProps {
  className?: string;
  color?: string;
  height?: number;
}

export default function ScrollIndicator({
  className = "",
  color = "#008080",
  height = 3
}: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 origin-left ${className}`}
      style={{
        scaleX,
        height: `${height}px`,
        backgroundColor: color
      }}
    />
  );
}