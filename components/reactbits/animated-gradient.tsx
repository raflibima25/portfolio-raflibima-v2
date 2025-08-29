"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGradientProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
  blur?: boolean;
}

export default function AnimatedGradient({
  children,
  className = "",
  colors = [
    "from-purple-400/20 via-pink-500/20 to-red-500/20",
    "from-blue-400/20 via-purple-500/20 to-pink-500/20",
    "from-green-400/20 via-blue-500/20 to-purple-500/20",
    "from-yellow-400/20 via-red-500/20 to-pink-500/20"
  ],
  duration = 8,
  blur = false
}: AnimatedGradientProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 opacity-50 bg-gradient-to-br ${colors[0]} ${
          blur ? "blur-xl" : ""
        }`}
        animate={{
          background: colors.map(color => `linear-gradient(45deg, ${color.replace(/from-|via-|to-/g, '')})`)
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute inset-0 opacity-30 bg-gradient-to-tl ${colors[1]} ${
          blur ? "blur-2xl" : ""
        }`}
        animate={{
          background: colors.map(color => `linear-gradient(225deg, ${color.replace(/from-|via-|to-/g, '')})`)
        }}
        transition={{
          duration: duration * 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}