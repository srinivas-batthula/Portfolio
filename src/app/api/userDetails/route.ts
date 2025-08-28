// app/api/userDetails/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface UserDetailsResponse {
    ip: string;
    city: string;
    country: string;
    userAgent: string;
}

async function getGeo(ip: string) {
    try {
        const res = await fetch(
            `https://get.geojs.io/v1/ip/geo/${ip}.json?timestamp=${Date.now()}`
        );
        if (!res.ok) return null;
        return await res.json();
    } catch (err) {
        console.error('Geo API error:', err);
        return null;
    }
}

export async function GET(req: NextRequest) {
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '';
    // ip = "8.8.8.8"; // For testing (US)

    const geo = await getGeo(ip);

    const data: UserDetailsResponse = {
        ip,
        city: geo?.city ?? '',
        country: geo?.country ?? '',
        userAgent,
    };

    return NextResponse.json(data, {
        status: 200,
        headers: {
            'Cache-Control': 'no-store, max-age=0', // Prevent caching
        },
    });
}
