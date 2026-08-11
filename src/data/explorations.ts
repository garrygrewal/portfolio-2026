export type ExplorationSize = 'wide' | 'large' | 'medium' | 'small' | 'portrait';

export interface ExplorationProject {
  title: string;
  slug: string;
  description: string;
  platform: string;
  roles: string;
  size: ExplorationSize;
  accent: string;
  heroImageSrc?: string;
  heroVideo?: { webm?: string; mp4?: string };
  heroImageAlt: string;
  body?: string[];
  caption?: string;
  static?: boolean;
}

export const explorationProjects: ExplorationProject[] = [
  {
    title: ‘Click Here to Get Candy’,
    slug: ‘click-here-to-get-candy’,
    description: ‘An interactive art installation that highlights the potential dangers of artificial intelligence’,
    platform: ‘Art Installation’,
    roles: ‘Interaction Designer’,
    size: ‘large’,
    accent: ‘#c8422a’,
    heroImageSrc: ‘/images/explorations/candy-machine.webp’,
    heroImageAlt: ‘Painted concept sketch of the candy dispenser shown from the front, side, and three-quarter angles.’
  },
  {
    title: ‘Alvar Aalto Week’,
    slug: ‘alvar-aalto-week’,
    description: ‘Poster design for the Alvar Aalto Week 2021.’,
    platform: ‘Print’,
    roles: ‘Graphic Design’,
    size: ‘portrait’,
    accent: ‘#e42320’,
    heroImageSrc: ‘/images/explorations/alvar-aalto-week.webp’,
    heroImageAlt: ‘Red and white typographic poster for Alvar Aalto Week 2021 in Kouvola, Finland, with halftone architectural imagery.’,
    static: true
  },
  {
    title: ‘Patagonia: Worn Wear’,
    slug: ‘patagonia-worn-wear’,
    description: ‘A digital experience that surfaces Patagonia’s second-hand Worn Wear program inside the main shopping flow.’,
    platform: ‘Web’,
    roles: ‘Research, Interaction, Content’,
    size: ‘wide’,
    accent: ‘#c9a227’,
    heroVideo: { mp4: ‘/videos/explorations/patagonia-home-banner.mp4’ },
    heroImageAlt: ‘Animated Patagonia Worn Wear concept showing second-hand gear presented alongside new products.’
  },
  {
    title: ‘YouMe’,
    slug: ‘youme’,
    description: ‘An inclusive sexual education app for LGBTQ+ youth’,
    platform: ‘Mobile’,
    roles: ‘Interaction Design, User Research’,
    size: ‘wide’,
    accent: ‘#b49af2’,
    heroVideo: { webm: ‘/videos/explorations/youme-home-banner.webm’, mp4: ‘/videos/explorations/youme-home-banner.mp4’ },
    heroImageAlt: ‘Animated purple mascot character walking in front of a green chalkboard listing sex education topics.’
  },
  {
    title: ‘Senses & Sensors’,
    slug: ‘senses-sensors’,
    description: ‘Poster design for the STRP Biënnale 2017.’,
    platform: ‘Print’,
    roles: ‘Graphic Design’,
    size: ‘portrait’,
    accent: ‘#a8b527’,
    heroImageSrc: ‘/images/explorations/senses-sensors.webp’,
    heroImageAlt: ‘Colorful pixel-art poster for the STRP Biënnale 2017 Senses and Sensors exhibition in Eindhoven.’,
    static: true
  },
  {
    title: ‘Airduino Hockey’,
    slug: ‘airduino-hockey’,
    description: ‘An air hockey table powered by Arduino.’,
    platform: ‘Air Hockey Table’,
    roles: ‘Programmer’,
    size: ‘large’,
    accent: ‘#c8422a’,
    heroImageSrc: ‘/images/explorations/airduino-hockey.webp’,
    heroImageAlt: ‘Airduino Hockey game screen showing a rink, a centre-ice logo, and two player scoreboards set to zero.’,
    body: [
      ‘Airduino Hockey is a two-player game built around physical controls: the rink, the scoreboards, and the puck all live on screen, but the input comes from an Arduino rig rather than a keyboard.’,
      ‘Most of the work went into the feel of the thing: reading sensor input cleanly enough that a fast rally still feels fair, and keeping the interface legible from across a table.’
    ],
    caption: ‘The main game screen, with both scoreboards reset and the centre-ice mark in play.’
  },
  {
    title: ‘STRP Festival 2019’,
    slug: ‘strp-festival-2019’,
    description: ‘Poster design for the STRP Festival 2019.’,
    platform: ‘Print’,
    roles: ‘Graphic Design’,
    size: ‘portrait’,
    accent: ‘#47b89d’,
    heroImageSrc: ‘/images/explorations/strp-festival-2019.webp’,
    heroImageAlt: ‘Teal and purple poster for STRP Festival 2019 with isometric 3D typography and scanline texture.’,
    static: true
  }
];
