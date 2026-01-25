export enum Page {
  Works = 'Works',
  Design = 'Design',
  About = 'About',
  WorkDetail = 'WorkDetail',
}

export interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  isVideo?: boolean;
}

export interface Experience {
  id: number;
  year: string;
  title: string;
  description: string;
  institution?: string;
}

export interface Award {
    id: number;
    year: string;
    title: string;
    description: string;
}
