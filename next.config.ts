import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.furhouz.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;