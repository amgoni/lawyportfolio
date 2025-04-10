"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const reveal = (
  direction: "up" | "down" | "left" | "right",
  delay: number = 0
) => {
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
        delay: delay,
      },
    },
  };
};

export default function AnimatedDiv({
  children,
  className,
  direction = "up",
  delay = 0,
}: AnimatedDivProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(componentRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <motion.div
      variants={reveal(direction, delay)}
      initial="initial"
      animate={hasAnimated ? "animate" : "initial"}
      className={className}
      ref={componentRef}
    >
      {children}
    </motion.div>
  );
}
