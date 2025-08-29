"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glowIntensity?: number;
  shadowIntensity?: number;
}

export default function Card3D({
  children,
  className = "",
  intensity = 0.1,
  glowIntensity = 0.3,
  shadowIntensity = 0.25
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * intensity);
    y.set(yPct * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{
          z: 20,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, ${shadowIntensity})`,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        className="relative"
      >
        {children}
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
          whileHover={{
            opacity: glowIntensity,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
          style={{
            transform: "translateZ(-1px)"
          }}
        />
      </motion.div>
    </motion.div>
  );
}