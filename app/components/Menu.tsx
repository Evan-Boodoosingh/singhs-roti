'use client'

import { useState } from 'react'
import type { MenuCategory } from '../../sanity/lib/getMenu'

export default function Menu({ categories }: { categories: MenuCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?._id ?? '')

  if (categories.length === 0) {
    return <p className="text-center text-text-muted">Menu coming soon.</p>
  }

  const active = categories.find((c) => c._id === activeId) ?? categories[0]

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      {/* Tabs, derived from the categories in Sanity */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const isActive = category._id === active._id
          return (
            <button
              key={category._id}
              onClick={() => setActiveId(category._id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isActive
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-surface text-text hover:border-accent-warm'
              }`}
            >
              {category.title}
            </button>
          )
        })}
      </div>

      {/* Active category heading */}
      <div className="mb-8 text-center">
        <h2 className="font-serif text-4xl text-text">{active.title}</h2>
        {active.note && (
          <p className="mt-2 text-sm text-text-muted">{active.note}</p>
        )}
      </div>

      {/* Items */}
      <ul className="divide-y divide-border">
        {active.items?.map((item, i) => (
          <li
            key={i}
            className={`flex items-baseline justify-between gap-4 py-4 ${
              item.available === false ? 'opacity-40' : ''
            }`}
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
          </li>
        ))}
      </ul>
    </section>
  )
}