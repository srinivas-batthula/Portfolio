// next.config.js
// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // enable features if you need
    },
    images: {
        // Add external image domains if needed
        remotePatterns: [
            { protocol: 'https', hostname: 'raw.githubusercontent.com' },
            { protocol: 'https', hostname: 'srinivas-batthula.github.io' },
            { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
        ],
    },
    headers: async () => [
        {
            source: '/service-worker.js',
            headers: [
                // Don't cache SW aggressively—keep it fresh
                { key: 'Cache-Control', value: 'no-store, max-age=0' },
                { key: 'Service-Worker-Allowed', value: '/' },
            ],
        },
        {
            source: '/manifest.json',
            headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
        },
    ],
};

module.exports = nextConfig;
