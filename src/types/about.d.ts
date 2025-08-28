// types/about.ts

export interface Certification {
    img: string;
    link1: string;
    tags: string[];
}

// All Icons are added from `https://icon-sets.iconify.design/`...
export interface SkillOrToolItem {
    name: string;
    icon: JSX.Element; // Inline SVG
    type: string[];
}
