'use client';

import React, { useEffect, ReactNode } from 'react';

import NavbarResponsive from './Navbar';
import Footer from './Footer';
import ParticlesBackground from './Background';

import styles from '@/styles/Home.module.css';
import FunToast from './ToastFun';

import { useUserDetailsStore } from '@/stores';
import { trySendOfflineShares } from '@/utils';

interface LayoutProps {
    children: ReactNode; // children can be any ReactNode (JSX, string, etc.)
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const fetchDetails = useUserDetailsStore(s => s.fetchDetails);

    useEffect(() => {
        // Redirect GitHub Pages → Vercel deployment
        if (typeof window !== 'undefined') {
            const currentHost = window.location.hostname;
            const correctHost = 'www.srinivas-batthula.me'; // <<  'srinivas-batthula.vercel.app'  >>
            console.log(currentHost);

            function extractLastSegment(path: string): string {
                const parts = path.split('/').filter(Boolean);
                return parts.length > 1 && parts[0] === 'portfolio'
                    ? '/' + parts[parts.length - 1]
                    : '/';
            }
            if (currentHost !== correctHost) {
                const currentPath =
                    extractLastSegment(window.location.pathname) +
                    window.location.search +
                    window.location.hash;

                const redirectTo = `https://${correctHost}${currentPath}`;
                console.log(redirectTo);
                // window.location.replace(redirectTo);
            }
        }
        // Register service worker in production
        if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
            navigator.serviceWorker
                .register(`${process.env.NEXT_PUBLIC_HOME}/service-worker.js`, { scope: '/' })
                .then(registration => {
                    console.log('Service Worker registered with scope: ', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker Registration failed: ', error);
                });
        }
        fetchDetails();
        trySendOfflineShares();
        window.addEventListener('online', trySendOfflineShares);
        return () => window.removeEventListener('online', trySendOfflineShares);
    }, [fetchDetails]);

    return (
        <div className={styles.layoutDiv}>
            <ParticlesBackground />

            <div style={{ position: 'relative' }}>
                <NavbarResponsive />
                <div className={styles.layoutDiv2}>
                    <main>{children}</main>
                </div>
                <Footer />
            </div>

            <FunToast />
        </div>
    );
};

export default Layout;
