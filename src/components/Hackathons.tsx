// components/Hackathons.jsx
'use client';
import styles from '@/styles/Highlights.module.css';
import { Hackathons } from '@/data';
import { hackathonsInterface } from '@/types';

const hackathons = Hackathons as hackathonsInterface[];

hackathons.sort((a, b) => {
    const parseDate = (dateStr: string) => {
        // Ex:- "Sep 5-6, 2024"
        const monthMap: {
            Jan: number;
            Feb: number;
            Mar: number;
            Apr: number;
            May: number;
            Jun: number;
            Jul: number;
            Aug: number;
            Sep: number;
            Oct: number;
            Nov: number;
            Dec: number;
        } = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11,
        };

        const [monthStr, dayPart, yearStr] = dateStr.replace(',', '').split(' ');

        // Handle range like 5-6 → take latest day (6)
        const day = dayPart.includes('-') ? Number(dayPart.split('-')[1]) : Number(dayPart);
        const month = monthMap[monthStr as keyof typeof monthMap];
        const year = Number(yearStr);

        return new Date(year, month, day).getTime();
    };
    return parseDate(b.date) - parseDate(a.date);
});

export default function HackathonTimeline() {
    return (
        <div className="relative max-w-5xl mx-auto py-12">
            {/* Vertical timeline line */}
            <div className="absolute left-16 md:left-1/2 top-0 h-full w-1 bg-pink-400" />

            <div className="space-y-24">
                {hackathons.map((hack, index) => {
                    const isRight = index % 2 === 0;

                    return (
                        <a
                            href={hack.link ? hack.link : ''}
                            target={hack.link ? '_blank' : '_self'}
                            key={index}
                            className={`${styles.timelineItem} relative flex flex-col md:flex-row`}
                        >
                            {/* Timeline icon marker */}
                            {hack.icon && (
                                <div
                                    className={`${styles.hackathonIcon} absolute left-16 md:left-1/2 
                                    -translate-x-1/2 -translate-y-6 
                                    w-14 h-14 rounded-full bg-gray-200 
                                    flex items-center justify-center z-10`}
                                >
                                    <img
                                        src={hack.icon}
                                        alt={`${hack.title} logo`}
                                        className="w-12 h-12 object-contain rounded-full"
                                        onError={e => {
                                            (e.target as HTMLElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`${styles.hackathonCard2} mt-1 md:mt-0 
                                w-full md:w-7/12 
                                ${isRight ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}
                            >
                                <div
                                    className={`${styles.hackathonCard} 
                                    rounded-2xl shadow-md 
                                    hover:shadow-lg transition`}
                                >
                                    {/* Title with winner badge */}
                                    <div
                                        className={`${styles.hackathonTitle} flex flex-col md:flex-row md:items-center md:justify-center text-center md:space-x-3 space-y-1 md:space-y-0`}
                                    >
                                        <span
                                            className="md:text-xl text-lg font-semibold"
                                            style={{ color: 'rgb(223, 170, 223)' }}
                                        >
                                            {hack.title}
                                        </span>

                                        {hack.winner && (
                                            <span
                                                className="text-yellow-500"
                                                title="Winner"
                                                role="img"
                                                aria-label="Winner trophy"
                                            >
                                                <i className="fa-solid fa-trophy"></i>
                                            </span>
                                        )}

                                        <span className="text-sm font-normal text-gray-300">
                                            {'( '}
                                            <i className="fa-solid fa-flag mr-1"></i>
                                            {hack.host}
                                            {' )'}
                                        </span>
                                    </div>

                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            marginTop: '0.2rem',
                                        }}
                                    >
                                        <p className="text-sm text-gray-400">
                                            <i className="fa-solid fa-location-dot mr-1"></i>
                                            {hack.location}
                                        </p>

                                        <p className="text-sm text-gray-400 ml-auto">
                                            <i className="fa-regular fa-calendar mr-1"></i>
                                            {hack.date}
                                        </p>
                                    </div>

                                    <p className="text-sm text-gray-300 mt-4 mb-1">
                                        {hack.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
