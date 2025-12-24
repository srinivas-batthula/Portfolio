import type { Metadata } from 'next';
import { Keywords, Authors } from '@/data';
import Highlights from '@/components/Highlights';

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: 'Achievements | Srinivas Batthula',
    description:
        'Portfolio of Srinivas Batthula, Recent Achievements / Recognitions of srinivas batthula.',
    authors: Authors,
    keywords: Keywords,
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://srinivas-batthula.vercel.app',
    },
};

export default function Page() {
    return (
        <main>
            <Highlights />
        </main>
    );
}
