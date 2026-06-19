import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service / freelance offering",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
});
