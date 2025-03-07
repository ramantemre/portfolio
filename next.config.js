// /** @type {import('next').NextConfig} */
// const prod = process.env.NODE_ENV === "production";

// const nextConfig = {
//   reactStrictMode: true,
//   exportPathMap: function () {
//     return {
//       "/": { page: "/" },
//       "/about": { page: "/about" },
//     };
//   },
//   assetPrefix: prod ? "/my-portfolio" : "",
//   env: {
//     BACKEND_URL: prod ? "/my-portfolio" : "",
//   },
// };

// module.exports = nextConfig;

/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: "dist",
  //   basePath: "/my-portfolio", // Replace with your GitHub repo name
  //   images: {
  //     unoptimized: true, // Disable image optimization (as GitHub Pages does not support it)
  //   },
  images: { unoptimized: true }, // Optional: Disable image optimization for static export
  basePath: isProd ? "/my-portfolio" : "", // Set base path only in production
  assetPrefix: isProd ? "/my-portfolio" : "", // Ensure assets load correctly
};

module.exports = nextConfig;
