/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["liveblocks.io", "avatars.githubusercontent.com"],
  },
  env: {
    LIVEBLOCKS_SECRET_KEY: process.env.LIVEBLOCKS_SECRET_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
