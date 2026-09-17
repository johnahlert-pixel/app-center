import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      { source: "/saint-tropez", destination: "/saint-tropez/index.html" },
    ];
  },
};

export default nextConfig;
