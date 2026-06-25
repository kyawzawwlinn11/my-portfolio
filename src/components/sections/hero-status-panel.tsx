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
  const visibleRows = rows.filter(([, value]) => value);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg border-2 border-border bg-background-soft p-4 shadow-[4px_4px_0_rgba(32,26,36,0.86)]"
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.58, ease: premiumEase, delay: 0.08 }}
    >
      <div className="flex items-center justify-between gap-4 border-b-2 border-border pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <p className="retro-label text-xs font-bold text-muted-foreground">
            system.profile
          </p>
        </div>
        <span className="retro-label inline-flex items-center gap-2 text-xs font-bold text-primary">
          <span className="status-dot" aria-hidden="true" />
          online
        </span>
      </div>
      <motion.div
        className="space-y-4 pt-4"
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
        <div className="space-y-2.5">
          {visibleRows.map(([label, value]) => (
            <motion.div
              key={label}
              className="status-line grid gap-1 sm:grid-cols-[6.75rem_1fr]"
              variants={lineVariants}
            >
              <span className="retro-label text-xs text-muted-foreground">
                {label.padEnd(12, ".")}
              </span>
              <span className="retro-label break-words text-xs font-semibold text-foreground">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
        {highlights.length ? (
          <>
            <motion.div className="h-0.5 bg-border" variants={lineVariants} />
            <motion.div variants={lineVariants}>
              <p className="retro-label text-xs font-bold text-muted-foreground">
                recent_context
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="rounded-md border-2 border-border bg-card p-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="flex gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </span>
                  </p>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
