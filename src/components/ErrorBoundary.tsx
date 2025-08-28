'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Something went wrong.</h2>
                    <p>Please try again or go back to the home page.</p>
                    <Link href="/">
                        <a
                            style={{
                                display: 'inline-block',
                                marginTop: '1rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#0070f3',
                                color: '#fff',
                                borderRadius: '5px',
                                textDecoration: 'none',
                            }}
                        >
                            Go to Home
                        </a>
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
