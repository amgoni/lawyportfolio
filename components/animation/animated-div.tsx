"use client";

import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const reveal = (direction: "up" | "down" | "left" | "right") => {
  const variants = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };
  return {
    initial: {
      opacity: 0,
      ...variants[direction],
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
};

export default function AnimatedDiv({
  children,
  className,
  direction = "up",
}: AnimatedDivProps) {
  return (
    <motion.div
      variants={reveal(direction)}
      initial="initial"
      animate="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
}
