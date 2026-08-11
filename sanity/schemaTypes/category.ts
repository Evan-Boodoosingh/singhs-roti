import { defineArrayMember, defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. Roti, Doubles, Rice Bowls',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
      description: 'Optional line under the heading, e.g. "Served with rice and 2 sides"',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers show first',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({ type: 'menuItem' })],
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', order: 'order', items: 'items' },
    prepare({ title, order, items }) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title,
        subtitle: `#${order ?? '?'} · ${count} item${count === 1 ? '' : 's'}`,
      }
    },
  },
})