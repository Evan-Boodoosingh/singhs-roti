"use client";

import { motion } from "framer-motion";
import { site } from "../lib/site";
import { stagger, staggerItem } from "../lib/motion";

export default function Locations() {
  return (
    <section id="locations" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-accent-warm">
            Come by
          </p>
          <h2 className="font-serif text-4xl text-text sm:text-5xl">
            Two shops, one kitchen
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {site.locations.map((loc) => (
            <motion.div
              key={loc.name}
              variants={staggerItem}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  loc.address,
                )}&z=15&output=embed`}
                title={`Map of ${site.name} in ${loc.name}`}
                loading="lazy"
                className="h-48 w-full border-0"
              />

              <div className="p-8">
                <h3 className="font-serif text-2xl text-text">{loc.name}</h3>
                <p className="mt-3 text-text-muted">{loc.address}</p>

                <div className="mt-4 space-y-1 text-text-muted">
                  {loc.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {loc.phone && (
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                      className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-warm"
                    >
                      Call {loc.phone}
                    </a>
                  )}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      loc.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent-warm"
                  >
                    Get directions
                  </a>
                </div>

                {/* Delivery from this shop */}
                {(loc.ordering.doordash || loc.ordering.grubhub) && (
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-xs uppercase tracking-widest text-text-muted">
                      Delivery from this shop
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {loc.ordering.doordash && (
                        <a
                          href={loc.ordering.doordash}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#FF3008]/50 px-5 py-2 text-sm font-medium text-[#FF3008] transition-colors hover:bg-[#FF3008] hover:text-white"
                        >
                          DoorDash
                        </a>
                      )}
                      {loc.ordering.grubhub && (
                        <a
                          href={loc.ordering.grubhub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#FF8000]/50 px-5 py-2 text-sm font-medium text-[#FF8000] transition-colors hover:bg-[#FF8000] hover:text-white"
                        >
                          Grubhub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}