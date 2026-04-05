import type { Skill, Project } from './types'

export const skills: Skill[] = [
  { name: 'Vue.js (Vue 2 & Vue 3)', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Responsive Web Design', level: 95 },
  { name: 'Vue Router', level: 90 },
  { name: 'Pinia', level: 85 },
  { name: 'Element UI / Element Plus', level: 85 },
  { name: 'Axios', level: 90 },
  { name: 'Component-Based Architecture', level: 95 },
  { name: 'REST API Integration', level: 90 },
  { name: 'Git / GitLab', level: 90 },
  { name: 'VS Code', level: 100 },
  { name: 'Figma', level: 85 }
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'GameZone Platform',
    description: 'Contributed to a large-scale gaming platform. Developed H5 applications using Vue.js and Tailwind. Built SEO-optimized pages. Integrated REST APIs.',
    tech: ['Vue.js', 'Tailwind', 'REST APIs'],
    link: '',
    github: ''
  },
  {
    id: 2,
    title: 'GTCC (GameZone Tournament System)',
    description: 'Developed event landing pages and internal tools. Built H5 landing pages for Seasons 1–3. Created CMS-connected block management system.',
    tech: ['Vue.js', 'CMS', 'Tailwind'],
    link: '',
    github: ''
  },
  {
    id: 3,
    title: 'BingoMini',
    description: 'Developed interactive frontend for online bingo platform. Designed responsive UI for gameplay. Built interactive components.',
    tech: ['Vue.js', 'Responsive UI'],
    link: '',
    github: ''
  },
  {
    id: 4,
    title: 'VIP Management System (OMS)',
    description: 'Developed internal system for customer service teams. Built UI for managing VIP users. Integrated backend APIs.',
    tech: ['Vue.js', 'Backend APIs'],
    link: '',
    github: ''
  },
  {
    id: 5,
    title: 'NCIP Web System',
    description: 'Led government-related web system. Designed UI/UX in Figma. Developed frontend using React + Tailwind.',
    tech: ['React', 'Tailwind', 'Laravel'],
    link: '',
    github: ''
  }
]
