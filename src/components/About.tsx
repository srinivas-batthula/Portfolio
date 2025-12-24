'use client';

import React from 'react';
import styles from '@/styles/About.module.css';
import SkillsSection from './Skills';

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <div className={styles.sec2}>
                Know Who{' '}
                <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>I&apos;M</span>
            </div>
            <p
                style={{
                    color: 'rgba(255, 295, 255, 0.488)',
                    fontSize: '1.3rem',
                    margin: '0.1rem',
                }}
            >
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
                            I build scalable web applications using the MERN & Next.js stack, with
                            expertise in PWA features and backend optimization.
                            <br />I enjoy solving DSA problems in Java and contributing to
                            open-source projects.
                        </div>
                        <div className={styles.sec4}>
                            Passionate about continuous learning and delivering value in tech-driven
                            teams.
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

            {/* Skills */}
            <SkillsSection />
        </div>
    );
};

export default About;
