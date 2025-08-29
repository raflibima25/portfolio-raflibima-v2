"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface AnimatedButtonProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  variant?: "shine" | "ripple" | "glow" | "bounce" | "slide";
  glowColor?: string;
  onClick?: () => void;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(({
  children,
  className = "",
  variant = "shine",
  glowColor = "rgba(59, 130, 246, 0.5)",
  ...props
}, ref) => {
  const variants = {
    shine: {
      rest: { 
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        backgroundPosition: "-100% 0",
        backgroundSize: "200% 100%"
      },
      hover: { 
        backgroundPosition: "100% 0",
        scale: 1.02,
        boxShadow: `0 8px 25px -8px ${glowColor}`
      },
      tap: { scale: 0.98 }
    },
    ripple: {
      rest: {},
      hover: { 
        scale: 1.05,
        boxShadow: `0 0 20px ${glowColor}`
      },
      tap: { scale: 0.95 }
    },
    glow: {
      rest: {},
      hover: { 
        boxShadow: `0 0 30px ${glowColor}`,
        borderColor: glowColor.replace('0.5', '0.8'),
        scale: 1.02
      },
      tap: { scale: 0.98 }
    },
    bounce: {
      rest: {},
      hover: { 
        scale: 1.1,
        y: -2
      },
      tap: { scale: 0.9, y: 0 }
    },
    slide: {
      rest: { x: 0 },
      hover: { 
        x: 5,
        scale: 1.02
      },
      tap: { x: 2, scale: 0.98 }
    }
  };

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden transition-colors ${className}`}
      variants={variants[variant]}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={{
        type: variant === "bounce" ? "spring" : "tween",
        stiffness: 400,
        damping: 25,
        duration: variant === "bounce" ? 0.3 : 0.2
      }}
      {...props}
    >
      {variant === "shine" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={{
            rest: { x: "-100%" },
            hover: { x: "100%" }
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
});

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;