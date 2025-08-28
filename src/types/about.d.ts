// types/about.ts

export interface Certification {
  img: string;
  link1: string;
  tags: string[];
};

export interface SkillOrToolItem {
  name: string;
  icon: string;
  type: string[];
};

export interface Hobby {
  emoji: string; 
  description: string;
}
