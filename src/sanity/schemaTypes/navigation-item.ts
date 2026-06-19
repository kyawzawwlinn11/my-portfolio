import { defineField, defineType } from "sanity";

export const navigationItemType = defineType({
  name: "navigationItem",
  title: "Navigation item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Path or URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "external",
      title: "External link",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
});
