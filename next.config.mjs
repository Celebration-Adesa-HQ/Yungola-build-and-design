/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // 1. Solve the "Object.defineProperty called on non-object" error by changing the devtool setting
    if (dev && !isServer) {
      config.devtool = "cheap-module-source-map";
    }

    // 2. Solve "Module not found: Can't resolve 'canvas'"
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
      };
    }

    // 3. Solve "Module not found: Can't resolve '.'" by disabling Webpack's parsing of new URL() in ESM
    config.module.parser = {
      ...config.module.parser,
      javascript: {
        ...config.module.parser?.javascript,
        url: false,
      },
    };

    return config;
  },
  turbopack: {
    resolveAlias: {
      canvas: "./lib/empty-module.js",
    },
  },
};

export default nextConfig;
