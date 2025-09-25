// types/env.d.ts

namespace NodeJS {
    interface ProcessEnv {
        EMAIL_HOST: string;
        EMAIL_PORT: string;
        EMAIL_USER: string;
        EMAIL_PASS: string;
        EMAIL_USER2: string;

        NEXT_PUBLIC_CONTACT_API_URL: string;
        NEXT_PUBLIC_MOBILE_NO: string;
        NEXT_PUBLIC_HOME: string;

        VERCEL_TOKEN: string;
        VERCEL_PROJECT_ID: string;
        VERCEL_ORG_ID: string;
    }
}
