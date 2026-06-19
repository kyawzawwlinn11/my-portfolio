import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "portfolio",
  title: "Kyaw Zaww Linn Portfolio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
