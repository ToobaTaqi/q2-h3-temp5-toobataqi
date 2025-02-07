// import creatNextIntlePlugin from "next-intl/plugin";

// const withNextIntl = creatNextIntlePlugin();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.sanity.io"], // Add the Sanity image CDN here
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*", // Matches all `/api/*` routes
        destination: "http://localhost:3000/api/:path*", // Backend server
      },
    ];
  },

  // server: {
  //   proxy: {
  //     "/api": `https://portfolio-server-theta-vert.vercel.app/`,
  //     // "/api": `https://portfolio-server-theta-vert.vercel.app/`,
  //     // "/api": `http://localhost:5000`,
  //   },
  // },
};

export default nextConfig;
// export default withNextIntl(nextConfig);
