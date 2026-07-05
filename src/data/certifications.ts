// "Certifications" carousel on the About page.
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
    title: 'Placeholder Certification One',
    issuer: 'Issuing Organisation',
    description: 'Lorem ipsum — a short line about what this certification covers.',
  },
  {
    title: 'Placeholder Certification Two',
    issuer: 'Issuing Organisation',
    description: 'Lorem ipsum — a short line about what this certification covers.',
  },
  {
    title: 'Placeholder Certification Three',
    issuer: 'Issuing Organisation',
    description: 'Lorem ipsum — a short line about what this certification covers.',
  },
  {
    title: 'Placeholder Certification Four',
    issuer: 'Issuing Organisation',
    description: 'Lorem ipsum — a short line about what this certification covers.',
  },
  {
    title: 'Placeholder Certification Five',
    issuer: 'Issuing Organisation',
    description: 'Lorem ipsum — a short line about what this certification covers.',
  },
];
