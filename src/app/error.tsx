// app/error.tsx
"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

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
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()} style={{ marginTop: '1rem' }}>
                Try again
            </button>
            <Link href="/">Go back home</Link>
        </div>
    );
}
