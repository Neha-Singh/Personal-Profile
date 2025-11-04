import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    // ❗ Only ignore linting during builds; keep it locally
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
