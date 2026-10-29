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
      // The bespoke tour now has its own page.
      { source: "/:lang(it|en)/tours/su-misura", destination: "/:lang/tailor-made", permanent: false },
    ];
  },
};

export default nextConfig;
