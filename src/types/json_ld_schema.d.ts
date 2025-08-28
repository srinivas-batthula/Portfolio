// types/json_ld_schema.ts

export interface PostalAddress {
  "@type": "PostalAddress";
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

export interface Organization {
  "@type": string;
  name: string;
  sameAs?: string;
}

export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  alternateName?: string;
  jobTitle?: string;
  description?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
  affiliation?: Organization;
  worksFor?: Organization;
  workLocation?: {
    "@type": "Place";
    name: string;
    address: PostalAddress;
  };
  knowsAbout?: string[];
}
