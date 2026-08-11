// One motion system. Every animation pulls its easing and timing from here,
// so the whole site feels varied but coherent. Reduced-motion is handled
// globally by MotionConfig in the layout (added when we apply this).
import type { Variants } from "framer-motion";

// Shared easing curve (smooth, gentle ease-out).
export const EASE = [0.22, 1, 0.36, 1] as const;

// A whole section fading up as it enters the viewport.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// A parent that reveals its children one after another.
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// A single staggered child: a menu item, a location card, a hero line.
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// A subtle scale-in for feature images, like the story photo.
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};