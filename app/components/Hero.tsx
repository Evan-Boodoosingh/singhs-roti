"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden md:grid md:min-h-[100dvh] md:grid-cols-2 md:items-stretch">
      {/* Image: full-bleed on mobile, right half on desktop */}
      <div className="absolute inset-0 md:relative md:inset-auto md:order-2 md:min-h-full">
        <Image
          src="/images/hero.jpeg"
          alt="Freshly made buss up shut on a plate at Singhs Roti Shop"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/60 to-text/40" />
      </div>

      {/* Text: centered overlay on mobile, charcoal left panel on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-2xl px-4 text-center md:order-1 md:mx-0 md:flex md:max-w-none md:flex-col md:justify-center md:bg-text md:px-12 md:py-16 md:text-left lg:px-16"
      >
        <p className="mb-3 text-sm uppercase tracking-widest text-white/80">
          West Indian Food, Trinidad and Tobago
        </p>
        <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl">
          A taste of Trinidad, right here in Boston
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/90 md:mx-0">
          The Singh family has been frying doubles and rolling roti for three
          decades. Come hungry.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#menu"
            className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-warm"
          >
            See the menu
          </a>
          <a
            href="#order"
            className="rounded-full border border-white/40 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            Order now
          </a>
        </div>
      </motion.div>
    </section>
  );
}