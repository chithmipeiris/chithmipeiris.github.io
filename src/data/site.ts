// ============================================================
// SITE CONTENT — edit this file to update the basics.
// Everything here is placeholder text/links; replace the
// values marked REPLACE_ME with real content.
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
  role: 'Research Student — Plant Science, Marine Biology & Biotechnology',

  // Homepage hero intro paragraph. (Placeholder — replace with a real bio.)
  intro:
    'I am a research student exploring the chemistry of life at the intersection of ' +
    'marine microbiology, plant science and biotechnology. My work focuses on discovering ' +
    'and engineering natural products — from microbial pigments to sustainable biomaterials — ' +
    'and I am preparing to pursue a PhD in this field. This is placeholder text; replace it ' +
    'with a short, personal introduction.',

  // Longer "About Me" paragraph on the About page. (Placeholder.)
  about:
    'Lorem ipsum placeholder. Write two or three sentences here about who Chithmi is, her ' +
    'academic background, the questions that drive her research, and what she is looking for ' +
    'next. This copy appears in the “About Me” section and should read in her own voice. ' +
    'Keep it warm, specific, and focused on her scientific curiosity.',

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
    portrait: '', // portrait shown in the "About Me" section
  },

  // "Find me on:" links. Fill in the real profile URLs / email.
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/REPLACE_ME',
      icon: 'linkedin',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=REPLACE_ME',
      icon: 'scholar',
    },
    {
      label: 'Email',
      href: 'mailto:REPLACE_ME@example.com',
      icon: 'email',
    },
    // Optional extras — uncomment and fill in if she has them:
    // { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/REPLACE_ME', icon: 'researchgate' },
    // { label: 'ORCID', href: 'https://orcid.org/REPLACE_ME', icon: 'orcid' },
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
