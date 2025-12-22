// components/Socials.tsx
import styles from '@/styles/Home.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';
import { SOCIALS } from '@/data';
import { SocialLink } from '@/types';

const Socials: React.FC = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles.d4}>
                {SOCIALS.map((item: SocialLink, idx) => {
                    return (
                        <a
                            key={idx}
                            data-social={item.name}
                            className={item.className}
                            id={styles.linkBtn}
                            href={item.href}
                            title={item.title}
                            target="_blank"
                            rel="me noreferrer"
                        >
                            {item.icon}
                        </a>
                    );
                })}

                <button
                    data-social='Contact Form'
                    // className={styles.contactButton}
                    id={styles.linkBtn}
                    title='Contact Form'
                    onClick={() => router.push('/contact')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24">
                        <path fill="#6cafd3" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1" stroke-width="0.4" stroke="#135cd9" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Socials;
