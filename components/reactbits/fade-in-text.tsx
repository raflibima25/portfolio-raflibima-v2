"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function FadeInText({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 10
}: FadeInTextProps) {
  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut" as const
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}