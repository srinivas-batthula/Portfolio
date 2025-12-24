// data/highlights/certifications.ts
import { hackathonsInterface } from '@/types';

export const Hackathons: hackathonsInterface[] = [
    {
        date: 'Sep 5-6, 2024',
        title: 'Demux-2K24',
        host: 'BVRIT',
        location: 'Narsapur',
        description:
            'Built a gamified learning platform with interactive modules and progress tracking, resulting in a 50% increase in simulated student engagement.',
        icon: 'https://bvrit.ac.in/Demux2.0/assests/bvrit.png',
        winner: false,
    },
    {
        date: 'Oct 23, 2025',
        title: 'Srishti-2025',
        host: 'SNIST/CSE',
        location: 'Ghatkesar',
        description:
            'Collaborated in a team to develop a full-stack placement management system (Smart LMS) enhancing student preparation and placement coordination; secured 3rd place.',
        icon: 'https://campushunt.in/collegelogo/Sree304.jpg',
        winner: true,
        link: 'https://github.com/srinivas-batthula/cse-hackathon-snist',
    },
];
