import { defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroIntro",
      title: "Hero intro",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroCtas",
      title: "Hero CTAs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Path or URL" },
            {
              name: "variant",
              type: "string",
              title: "Variant",
              options: { list: ["primary", "secondary"] },
            },
          ],
        },
      ],
    }),
    defineField({ name: "availability", title: "Availability", type: "string" }),
    defineField({
      name: "summary",
      title: "Short summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "longBio", title: "Long bio", type: "text", rows: 8 }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
