const withMDX = require('@next/mdx')()

module.exports = withMDX({
  // Cấu hình Next.js của bạn
  experimental: {
    mdxRs: true,
  },
}) 