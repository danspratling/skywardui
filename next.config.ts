import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["pages", "app", "components", "lib", "utils", "ui"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

export default nextConfig;
