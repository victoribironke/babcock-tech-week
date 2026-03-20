import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/calendar",
        destination: "https://lu.ma/btw26",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
