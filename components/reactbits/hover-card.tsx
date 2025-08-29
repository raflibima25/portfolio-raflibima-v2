"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  hoverClassName?: string;
  rotateX?: number;
  rotateY?: number;
  scale?: number;
  translateY?: number;
}

export default function HoverCard({
  children,
  className = "",
  hoverClassName = "",
  rotateX = 0,
  rotateY = 0,
  scale = 1.02,
  translateY = -5
}: HoverCardProps) {
  return (
    <motion.div
      className={`${className} perspective-1000`}
      whileHover={{
        scale,
        rotateX,
        rotateY,
        y: translateY,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        className={hoverClassName}
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}