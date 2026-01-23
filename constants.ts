import { Project, Experience } from './types';

export const worksData: Project[] = [
  {
    id: 1,
    title: 'Lens Multisearch',
    year: '2020 - 2025',
    description: 'Created, iterated the first-ever multimodal search that combines visual and text.',
    imageUrl: 'https://i.imgur.com/8G1pkwK.png',
  },
  {
    id: 2,
    title: 'Lens Result Framework',
    year: '2020 - 2025',
    description: 'Leading the design team for a result system that fulfills diverse user needs.',
    imageUrl: 'https://i.imgur.com/K3wYp5G.png',
  },
  {
    id: 3,
    title: 'Photo First Search',
    year: '2018',
    description: 'Designed a experimental product focused on Tokyo, Japan',
    imageUrl: 'https://i.imgur.com/0Y7zV8Z.png',
  },
  {
    id: 4,
    title: 'Google App Framework',
    year: '2017-2020',
    description: 'Created and managed UI Framework for iOS Google App.',
    imageUrl: 'https://i.imgur.com/V9WLZoM.png',
  },
];

export const designData: Project[] = [
  {
    id: 1,
    title: 'Fluid Simulation',
    year: 'SwiftUI',
    description: '',
    imageUrl: 'https://i.imgur.com/8Qe4z1b.png',
    isVideo: true,
  },
  {
    id: 2,
    title: 'Interactive UI',
    year: 'SwiftUI',
    description: '',
    imageUrl: 'https://i.imgur.com/R3BOJj8.png',
    isVideo: true,
  },
  {
    id: 3,
    title: 'Model Selection UI',
    year: 'SwiftUI',
    description: '',
    imageUrl: 'https://i.imgur.com/oW6dC2w.png',
    isVideo: true,
  },
  {
    id: 4,
    title: 'Haptic Feedback Knob',
    year: 'SwiftUI',
    description: '',
    imageUrl: 'https://i.imgur.com/9nF7D8z.png',
    isVideo: true,
  },
];

export const experienceData: Experience[] = [
    {
        id: 1,
        year: '2024 - 2025',
        title: 'Digital Humanities Associate',
        institution: 'Digital Humanities Center @Carleton College',
        description: 'Research assistant for digital humanities projects, consulting on design, data entry, development, and deployment. .'
    },
    {
        id: 2,
        year: '2025',
        title: 'Symbulation Digital Evolution Lab',
        institution: 'CS Department @Carleton College',
        description: 'Conducting experiments using co-evolutionary computer programs to determine the impact of symbiosis on host evolutionary trajectory. Supervisor: Dr. Anya Vostinar.'
    }
];

export const educationData: Experience[] = [
    {
        id: 1,
        year: 'Expected May 2027',
        title: 'University of Michigan',
        description: 'B.S. in Data Science and Cognitive Science, Minor in UX Design'
    }
];

export const contactLinks = [
    { name: 'Email', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
];
