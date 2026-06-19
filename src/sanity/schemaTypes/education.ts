import { defineField, defineType } from "sanity";

export const educationType = defineType({
  name: "education",
  title: "Education / certification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "status", title: "Status", type: "string" }),
    defineField({ name: "startDate", title: "Start date", type: "date" }),
    defineField({ name: "endDate", title: "End date", type: "date" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
});
