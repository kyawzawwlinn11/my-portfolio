import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "skillCategory" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
});
