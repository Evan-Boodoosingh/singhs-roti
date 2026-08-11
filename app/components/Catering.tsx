"use client";

import { motion } from "framer-motion";
import { site } from "../lib/site";
import { stagger, staggerItem } from "../lib/motion";

export default function Catering() {
  return (
    <section id="catering" className="bg-text px-6 py-16 text-white md:py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={staggerItem}
          className="mb-3 text-sm uppercase tracking-widest text-accent-warm"
        >
          Catering
        </motion.p>
        <motion.h2
          variants={staggerItem}
          className="font-serif text-4xl leading-tight sm:text-5xl"
        >
          Feeding a crowd?
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-4 max-w-xl text-lg text-white/80"
        >
          Trays of roti, doubles, and curry for offices, parties, and family
          functions, made the same way we make everything: by hand, to order.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href={site.catering}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-warm"
          >
            Order catering
          </a>
          <a
            href="#locations"
            className="rounded-full border border-white/40 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            Or call your shop
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}