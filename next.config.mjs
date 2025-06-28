/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
       unoptimized: true
    },
      // Add this for static export support
  output: 'export',
  // Optional but safer: avoid `.next/export` conflicts
  trailingSlash: true, // helps with static hosting
};