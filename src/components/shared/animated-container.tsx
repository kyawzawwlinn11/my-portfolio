"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

type AnimatedContainerProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}>;

export function AnimatedContainer({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 18,
}: AnimatedContainerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  stagger?: number;
}>;

export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.065,
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = PropsWithChildren<{
  className?: string;
  y?: number;
}>;

export function StaggerItem({ children, className, y = 12 }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
