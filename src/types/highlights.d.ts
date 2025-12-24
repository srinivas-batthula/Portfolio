// types/highlights.d.ts

export interface contributionsInterface {
    repo: string;
    description: string;
    owner: string;
    date: string;
    link: string;
}

export interface hackathonsInterface {
    date: string;
    title: string;
    host: string;
    location: string;
    description: string;
    icon: string;
    winner: boolean;
    link?: string;
}
