import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "rules": {
    "react-hooks/exhaustive-deps": "off",
    "@next/next/no-react-use": "off"
  }
};

export default nextConfig;
