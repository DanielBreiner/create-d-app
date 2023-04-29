!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
