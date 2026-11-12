/** @type {import('next').NextConfig} */
const { version } = require("./package.json");

const nextConfig = {
  trailingSlash: true,
  // Versão semântica (MAJOR.MINOR.PATCH) lida do package.json
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

module.exports = nextConfig;
