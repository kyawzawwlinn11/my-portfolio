import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [{ type: "navigationItem" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "resume",
      title: "Resume / CV file",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({ name: "seo", title: "Default SEO", type: "seo" }),
  ],
  preview: {
    select: { title: "title", subtitle: "siteUrl" },
  },
});
