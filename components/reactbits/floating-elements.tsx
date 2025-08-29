"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingElementsProps {
  className?: string;
  count?: number;
  colors?: string[];
  sizes?: string[];
}

interface Element {
  id: number;
  color: string;
  size: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function FloatingElements({
  className = "",
  count = 4,
  colors = ["bg-blue-500/5", "bg-purple-500/5", "bg-pink-500/5", "bg-green-500/5"],
  sizes = ["w-2 h-2", "w-3 h-3", "w-4 h-4"]
}: FloatingElementsProps) {
  const [elements, setElements] = useState<Element[]>([]);
  
  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      size: sizes[i % sizes.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 10,
      delay: Math.random() * 3
    }));
    setElements(newElements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // Don't render anything during server-side rendering to prevent hydration mismatch
  if (elements.length === 0) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full ${element.color} ${element.size}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            willChange: 'transform'
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            opacity: [0.2, 0.4, 0.2, 0.2]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear",
            delay: element.delay
          }}
        />
      ))}
    </div>
  );
}