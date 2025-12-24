// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            style={{
                padding: '2rem',
                textAlign: 'center',
                height: '100vh',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <h1 style={{ color: 'red', fontSize: '1.3rem', fontWeight: '550' }}>
                404 - Page Not Found
            </h1>
            <p style={{ color: 'rgb(245, 154, 154)', fontSize: '1.2rem' }}>
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
                href="/"
                style={{
                    border: '2px Solid skyblue',
                    borderRadius: '10px',
                    backgroundColor: 'rgb(52, 199, 89)',
                    padding: '0.3rem',
                    marginTop: '1rem',
                    fontWeight: '550',
                }}
            >
                Go-back Home
            </Link>
        </div>
    );
}
