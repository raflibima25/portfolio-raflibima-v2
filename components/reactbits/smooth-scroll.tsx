"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  href: string;
  className?: string;
  duration?: number;
  offset?: number;
  onScrollStart?: () => void;
  onScrollEnd?: () => void;
}

export default function SmoothScroll({
  children,
  href,
  className = "",
  duration = 800,
  offset = 80,
  onScrollStart,
  onScrollEnd
}: SmoothScrollProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (onScrollStart) onScrollStart();

    // Handle home link (scroll to top)
    if (href === "#" || href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        if (onScrollEnd) onScrollEnd();
      }, duration);
      return;
    }

    // Handle other anchors
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        if (onScrollEnd) onScrollEnd();
      }, duration);
    }
  };

  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}