export type ExplorationSize = 'large' | 'medium' | 'small';

export interface ExplorationProject {
  title: string;
  slug: string;
  description: string;
  year: string;
  medium: string;
  status: string;
  size: ExplorationSize;
  accent: string;
  heroImageSrc: string;
  heroImageAlt: string;
  body: string[];
  caption: string;
}

export const explorationProjects: ExplorationProject[] = [
  {
    title: 'Receipt Garden',
    slug: 'receipt-garden',
    description: 'A tiny tool for turning everyday purchases into personal spending patterns.',
    year: '2026',
    medium: 'Web prototype',
    status: 'Half-baked',
    size: 'large',
    accent: '#86d8c7',
    heroImageSrc: '/placeholders/wide-1.svg',
    heroImageAlt: 'Wide gray placeholder image.',
    body: [
      'Receipt Garden started as a sketch for making personal spending feel less like a spreadsheet and more like a living archive.',
      'The prototype explores lightweight categorization, soft visual summaries, and a calmer way to notice habits without turning the experience into a finance dashboard.'
    ],
    caption: 'Placeholder visual for the receipt clustering concept.'
  },
  {
    title: 'Moodboard Radio',
    slug: 'moodboard-radio',
    description: 'A browser experiment that pairs visual references with loose audio moods.',
    year: '2025',
    medium: 'Interaction study',
    status: 'In progress',
    size: 'medium',
    accent: '#f0b56b',
    heroImageSrc: '/placeholders/square-1.svg',
    heroImageAlt: 'Square gray placeholder image.',
    body: [
      'Moodboard Radio is a small experiment in using sound as part of visual research.',
      'The idea is to let a moodboard carry tempo, texture, and energy alongside images so early design directions feel easier to compare.'
    ],
    caption: 'Placeholder visual for a mixed media moodboard interface.'
  },
  {
    title: 'Calendar Confetti',
    slug: 'calendar-confetti',
    description: 'A scheduling concept that celebrates small planning wins without getting noisy.',
    year: '2025',
    medium: 'Motion sketch',
    status: 'Sketch',
    size: 'small',
    accent: '#d9ca7a',
    heroImageSrc: '/placeholders/tall-1.svg',
    heroImageAlt: 'Tall gray placeholder image.',
    body: [
      'Calendar Confetti asks what it would feel like if planning tools acknowledged progress in a quieter way.',
      'The prototype focuses on restraint: small moments of feedback, clear scheduling states, and motion that stays out of the way.'
    ],
    caption: 'Placeholder visual for a restrained scheduling celebration.'
  },
  {
    title: 'Pocket Wayfinder',
    slug: 'pocket-wayfinder',
    description: 'A mapless navigation idea for remembering places through cues and routines.',
    year: '2024',
    medium: 'Mobile concept',
    status: 'Dormant',
    size: 'medium',
    accent: '#8db7f0',
    heroImageSrc: '/placeholders/image-left.svg',
    heroImageAlt: 'Gray placeholder image.',
    body: [
      'Pocket Wayfinder came from thinking about navigation without constant map dependence.',
      'The placeholder flow explores landmarks, recurring routes, and lightweight prompts that help someone rebuild their sense of place.'
    ],
    caption: 'Placeholder visual for a mobile wayfinding concept.'
  },
  {
    title: 'Type Tester',
    slug: 'type-tester',
    description: 'A fast playground for comparing type choices in realistic product UI fragments.',
    year: '2024',
    medium: 'Design tool',
    status: 'Useful mess',
    size: 'small',
    accent: '#f08f8a',
    heroImageSrc: '/placeholders/image-small.svg',
    heroImageAlt: 'Small gray placeholder image.',
    body: [
      'Type Tester is a practical little workspace for judging type in context instead of in isolated specimen sheets.',
      'The experiment uses repeated UI fragments, density changes, and contrast checks to make type decisions feel less theoretical.'
    ],
    caption: 'Placeholder visual for contextual typography testing.'
  },
  {
    title: 'Signal Tiles',
    slug: 'signal-tiles',
    description: 'A modular dashboard study for showing weak signals before they become metrics.',
    year: '2023',
    medium: 'Dashboard study',
    status: 'Prototype',
    size: 'large',
    accent: '#a7d06d',
    heroImageSrc: '/placeholders/wide-2.svg',
    heroImageAlt: 'Wide gray placeholder image.',
    body: [
      'Signal Tiles explores how early patterns might surface before a team has enough data for confident reporting.',
      'The study mixes qualitative notes, small counts, and confidence states so the interface can show uncertainty honestly.'
    ],
    caption: 'Placeholder visual for modular signal tracking.'
  },
  {
    title: 'Checkout Sketches',
    slug: 'checkout-sketches',
    description: 'A set of small checkout experiments focused on trust, speed, and repair.',
    year: '2023',
    medium: 'UX patterns',
    status: 'Archived',
    size: 'medium',
    accent: '#b49af2',
    heroImageSrc: '/placeholders/image-right.svg',
    heroImageAlt: 'Gray placeholder image.',
    body: [
      'Checkout Sketches collects small ideas around moments where commerce flows tend to break down.',
      'The exploration looks at form repair, trust signals, and making payment states feel direct without becoming cold.'
    ],
    caption: 'Placeholder visual for checkout interaction patterns.'
  },
  {
    title: 'Studio Snack Bar',
    slug: 'studio-snack-bar',
    description: 'A playful inventory idea for boutique studios selling small add-ons.',
    year: '2022',
    medium: 'Product sketch',
    status: 'Paused',
    size: 'small',
    accent: '#f2d2a2',
    heroImageSrc: '/placeholders/image-full.svg',
    heroImageAlt: 'Full-width gray placeholder image.',
    body: [
      'Studio Snack Bar is a small retail sketch for classes, events, and front-desk add-ons.',
      'The concept explores lightweight inventory, staff-friendly checkout, and making small purchases feel native to a studio visit.'
    ],
    caption: 'Placeholder visual for a lightweight retail add-on flow.'
  },
  {
    title: 'Tiny Archive',
    slug: 'tiny-archive',
    description: 'A quiet index for saving loose references, notes, and unfinished ideas.',
    year: '2022',
    medium: 'Web sketch',
    status: 'Shelf project',
    size: 'medium',
    accent: '#d0d0d0',
    heroImageSrc: '/placeholders/hero-1.svg',
    heroImageAlt: 'Large gray placeholder image.',
    body: [
      'Tiny Archive is a small idea for keeping unfinished references useful without turning them into a heavy knowledge system.',
      'The sketch explores loose grouping, quick resurfacing, and a low-pressure way to keep fragments around until they become useful.'
    ],
    caption: 'Placeholder visual for a small reference archive.'
  }
];
