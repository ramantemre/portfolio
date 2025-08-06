/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    };
  },
  assetPrefix: prod ? "/portfolio" : "",
  env: {
    BACKEND_URL: prod ? "/portfolio" : "",
  },
};

module.exports = nextConfig;
