'use client';

import React from 'react';
// import { useRouter } from 'next/navigation';
import styles from '@/styles/About.module.css';
import ImageCarousel from './Certifications';
import SkillsSection from './Skills';

const About: React.FC = () => {
    // const router = useRouter();

    return (
        <div className={styles.about}>
            <div className={styles.sec2}>
                Know Who{' '}
                <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>I&apos;M</span>
            </div>
            <p style={{ color: 'rgba(255, 295, 255, 0.488)', fontSize: '1.3rem', margin:'0.1rem' }}>
                Passionate about modern technology and scalable architectures
            </p>

            <div className={styles.main}>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyItems: 'center',
                    }}
                >
                    <div className={styles.mainImg}>
                        <div className={styles.img}></div>
                    </div>
                </div>

                <div className={styles.sec1}>
                    <div className={styles.sec3}>
                        <div className={styles.sec4}>
                            Hello! I&apos;m{' '}
                            <span style={{ color: 'rgb(200, 80, 200)', fontWeight: 'bold' }}>
                                {' '}
                                Srinivas Batthula
                            </span>
                            , a Backend-Focused Full Stack Developer from{' '}
                            <span style={{ color: 'rgb(200, 80, 200)', fontWeight: 'bold' }}>
                                Hyderabad, India
                            </span>
                            .
                            <br />
                            <br />
                            I build scalable web applications using the MERN & Next.js stack, with expertise in PWA features and backend optimization.
                            <br />
                            I enjoy solving DSA problems in Java and contributing to open-source projects.
                        </div>
                        <div className={styles.sec4}>
                            Passionate about continuous learning and delivering value in tech-driven teams.
                        </div>
                        <div className={styles.sec4} style={{ color: 'rgb(213, 114, 143)' }}>
                            <span style={{ fontWeight: 'bold' }}>
                                &quot; Commitment builds consistency, Consistency drives success.
                                &quot;
                            </span>
                            <br />
                            <span style={{ marginLeft: '50%', fontStyle: 'italic' }}>
                                {' '}
                                ~ Srinivas.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div className={styles.main3}>
                <div className={styles.head}>
                    Certifications{' '}
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>Earned</span>
                </div>
                <ImageCarousel />
            </div>

            {/* Skills */}
            <SkillsSection />

            {/* Explore More */}
            {/* <div style={{ marginTop: '4rem' }}>
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
            </div> */}
        </div>
    );
};

export default About;
