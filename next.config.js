// next.config.js
// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // enable features if you need
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'srinivas-batthula.github.io', pathname: '/**' },
            { protocol: 'https', hostname: 'srinivas-batthula.vercel.app', pathname: '/**' },
        ],
    },
};

module.exports = nextConfig;
