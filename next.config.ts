import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Often helps with simple static hosting or if image optimization isn't critical/configured
  },
};

export default nextConfig;