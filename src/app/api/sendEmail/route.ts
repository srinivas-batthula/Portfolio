// app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';

// --- Types --- //
interface ContactFormPayload {
    to: string; // Recipient Email (user who filled contact-form)
    name: string; // Recipient User’s name
    txt: string; // Message content entered in contact-form
}

interface ApiResponse {
    status: 'success' | 'fail';
    message?: string;
    error?: string;
}

// --- Helpers to build HTML email templates --- //
const buildFirstEmailHtml = (name: string) => `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
    .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    .footer { margin-top: 20px; font-size: 14px; color: #555; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Thank You, <span style="color: #007bff;">${name}</span>!</h2>
    <p>Your response has been recorded.</p>
    <p class="footer">~ Srinivas Batthula</p>
  </div>
</body>
</html>`;

const buildSecondEmailHtml = (name: string, txt: string) => `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
    .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    .message { background: #f8f9fa; padding: 10px; border-left: 4px solid #007bff; font-style: italic; }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Message from <span style="color: #007bff;">${name}</span></h2>
    <p class="message">${txt}</p>
  </div>
</body>
</html>`;

// --- Main API handler --- //
export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
    try {
        // Parse body as JSON
        const body = (await req.json()) as Partial<ContactFormPayload>;
        const { to, name, txt } = body;

        // Validate input
        if (!to || !name || !txt) {
            return NextResponse.json(
                { status: 'fail', error: 'to, name, and txt fields are required.' },
                { status: 400 }
            );
        }

        // Environment variables (never expose in client)
        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASS = process.env.EMAIL_PASS;
        const EMAIL_USER2 = process.env.EMAIL_USER2;

        if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_USER2) {
            return NextResponse.json(
                { status: 'fail', error: 'Server email credentials are missing.' },
                { status: 500 }
            );
        }

        // Create transporter (using Gmail in this case)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: EMAIL_USER, pass: EMAIL_PASS },
        });

        // First email: thanks to contacted `user`
        const firstEmail: SendMailOptions = {
            from: EMAIL_USER,
            to,
            subject: 'An E-mail from ~Srinivas Batthula',
            html: buildFirstEmailHtml(name),
        };

        // Second email: forward message to `portfolio-admin`
        const secondEmail: SendMailOptions = {
            from: EMAIL_USER,
            to: EMAIL_USER2,
            subject: 'From Personal Portfolio',
            html: buildSecondEmailHtml(name, txt),
        };

        // Send both
        await transporter.sendMail(firstEmail);
        await transporter.sendMail(secondEmail);

        return NextResponse.json(
            { status: 'success', message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (err: any) {
        console.error('Email API Error:', err);
        return NextResponse.json(
            { status: 'fail', error: err.message || 'Failed to send email.' },
            { status: 500 }
        );
    }
}
