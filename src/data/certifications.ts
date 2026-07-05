// "Certifications" carousel on the About page.
//
// NOTE: Chithmi's CV summarises these as professional development courses in
// "genomics, bioinformatics, scientific computing, sustainability, and leadership,
// completed through internationally recognised institutions including Wellcome
// Connecting Science, RMIT University, and Deakin University." The exact
// course→institution pairings below are best-effort groupings — please verify /
// adjust the `issuer` and `title` of each card against the actual certificates,
// and add a `link` to each credential where available.
export type Certification = {
  title: string;
  issuer: string;
  description: string;
  // Path (relative to /public) to a logo/badge image; omit for a placeholder.
  image?: string;
  // Optional link to the credential.
  link?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Genomics',
    issuer: 'Wellcome Connecting Science',
    description:
      'Professional development in genomics and genomic technologies through a globally ' +
      'recognised training programme.',
  },
  {
    title: 'Bioinformatics',
    issuer: 'Wellcome Connecting Science',
    description:
      'Applied bioinformatics — sequence analysis and computational approaches for ' +
      'biological data.',
  },
  {
    title: 'Scientific Computing',
    issuer: 'RMIT University',
    description:
      'Computational skills and scientific computing methods for research in the life ' +
      'sciences.',
  },
  {
    title: 'Sustainability',
    issuer: 'Deakin University',
    description:
      'Foundations of sustainability and its role in science, industry and the ' +
      'bioeconomy.',
  },
  {
    title: 'Leadership & Professional Skills',
    issuer: 'Deakin University',
    description:
      'Leadership, communication and professional development for early-career researchers.',
  },
];
