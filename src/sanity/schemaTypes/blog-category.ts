import { defineField, defineType } from "sanity";

export const blogCategoryType = defineType({
  name: "blogCategory",
  title: "Blog category",
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
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "accent", title: "Accent label", type: "string" }),
  ],
});
