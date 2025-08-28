// components/Socials.tsx
import styles from '@/styles/Home.module.css';
import React from 'react';
import { SOCIALS } from '@/data';
import { SocialLink } from '@/types';

const Socials: React.FC = () => {
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
            </div>
        </>
    );
};

export default Socials;
