import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zona-zero.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;
