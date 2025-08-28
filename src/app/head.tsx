import { Schema } from "@/data";

export default function Head() {
    return (
        <>
            {/* ==== Preconnect / DNS Prefetch ==== */}
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
            <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

            {/* Font... */}
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />

            {/* SEO... */}
            <link rel="canonical" href="https://srinivas-batthula.vercel.app" />
            <link rel="sitemap" type="application/xml" href="https://srinivas-batthula.vercel.app/sitemap.xml" />

            {/* CDN's... */}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com"></script>

            {/* Structured Data (JSON-LD)... */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(Schema)
                }}
            ></script>
        </>
    );
};
