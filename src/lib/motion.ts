import type { Variants } from "framer-motion";

/** Shared easing — an easeOutExpo-style cubic bezier used across the site. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Fade + rise. Use as a child variant with `initial="hidden"` / `whileInView="show"`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Container that staggers its children's reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Standard once-only viewport config for scroll reveals. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
