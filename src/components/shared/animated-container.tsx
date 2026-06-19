"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

type AnimatedContainerProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function AnimatedContainer({
  children,
  className,
  delay = 0,
}: AnimatedContainerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
