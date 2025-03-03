"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  title: string;
  className: string;
}

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const AnimatedHeading = ({ title, className }: AnimatedHeadingProps) => {
  const componentRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(componentRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <motion.h1
      variants={quote}
      initial="initial"
      animate={hasAnimated ? "animate" : "initial"}
      className={cn(className)}
      ref={componentRef}
    >
      {title.split(" ").map((word, index) => (
        <motion.span
          variants={singleWord}
          key={word + "-" + index}
          className="inline-block"
        >
          {word}
          {index < title.split(" ").length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeading;
