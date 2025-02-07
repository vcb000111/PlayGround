import createMDX from '@next/mdx';

const withMDX = createMDX();

export default withMDX({
  // Cấu hình Next.js của bạn
  experimental: {
    mdxRs: true,
  },
}); 