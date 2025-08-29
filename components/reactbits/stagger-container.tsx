"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
  threshold?: number;
}

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
  once = true,
  threshold = 0.1
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay
      }
    }
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div 
              key={index} 
              variants={childVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {child}
            </motion.div>
          ))
        : <motion.div 
            variants={childVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
      }
    </motion.div>
  );
}