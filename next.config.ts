import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/homepage", destination: "/", permanent: true },
      { source: "/portal", destination: "/portals", permanent: true },
      { source: "/platform", destination: "/portals", permanent: true },
      { source: "/platforms", destination: "/portals", permanent: true },
      { source: "/products", destination: "/portals", permanent: true },
      { source: "/why-teksys", destination: "/about", permanent: true },
      { source: "/whyteksys", destination: "/about", permanent: true },
      { source: "/book-demo", destination: "/contact", permanent: true },
      { source: "/demo", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
