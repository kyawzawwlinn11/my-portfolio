import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "company", title: "Company / client", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "role", title: "My role", type: "string" }),
    defineField({ name: "status", title: "Status", type: "string" }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projectCategory" }] }],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({ name: "caseStudy", title: "Case study", type: "caseStudy" }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    select: { title: "title", subtitle: "company", media: "image" },
  },
});
