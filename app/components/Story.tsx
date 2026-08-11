"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "../lib/site";
import { imageReveal, stagger, staggerItem } from "../lib/motion";

export default function Story() {
  return (
    <section id="story" className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-stretch gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-auto md:h-full md:min-h-[420px]"
        >
          <Image
            src={site.story.image}
            alt={`The Singh family at ${site.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-start"
        >
          <motion.p
            variants={staggerItem}
            className="mb-3 text-sm uppercase tracking-widest text-accent-warm"
          >
            {site.story.eyebrow}
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-serif text-4xl leading-tight text-text sm:text-5xl"
          >
            {site.story.heading}
          </motion.h2>
          {site.story.paragraphs.map((para) => (
            <motion.p
              key={para.slice(0, 24)}
              variants={staggerItem}
              className="mt-6 text-lg leading-relaxed text-text-muted"
            >
              {para}
            </motion.p>
          ))}
          <motion.p
            variants={staggerItem}
            className="mt-6 border-l-2 border-accent-warm pl-4 text-base italic text-text"
          >
            {site.story.award}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}