import type { Metadata } from 'next';
import { Keywords, Authors } from '@/data';
import Projects from '@/components/Projects';

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: 'Projects | Srinivas Batthula',
    description: 'Portfolio of Srinivas Batthula, Recent Works / Projects of srinivas batthula.',
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
            <Projects />
        </main>
    );
}
