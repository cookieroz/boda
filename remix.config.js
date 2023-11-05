import { config } from "@netlify/remix-adapter";
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ...(process.env.NODE_ENV === "production" ? config : undefined),
  ignoredRouteFiles: ["**/.*"],
  postcss: true,
  serverModuleFormat: "cjs",
  tailwind: true,
  watchPaths: ['./tailwind.config.ts'],
};
