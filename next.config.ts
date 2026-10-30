import type { NextConfig } from 'next';

const isStaticExport = process.env.NEXT_STATIC_EXPORT === '1';

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.0.18',
    '195.208.61.168:3000',
    'auraplace.ru',
    'ce76-194-39-204-18.ngrok-free.app',
  ],
  compiler: {
    styledComponents: true,
  },
  ...(!isStaticExport &&
    process.env.NEXT_STANDALONE === '1' && {
      output: 'standalone' as const,
    }),
  ...(isStaticExport && {
    output: 'export' as const,
    trailingSlash: true,
  }),
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
