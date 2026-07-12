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

  // Longer "About Me" paragraph on the About page.
  about:
    'I am a microbiologist-in-training with a First Class Honours degree in Plant ' +
    'Biotechnology and an ongoing MPhil in Microbiology (Research). My work sits at the ' +
    'intersection of marine microbiology, natural product discovery and biotechnology — ' +
    'isolating and characterising pigment-producing microbes, optimising fermentation, and ' +
    'evaluating their bioactive potential through chromatographic and spectroscopic techniques. ' +
    'I am experienced in microbial isolation, fermentation optimisation, molecular ' +
    'characterisation, and analytical methods including TLC, UV-Vis, FTIR and NMR. Looking ' +
    'ahead, I hope to pursue PhD research that deepens this work and helps translate ' +
    'sustainable microbial products into real-world industrial and biomedical applications.',

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
    hero: '', // full-bleed background behind the name on the homepage
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
