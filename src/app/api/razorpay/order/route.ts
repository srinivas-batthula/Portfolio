import { NextRequest, NextResponse } from 'next/server';
import { getRazorpayInstance } from '@/lib/razorpayConfig';

// Create `order` for the Payment via Razorpay...
export async function POST(req: NextRequest) {
    const razorpay = getRazorpayInstance(); // dynamic import

    try {
        const { amount } = await req.json();

        if (!amount) {
            return NextResponse.json(
                { success: false, details: 'Amount Not Entered!' },
                { status: 400 }
            );
        }

        const options = {
            amount: amount * 100, // paise
            currency: 'INR',
            receipt: `order_rcptid_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order, { status: 201 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, details: error.message }, { status: 500 });
    }
}
