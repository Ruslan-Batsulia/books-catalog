import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src \"self\"; script-src \"none\"; sandbox;",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")],
    prependData: `
      @use "_variables" as *;
      @use "_mixins" as *;
      @use "_colors" as *;
    `,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
