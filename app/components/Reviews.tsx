"use client";

import { useState } from "react";
import type { Review } from "../../sanity/lib/getReviews";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [paused, setPaused] = useState(false);

  if (reviews.length === 0) return null;

  const loop = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-surface py-20 md:py-24">
      <div className="mb-12 px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-widest text-accent-warm">
          What people say
        </p>
        <h2 className="font-serif text-4xl text-text sm:text-5xl">
          From our regulars
        </h2>
      </div>

      <div
        className="animate-marquee flex w-max gap-6"
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onTouchCancel={() => setPaused(false)}
      >
        {loop.map((review, i) => (
          <figure
            key={`${review._id}-${i}`}
            className="w-80 shrink-0 rounded-2xl border border-border bg-background p-6"
          >
            <p aria-hidden="true" className="text-accent-warm">
              {"★".repeat(Math.min(Math.max(review.rating, 1), 5))}
            </p>
            <blockquote className="mt-3 text-text-muted">
              {review.quote}
            </blockquote>
            <figcaption className="mt-4">
              <span className="font-medium text-text">{review.author}</span>
              {review.source && (
                <span className="ml-2 text-xs uppercase tracking-wider text-text-muted">
                  via {review.source}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}