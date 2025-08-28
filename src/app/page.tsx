import type { Metadata } from "next";
import Home from "@/components/Home";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Srinivas Batthula | Portfolio",
    description: 'Portfolio of Srinivas Batthula, MERN Stack Developer skilled in full-stack development, open source, and backend engineering.',
    authors: [{ name: "Srinivas Batthula", url: 'https://srinivas-batthula.vercel.app' }],
    keywords: ["Srinivas Batthula", "srinivas-batthula", "btech", "engineering", "snist", "sreenidhi college", "ghatkesar", "hyderabad", "portfolio", "Vercel", "MERN stack developer", "Full Stack developer", "Backend developer", "sde", "software engineer", "Open Source", "web development", "problem solving", "programming", "projects", "coflow", "verseify", "Java", "Javascript", "Python", "Html", "Css", "Tailwindcss", "Bootstrap", "React", "NextJs", "Zustand", "pwa", "progressive web app", "seo", "indexedDB", "offline", "service workers", "webmanifest", "push notifications", "json", "Node.js", "Express.js", "FastAPI", "web-push", "nodemailer", "openai", "gemini api", "razorpay", "swagger docs", "jwt", "OAuth", "cloudinary", "multer", "cors", "rate limiter", "helmet", "pug", "axios", "npm", "nodemon", "mongoose", "MongoDB", "SQL", "Databases", "redis", "caching", "message queue", "playwright", "webscraping", "node cron", "socketio", "websockets", "realtime", "jest", "supertest", "testing", "mvc", "rest apis", "git", "github", "version control", "Docker", "containerization", "render", "vercel", "netlify", "deployment", "api monitoring", "scalable backend systems"],
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://srinivas-batthula.vercel.app",
    },
};

export default function HomePage() {
    return (
        <main>
            <Home />
        </main>
    );
}
