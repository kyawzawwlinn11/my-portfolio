import { defineField, defineType } from "sanity";

export const skillCategoryType = defineType({
  name: "skillCategory",
  title: "Skill category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "accent", title: "Accent label", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
});
