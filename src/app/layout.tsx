// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { Lato } from 'next/font/google';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/Navbar.css';
import Layout from '@/components/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Toaster } from 'react-hot-toast';
import { Schema } from '@/data';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400'],
});

export const metadata: Metadata = {
    // Page Info...
    authors: [{ name: 'Srinivas Batthula', url: 'https://srinivas-batthula.vercel.app' }],
    title: 'Srinivas Batthula | Portfolio',
    description:
        'Portfolio of Srinivas Batthula, MERN Stack Developer skilled in full-stack development, open source, and backend engineering.',
    keywords: [
        'Srinivas Batthula',
        'srinivas-batthula',
        'btech',
        'engineering',
        'snist',
        'sreenidhi college',
        'ghatkesar',
        'hyderabad',
        'portfolio',
        'Vercel',
        'MERN stack developer',
        'Full Stack developer',
        'Backend developer',
        'sde',
        'software engineer',
        'Open Source',
        'web development',
        'problem solving',
        'programming',
        'projects',
        'coflow',
        'verseify',
        'Java',
        'Javascript',
        'Python',
        'Html',
        'Css',
        'Tailwindcss',
        'Bootstrap',
        'React',
        'NextJs',
        'Zustand',
        'pwa',
        'progressive web app',
        'seo',
        'indexedDB',
        'offline',
        'service workers',
        'webmanifest',
        'push notifications',
        'json',
        'Node.js',
        'Express.js',
        'FastAPI',
        'web-push',
        'nodemailer',
        'openai',
        'gemini api',
        'razorpay',
        'swagger docs',
        'jwt',
        'OAuth',
        'cloudinary',
        'multer',
        'cors',
        'rate limiter',
        'helmet',
        'pug',
        'axios',
        'npm',
        'nodemon',
        'mongoose',
        'MongoDB',
        'SQL',
        'Databases',
        'redis',
        'caching',
        'message queue',
        'playwright',
        'webscraping',
        'node cron',
        'socketio',
        'websockets',
        'realtime',
        'jest',
        'supertest',
        'testing',
        'mvc',
        'rest apis',
        'git',
        'github',
        'version control',
        'Docker',
        'containerization',
        'render',
        'vercel',
        'netlify',
        'deployment',
        'api monitoring',
        'scalable backend systems',
    ],

    // Social Sharing tags...
    openGraph: {
        title: 'Srinivas Batthula | Fullstack Developer Portfolio',
        description: 'Explore my work, projects, and open source contributions.',
        url: 'https://srinivas-batthula.vercel.app',
        siteName: 'Srinivas Batthula | Portfolio',
        images: [
            {
                url: 'https://srinivas-batthula.vercel.app/icon.png',
                width: 1200,
                height: 630,
                alt: 'Portfolio Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Srinivas Batthula | Fullstack Developer Portfolio',
        description: 'Explore my work, projects, and open source contributions.',
        creator: '@Abhi07082005',
        images: [
            {
                url: 'https://srinivas-batthula.vercel.app/icon.png',
                width: 1200,
                height: 630,
                alt: 'Portfolio Preview',
            },
        ],
    },

    icons: {
        icon: '/icon.png',
        shortcut: '/icon.png',
        apple: '/icon.png',
    },

    // SEO & PWA...
    robots: { index: true, follow: true },
    manifest: '/manifest.json',

    verification: {
        // Google Search Console Verification  (As `Bing-Search` is imported from Google Search Console)...
        google: 'TbhDgBAon0JlcRZGcPav0DB8188B7S1doUU7vfQy0qY', // For Vercel deployment
        yandex: '85fe45ce1c1befd1', // Yandex Search Webmaster verification
        other: {
            'google-site-verification': 'tgr9rQeA_88RwbcxrcZmCrRUBjbLWUBYb9jolb1cFM0', // For GitHub Pages
        },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={lato.className}>
            <head>
                {/* ==== Preconnect / DNS Prefetch ==== */}
                {/* <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                    crossOrigin="anonymous"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
                <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
                <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

                {/* Font... */}
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
                    rel="stylesheet"
                /> */}

                {/* SEO... */}
                <link rel="canonical" href="https://srinivas-batthula.vercel.app" />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="https://srinivas-batthula.vercel.app/sitemap.xml"
                />

                {/* Icons CDN's... */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />

                {/* CSS CDN's...    ( Now this TailwindCSS is directly imported via `tailwind.config.js` & `postCSS.config.js` )*/}
                {/* <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" /> */}
                {/* <script src="https://cdn.tailwindcss.com"></script> */}

                {/* Structured Data (JSON-LD)... */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(Schema),
                    }}
                ></script>
            </head>
            <body>
                <Layout>
                    <Toaster position="top-right" />
                    <ErrorBoundary>{children}</ErrorBoundary>
                </Layout>
            </body>
        </html>
    );
}
