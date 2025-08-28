// This file is used when TailwindCSS's '*.module.css' files are used...

declare module '*.module.css';
declare module '*.module.scss';
declare module '*.svg' {
    const content: string;
    export default content;
}
