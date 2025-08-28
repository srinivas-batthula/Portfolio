// app/api/uptimer/route.ts             { Run by VERCEL-CRON at 6:30AM everyday }...
import { NextRequest, NextResponse } from 'next/server';

// Define the shape of the response (helps with type safety)
interface UptimeResponse {
    success: boolean;
    url: string;
    times: number;
    msg: string;
}

// Helper: delay execution for given ms (used between pings)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// URL-format := `https://srinivas-batthula.vercel.app/api/uptimer?url=https://coflow-backend-bcgk.onrender.com&times=3`
export async function GET(req: NextRequest) {
    // Parse query params from request URL
    const { searchParams } = new URL(req.url);
    let url = searchParams.get('url');
    let times = searchParams.get('times');

    // Validate inputs
    if (!url || !times || isNaN(Number(times)) || parseInt(times) < 1) {
        // Fallback defaults if input invalid
        url = 'https://coflow-backend-bcgk.onrender.com/';
        times = '2';
    }
    console.log(`/api/uptimer executed! URL: ${url}`);

    // Construct response object (type-safe)
    const response: UptimeResponse = {
        success: true,
        url,
        times: parseInt(times),
        msg: `Requests will be sent to the URL provided with a delay!`,
    };

    // Start sending pings asynchronously (does not block 'API response')...
    (async () => {
        const requestCount = parseInt(times!);
        for (let i = 0; i < requestCount; i++) {
            try {
                await fetch(url!); // ping target URL
                // console.log(`[${i + 1}] ${url} → ${ping.status}`);
            } catch (err: any) {
                console.error(`[${i + 1}] Error pinging ${url}:`, err.message);
            }

            if (i < requestCount - 1) {
                await delay(1000); // wait 1s between pings
            }
        }
    })();

    // Return HTTP response immediately (fire-and-forget requests will run in background)
    return NextResponse.json(response, {
        status: 200,
        headers: {
            'Cache-Control': 'no-store, max-age=0', // Disable caching
        },
    });
}
