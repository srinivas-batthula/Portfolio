// app/error.tsx
'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error('App Error:', error);
    }, [error]);

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
                Something went wrong!
            </h1>
            <p style={{ color: 'rgb(245, 154, 154)', fontSize: '1.2rem' }}>{error.message}</p>
            <button
                onClick={() => reset()}
                style={{
                    marginTop: '1rem',
                    backgroundColor: 'rgb(245, 154, 154)',
                    fontWeight: '550',
                    border: '2px Solid skyblue',
                    borderRadius: '10px',
                    padding: '0.3rem',
                }}
            >
                Try again
            </button>
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
                Go-back home
            </Link>
        </div>
    );
}
