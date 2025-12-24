'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Highlights.module.css';
import ImageCarousel from './Certifications';
import ContributionCard from './ContributionCard';
import HackathonTimeline from './Hackathons';

const About: React.FC = () => {
    const router = useRouter();

    return (
        <div className={styles.about}>
            <div className={styles.sec2}>
                Key{' '}
                <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>
                    Achievements
                </span>
            </div>
            <p
                style={{
                    color: 'rgba(255, 295, 255, 0.488)',
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem',
                }}
            >
                Impactful results powered by modern technology
            </p>

            {/* Hackathons */}
            <div className={styles.main2} style={{ width: '100%' }}>
                <div className={styles.head}>
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>
                        Hackathon
                    </span>{' '}
                    Participations
                </div>
                <HackathonTimeline />
            </div>

            {/* Open Source */}
            <div className={styles.main2}>
                <div className={styles.head}>
                    Open Source{' '}
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>
                        Contributions
                    </span>
                </div>
                <ContributionCard />
            </div>

            {/* Certifications */}
            <div className={styles.main3}>
                <div className={styles.head}>
                    Certifications{' '}
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>Earned</span>
                </div>
                <ImageCarousel />
            </div>

            {/* Explore More */}
            <div style={{ marginTop: '2rem' }}>
                <div className={styles.head}>
                    Explore{' '}
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>More</span>
                </div>
                <div className="flex justify-center gap-5">
                    <button
                        onClick={() => router.push('/projects')}
                        className="group px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out active:scale-95 flex items-center gap-2"
                    >
                        <span style={{ fontSize: '1.2rem' }}> Projects </span>
                        <span
                            className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                            style={{ fontSize: '1.5rem' }}
                        >
                            →
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
