"use client";

import { motion } from "framer-motion";

interface AdvancedLoadingProps {
  variant?: "dots" | "pulse" | "wave" | "orbit" | "morphing";
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function AdvancedLoading({
  variant = "dots",
  size = "md",
  color = "hsl(var(--primary))"
}: AdvancedLoadingProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };

  const dotSize = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2", 
    lg: "w-3 h-3"
  };

  if (variant === "dots") {
    return (
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`${dotSize[size]} rounded-full`}
            style={{ backgroundColor: color }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <motion.div
        className={`${sizeClasses[size]} rounded-full border-2`}
        style={{ borderColor: color }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  if (variant === "wave") {
    return (
      <div className="flex space-x-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={`${dotSize[size]} rounded-full`}
            style={{ backgroundColor: color }}
            animate={{
              scaleY: [1, 2, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "orbit") {
    return (
      <div className={`${sizeClasses[size]} relative`}>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className={`${dotSize[size]} rounded-full absolute top-0 left-1/2 transform -translate-x-1/2`}
            style={{ backgroundColor: color }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-2"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className={`w-1 h-1 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2`}
            style={{ backgroundColor: color, opacity: 0.7 }}
          />
        </motion.div>
      </div>
    );
  }

  if (variant === "morphing") {
    return (
      <motion.div
        className={`${sizeClasses[size]} rounded-full`}
        style={{ backgroundColor: color }}
        animate={{
          borderRadius: ["50%", "10%", "50%"],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  return null;
}