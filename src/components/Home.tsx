'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Socials from './Socials';
import { roles } from '@/data';


const TypingEffect: React.FC = () => {
    const texts: string[] = roles;

    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className={styles.typing_container}>
            <div className={styles.typing_text} key={currentTextIndex}>
                {texts[currentTextIndex]}
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div className={styles.main}>
            {/* Hero Section */}
            <div className={styles.grid_container}>
                <div className={styles.grid_item} id={styles.g1}>
                    <div className={styles.secMain}>
                        <div className={styles.mainContent}>
                            <div className={styles.container}>
                                Hi There!
                                <span className={styles.hand}>👋🏻</span>
                            </div>
                        </div>
                        <h1 className={styles.sec}>
                            I'M <span className={styles.secSpan}>SRINIVAS BATTHULA</span>
                        </h1>
                        <div className={styles.third} style={{ fontWeight: 'bold' }}>
                            <TypingEffect />
                        </div>
                    </div>
                </div>
                <div className={styles.grid_item} id={styles.g2}>
                    <div className={styles.subDiv}></div>
                </div>
            </div>

            {/* About Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    justifyItems: "center",
                    alignItems: "center",
                }}
            >
                <div className={styles.div1}>
                    <div style={{ backgroundColor: 'transparent' }}>
                        <div className={styles.div2}>
                            LET ME{' '}
                            <span style={{ color: 'rgb(231, 110, 231)' }}>INTRODUCE</span>{' '}
                            MYSELF
                        </div>
                        <div className={styles.div3}>
                            <p>
                                Hello! I'm <span style={{ color: 'rgb(231, 100, 231)', fontWeight: 'bold' }}>Srinivas Batthula</span>,
                                a Motivated and detail-oriented Full Stack Developer with hands-on experience in scalable web apps.
                                <br /><br />
                                I specialize in the MERN stack and Next.js, building PWA features and optimizing backends.
                                <br /><br />
                                I'm committed to continuous learning and contributing to tech-driven teams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Socials Section */}
                <div className={styles.d1}>
                    <div className={styles.d2}>FIND ME ON</div>
                    <div className={styles.d3}>
                        Feel free to{' '}
                        <span style={{ color: 'rgb(231, 90, 231)', fontWeight: 'bold' }}>
                            connect
                        </span>{' '}
                        with me
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Home;
