"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BounceCardProps {
  children: ReactNode;
  className?: string;
  bounceScale?: number;
  duration?: number;
  delay?: number;
}

export default function BounceCard({
  children,
  className = "",
  bounceScale = 1.05,
  duration = 0.3,
  delay = 0
}: BounceCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay,
        duration: 0.5,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: bounceScale,
        transition: { duration }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}