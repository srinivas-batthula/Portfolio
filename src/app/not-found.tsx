// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{
            padding: '2rem',
            textAlign: 'center',
            height: '100vh',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link href="/">Go back home</Link>
        </div>
    );
}
