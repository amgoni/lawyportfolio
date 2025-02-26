"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  return (
    <div
      className={`w-full mx-auto py-0 sm:py-2 flex items-center justify-center`}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={cn(className)}
      >
        {title.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedHeading;
