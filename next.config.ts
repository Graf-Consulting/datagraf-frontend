import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
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

export default nextConfig;
