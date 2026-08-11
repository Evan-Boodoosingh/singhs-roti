import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Customer name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Review text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: "Where it came from, e.g. Google, Yelp, DoorDash",
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5).integer(),
    }),
  ],
  preview: {
    select: { title: "author", subtitle: "quote" },
  },
});