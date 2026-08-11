"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { MenuCategory } from "../../sanity/lib/getMenu";
import { stagger, staggerItem } from "../lib/motion";

export default function Menu({ categories }: { categories: MenuCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?._id ?? "");

  if (categories.length === 0) {
    return <p className="text-center text-text-muted">Menu coming soon.</p>;
  }

  const active = categories.find((c) => c._id === activeId) ?? categories[0];

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      {/* Tabs, derived from the categories in Sanity */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const isActive = category._id === active._id;
          return (
            <button
              key={category._id}
              onClick={() => setActiveId(category._id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-surface text-text hover:border-accent-warm"
              }`}
            >
              {category.title}
            </button>
          );
        })}
      </div>

      {/* Active category heading */}
      <div className="mb-8 text-center">
        <h2 className="font-serif text-4xl text-text">{active.title}</h2>
        {active.note && (
          <p className="mt-2 text-sm text-text-muted">{active.note}</p>
        )}
      </div>

      {/* Items cascade in on scroll, and re-cascade when the tab changes */}
      <motion.ul
        key={active._id}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="divide-y divide-border"
      >
        {active.items?.map((item, i) => (
          <motion.li
            key={i}
            variants={staggerItem}
            className="flex items-baseline justify-between gap-4 py-4"
          >
            <div>
              <span className="font-medium text-text">{item.name}</span>
              {item.available === false && (
                <span className="ml-2 text-xs uppercase tracking-wide text-text-muted">
                  Sold out
                </span>
              )}
              {item.description && (
                <p className="mt-0.5 text-sm text-text-muted">
                  {item.description}
                </p>
              )}
            </div>
            <span className="whitespace-nowrap tabular-nums font-medium text-accent">
              ${item.price?.toFixed(2)}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Order for delivery: points people to their nearest shop's links */}
      <div className="mt-14 border-t border-border pt-10 text-center">
        <p className="text-text-muted">
          Hungry? Order delivery from your nearest shop.
        </p>
        <a
          href="#locations"
          className="mt-4 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-warm"
        >
          Choose your shop
        </a>
      </div>
    </section>
  );
}