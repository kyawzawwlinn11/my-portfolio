import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "object",
  fields: [
    defineField({ name: "overview", title: "Overview", type: "text", rows: 4 }),
    defineField({ name: "problem", title: "Problem", type: "text", rows: 4 }),
    defineField({ name: "role", title: "My role", type: "string" }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "approach",
      title: "Architecture / approach",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "features",
      title: "Key features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "solutions",
      title: "Solutions",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "impact",
      title: "Impact / results",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "lessons",
      title: "Lessons learned",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
