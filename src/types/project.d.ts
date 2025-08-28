// types/project.ts

export interface Project {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  techStack: string[];
  keyFeatures: string[];
  isLiveLink: boolean;  // <-- convert from string "true"/"false" to proper boolean
  githubLink: string;
  liveLink?: string; // optional (not every project may have one)
}
