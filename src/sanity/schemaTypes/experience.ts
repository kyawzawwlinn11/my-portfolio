import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Work experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "employmentType", title: "Employment type", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "endDate", title: "End date", type: "date" }),
    defineField({
      name: "isCurrent",
      title: "Current role",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
});
