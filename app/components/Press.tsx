"use client";

import { motion } from "framer-motion";
import { stagger, staggerItem } from "../lib/motion";

// Award copy lives here (not site.ts) so we don't clobber config edits.
// Fold into the config next time site.ts is touched together.
const items = [
  {
    title: "Best Caribbean Restaurant In Boston",
    source: "Best of Boston, Boston Magazine",
    year: "2015",
  },
  {
    title: "Best Neighborhood Restaurant, Dorchester",
    source: "Best of Boston, Boston Magazine",
    year: "2025",
  },
  {
    title: "An essential Trinidadian destination",
    source: "Eater Boston",
    year: "",
  },
];

export default function Press() {
  return (
    <section className="bg-text px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-10 text-center text-sm uppercase tracking-widest text-accent-warm">
          Recognition
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 text-center md:grid-cols-3 md:gap-8"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
              <p className="font-serif text-2xl leading-snug">
                {item.title}
              </p>
              <p className="mt-3 text-sm uppercase tracking-wider text-white/50">
                {item.source}
                {item.year && <span> · {item.year}</span>}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}