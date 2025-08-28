// utils/home.ts
import { ContactForm, StarConfig } from '@/types';
import { getFromIndexedDB, clearAllInIndexedDB } from './indexedDB';

// Used in components/Background.tsx at `Particles`
export function generateStars(numStars: number): StarConfig[] {
    return Array.from({ length: numStars }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
    }));
}

// Used in components/Layout.tsx
export async function trySendOfflineShares(): Promise<void> {
    console.log('Fired trySendOfflineShares to sync offline messages...');
    const allShares = await getFromIndexedDB('contactForm');

    let allSuccess = true;
    if (allShares.success === true && allShares.data.id) {
        const shareData: ContactForm = allShares.data;
        try {
            const res = await fetch(shareData.url, {
                method: shareData.method,
                headers: shareData.headers,
                body: JSON.stringify(shareData.body),
            });

            if (!res.ok) {
                allSuccess = false;
            }
        } catch (err) {
            console.warn('Network error sending saved entry, will retry later', err);
            allSuccess = false;
        }
    }

    if (allSuccess) {
        await clearAllInIndexedDB('contactForm');
    }
}
