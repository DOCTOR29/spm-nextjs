import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors
  },
};

export default nextConfig;
