const createMDX = require('@next/mdx');

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig); 