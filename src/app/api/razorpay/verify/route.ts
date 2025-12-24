import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Verify the final Payment (Razorpay)...
export async function POST(req: NextRequest) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return NextResponse.json(
                { success: false, details: 'Missing details!' },
                { status: 400 }
            );
        }

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        if (expectedSignature === razorpay_signature) {
            return NextResponse.json(
                { success: true, details: 'Payment verified successfully' },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { success: false, details: 'Payment verification failed' },
            { status: 403 }
        );
    } catch (error: any) {
        return NextResponse.json({ success: false, details: error.message }, { status: 500 });
    }
}
