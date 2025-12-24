import type { Metadata } from 'next';
import { Keywords, Authors } from '@/data';
import Home from '@/components/Home';

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: 'Srinivas Batthula | Portfolio',
    description:
        'Portfolio of Srinivas Batthula, MERN Stack Developer skilled in full-stack development, open source, and backend engineering.',
    authors: Authors,
    keywords: Keywords,
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://srinivas-batthula.vercel.app',
    },
};

export default function HomePage() {
    return (
        <main>
            <Home />
        </main>
    );
}
