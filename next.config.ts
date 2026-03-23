import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/calendar",
        destination: "https://lu.ma/btw26",
        permanent: false,
      },
      {
        source: "/hackathon",
        destination:
          "https://docs.google.com/forms/d/1eG0InqhmCQQBCGAGVDXqhGX5ONaNkERglKmrhiSVqjk/edit?ts=69c06368",
        permanent: false,
      },
      {
        source: "/hackathon/terms",
        destination:
          "https://docs.google.com/document/d/1hMa_9QZhSNA7FV-pRj1HlI_ntcLYnQxm/edit",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
