import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  experimental: {
    inlineCss: true
  },
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;