// ============================================================
// SITE CONTENT — edit this file to update the basics.
// Content is drawn from Chithmi's academic CV (public/resume.pdf).
// ============================================================

export type Social = {
  label: string;
  href: string;
  icon: 'linkedin' | 'scholar' | 'researchgate' | 'orcid' | 'email';
};

export const site = {
  // Shown in the browser tab and header logo.
  name: 'Chithmi Tharika Peiris',
  shortName: 'Chithmi Peiris',
  initials: 'CP',

  // A one-line role/subtitle.
  role: 'MPhil Researcher in Microbiology · BSc (Hons) Plant Biotechnology, First Class',

  // Homepage hero intro paragraph.
  intro:
    'I chase colour where you would least expect it — in bacteria clinging to seaweed and ' +
    'fungi that could one day retire synthetic dyes. A First Class Honours graduate in Plant ' +
    'Biotechnology from the University of Colombo, I am now an MPhil researcher in Microbiology ' +
    'at the University of Sri Jayewardenepura, working where microbial secondary metabolites, ' +
    'natural pigments and marine biotechnology meet. I particularly focus on microbial ' +
    'biotechnology, natural product discovery and bioprocess development, with a passion for ' +
    'translating bioactive compounds from microorganisms into sustainable solutions for ' +
    'biotechnology and industrial applications.',

  // A short, personal tagline shown above the "About Me" narrative.
  aboutTagline: 'Inspired by nature. Driven by discovery.',

  // "About Me" narrative on the About page — one entry per paragraph.
  about: [
    'The wonder in my eyes whenever I immersed myself in nature as a child has always ' +
      'encouraged me to explore it through a scientific lens. Today, that same curiosity ' +
      'drives me to discover the hidden marvels of the natural world.',
    'My journey began at the University of Colombo, Sri Lanka, where I completed my BSc ' +
      '(Hons) in Plant Biotechnology with First Class Honours in 2024. After graduation, I ' +
      'joined my university as a Graduate Teaching Assistant, where I had the privilege of ' +
      'guiding and inspiring many young science students. I truly enjoyed teaching and ' +
      'sharing knowledge; however, a deep part of my heart still belonged to research and ' +
      'scientific exploration.',
    'Driven by this passion, I joined the University of Sri Jayewardenepura, Sri Lanka in ' +
      '2025, to begin my postgraduate journey through an MPhil in Microbiology (Research). ' +
      'Working as a Graduate Research Assistant under university grants has enriched me with ' +
      'valuable hands-on research experiences, opportunities to present my work at ' +
      'conferences, and contributions to scientific publications.',
    'As I approach the completion of this chapter, I carry a deep desire to expand my ' +
      'research journey beyond this point. I believe pursuing a PhD will strengthen my ' +
      'vision, broaden my scientific capabilities, and allow me to contribute further to the ' +
      'field of biotechnology.',
  ],

  // Signature shown at the end of the "About Me" narrative.
  aboutSignature: 'Chithmi Tharika Peiris',

  // Research interests — rendered as tags on the homepage and About page.
  researchInterests: [
    'Microbial Secondary Metabolites',
    'Natural Pigments',
    'Marine Microbiology',
    'Industrial Biotechnology',
    'Metabolic Engineering',
    'Natural Product Discovery',
    'Sustainable Biomaterials',
  ],

  // Path (in /public) to the résumé PDF. Replace public/resume.pdf with the real file.
  resume: 'resume.pdf',

  // Optional images. Leave as '' to show a clean placeholder/tint instead.
  // To use a real image, drop the file in public/images/ and set the path here,
  // e.g. hero: '/images/hero.jpg'
  images: {
    hero: '/images/hero-portrait.png', // blended portrait image shown beside the name on the homepage
    portrait: '/images/aboutme-image.png', // portrait shown in the "About Me" section
  },

  // "Find me on:" links.
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chithmipeiris',
      icon: 'linkedin',
    },
    {
      label: 'ORCID',
      href: 'https://orcid.org/0009-0003-4160-4409',
      icon: 'orcid',
    },
    {
      label: 'Email',
      href: 'mailto:chithmitharika99@gmail.com',
      icon: 'email',
    },
  ] satisfies Social[],

  // Footer copyright holder (the year is added automatically in the footer).
  copyrightHolder: 'Chithmi Tharika Peiris',
};

// Primary navigation. Order matches the wireframes.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Publications', href: '/publications' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];
