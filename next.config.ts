import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Skip lint errors on build
  },
};

export default nextConfig;
