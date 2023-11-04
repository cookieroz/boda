/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  postcss: true,
  serverModuleFormat: "cjs",
  tailwind: true,
  watchPaths: ['./tailwind.config.ts'],
};
