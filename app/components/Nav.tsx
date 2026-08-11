"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../lib/site";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our story" },
  { href: "#locations", label: "Locations" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Desktop editorial bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden items-center justify-between px-8 py-5 transition-all duration-300 md:flex ${
          scrolled
            ? "bg-text/95 shadow-lg backdrop-blur"
            : "bg-gradient-to-b from-text/60 to-transparent"
        }`}
      >
        <button
          onClick={toTop}
          className="font-serif text-lg tracking-wide text-white"
        >
          {site.name}
        </button>

        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            className=" px-5 py-2 text-xs uppercase tracking-widest text-white transition-colors hover:bg-accent"
          >
            Order
          </a>
        </nav>
      </header>

      {/* Mobile floating pill (stays visible above the overlay) */}
      <header className="fixed inset-x-0 top-3 z-50 px-4 md:hidden">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-text/90 px-5 py-3 backdrop-blur-md">
          <button
            onClick={toTop}
            className="font-serif text-sm font-light italic tracking-wider text-white"
          >
            {site.name}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="relative z-50 flex h-9 w-9 flex-col items-end justify-center gap-1.5 p-2"
          >
            <motion.span
              className={`block h-px w-6 rounded-full ${
                open ? "bg-accent-warm" : "bg-white"
              }`}
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className={`block h-px w-6 rounded-full ${
                open ? "bg-accent-warm" : "bg-white"
              }`}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block h-px w-6 rounded-full ${
                open ? "bg-accent-warm" : "bg-white"
              }`}
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay: Prestige-style. Divided serif links, call block +
          full-width outline CTA pinned at the bottom. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-text/[0.98] px-8 pb-10 pt-24 md:hidden"
          >
            {/* Links: giant muted serif, hairline under each */}
            <nav className="mt-4 flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                  className="border-b border-white/10 py-6 font-serif text-4xl text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom block: call us + full-width outline Order button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Call us
                </p>
                <div className="mt-2 flex flex-col gap-1.5">
                  {site.locations.map(
                    (loc) =>
                      loc.phone && (
                        <a
                          key={loc.name}
                          href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                          className="flex items-baseline gap-3"
                        >
                          <span className="text-xs uppercase tracking-wider text-white/50">
                            {loc.name}
                          </span>
                          <span className="text-accent-warm">{loc.phone}</span>
                        </a>
                      ),
                  )}
                </div>
              </div>
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="w-full rounded-full border border-white/60 py-4 text-center text-sm uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                Order
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}