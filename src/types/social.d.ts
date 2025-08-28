// types/social.ts

export interface SocialLink {
    name: string;
    href: string;
    title: string;
    className: string;
    icon: JSX.Element; // React SVG element
}
