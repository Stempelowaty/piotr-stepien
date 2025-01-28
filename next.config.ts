import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en-US",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
