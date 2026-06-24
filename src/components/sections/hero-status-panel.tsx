"use client";

import { CheckCircle2, Terminal } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type HeroStatusPanelProps = {
  rows: Array<[string, string]>;
  highlights: string[];
};

const premiumEase = [0.22, 1, 0.36, 1] as const;

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: premiumEase },
  },
};

export function HeroStatusPanel({ rows, highlights }: HeroStatusPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="retro-hero-art retro-window relative rounded-lg p-5 pt-12"
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.58, ease: premiumEase, delay: 0.08 }}
    >
      <div className="retro-wire left-[-2rem] top-20 h-36 w-36 rotate-[-18deg]" />
      <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <p className="retro-label text-xs font-bold uppercase text-muted-foreground">
            SYSTEM / PROFILE
          </p>
        </div>
        <span className="retro-label inline-flex items-center gap-2 text-xs text-primary">
          <span className="status-dot" />
          ready
        </span>
      </div>
      <motion.div
        className="space-y-5 pt-5"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.055,
            },
          },
        }}
      >
        <div className="space-y-3">
          {rows.map(([label, value]) => (
            <motion.div
              key={label}
              className="status-line grid gap-1 sm:grid-cols-[8.5rem_1fr]"
              variants={lineVariants}
            >
              <span className="retro-label text-xs text-muted-foreground">
                {label.padEnd(12, ".")}
              </span>
              <span className="retro-label break-words text-xs text-foreground">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div className="section-divider" variants={lineVariants} />
        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <motion.div
              key={highlight}
              className="rounded-md border border-border bg-card/75 p-3"
              variants={lineVariants}
            >
              <p className="flex gap-2 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
