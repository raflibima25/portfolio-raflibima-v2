"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
  cursorClassName?: string;
}

export default function Typewriter({
  text,
  className = "",
  delay = 0,
  speed = 50,
  cursor = true,
  cursorClassName = "animate-pulse"
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      {displayedText}
      {cursor && (
        <span className={`${cursorClassName} ${isComplete ? "hidden" : ""}`}>
          |
        </span>
      )}
    </motion.div>
  );
}