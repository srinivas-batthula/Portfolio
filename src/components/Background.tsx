// components/ParticlesBackground.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StarConfig, StarProps } from '@/types';
import { generateStars } from '@/utils';

const Star: React.FC<StarProps> = ({ x, y, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
            style={{
                position: 'fixed',
                top: `${y}%`,
                left: `${x}%`,
                width: '3px',
                height: '3px',
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 7.1px white',
            }}
        />
    );
};

const ParticlesBackground: React.FC = () => {
    const numStars = 50; // Number of Stars on Page's Background...
    const [stars, setStars] = useState<StarConfig[]>([]);

    useEffect(() => {
        const generatedStars = generateStars(numStars);
        setStars(generatedStars);
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            {stars.map(star => (
                <Star key={star.id} x={star.x} y={star.y} delay={star.delay} />
            ))}
        </div>
    );
};

export default ParticlesBackground;
