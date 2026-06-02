import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    // /transfers is gone — content unified into /charter. Keep old URLs alive
    // for SEO / external links / bookmarks.
    return [
      { source: "/transfers", destination: "/it/charter", permanent: true },
      { source: "/en/transfers", destination: "/en/charter", permanent: true },
      { source: "/it/transfers", destination: "/it/charter", permanent: true },
    ];
  },
};

export default nextConfig;
