"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationFrom?: {
    opacity?: number;
    y?: number;
    x?: number;
  };
  animationTo?: {
    opacity?: number;
    y?: number;
    x?: number;
  };
  transition?: {
    duration?: number;
    ease?: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
  };
}

export default function SplitText({
  children,
  className = "",
  delay = 0,
  animationFrom = { opacity: 0, y: 20 },
  animationTo = { opacity: 1, y: 0 },
  transition = { duration: 0.3, ease: "easeOut" as const }
}: SplitTextProps) {
  const text = children?.toString() || "";
  const words = text.split(" ");

  return (
    <motion.div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={animationFrom}
          animate={animationTo}
          transition={{
            ...transition,
            delay: delay + i * 0.05
          }}
          className="inline-block mr-1"
          style={{ willChange: 'transform, opacity' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}