import { Project, Experience } from './types';

import carcasThumbnail from './images/carcas.png';
import weblingoThumbnail from './images/weblingothumb.png';

export const worksData: Project[] = [
  {
    id: 1,
    title: 'Carcas',
    year: ' 2025',
    description: 'A standalone app to host Carleton archaeology lab 3D specimen collection',
    imageUrl: carcasThumbnail,
  },
  {
    id: 2,
    title: 'WebLinguo',
    year: ' 2025',
    description: 'Your language learning companion. Learn languages while browsing.',
    imageUrl: weblingoThumbnail,
  },
];

export const designData: Project[] = [
  {
    id: 1,
    title: 'Fluid Simulation',
    year: 'SwiftUI',
    description: '',
    imageUrl: 'https://i.imgur.com/8Qe4z1b.png',
  },
  
];

export const experienceData: Experience[] = [
    {
        id: 1,
        year: '2024 - 2025',
        title: 'Digital Humanities Associate',
        description: 'Research assistant @ Carleton digital humanities center, consulting on design, data entry and development for faclty and student projects .'
    },
    {
        id: 2,
        year: '2025-2026',
        title: 'Research Assistant, Symbulation Digital Evolution Lab ',
        description: 'Conducting experiments using co-evolutionary computer programs to determine the impact of symbiosis on host evolutionary trajectory.'
    }
];

export const educationData: Experience[] = [
    {
        id: 1,
        year: '2025-2027',
        title: 'University of Michigan',
        description: 'B.S. in Data Science & Cognitive Science, Minor in UX Design',
    },
    {
        id: 2,
        year: '2023-2025',
        title: 'Carleton College',
        description: '',
    },
];

export const contactLinks = [
    { name: 'Email', url: 'mailto:zruoyu@umich.edu' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ruoyu-zhang-019367299/' },
];