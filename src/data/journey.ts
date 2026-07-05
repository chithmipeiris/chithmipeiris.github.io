// "The Journey" timeline entries on the About page.
// Drawn from Chithmi's CV — edit / reorder freely.
// The page alternates entries left/right automatically.
export type JourneyEntry = {
  title: string;
  period: string;
  description: string;
};

export const journey: JourneyEntry[] = [
  {
    title: 'MPhil in Microbiology (Research)',
    period: '2024 – Present',
    description:
      'University of Sri Jayewardenepura, Sri Lanka. Research-based MPhil focused on ' +
      'microbial secondary metabolites, natural pigments and marine biotechnology. ' +
      'Expected completion: December 2026.',
  },
  {
    title: 'Graduate Research Assistant',
    period: 'Jan 2025 – Present',
    description:
      'Department of Botany, University of Sri Jayewardenepura. Investigating marine ' +
      'pigmented bacteria associated with brown seaweeds for UV-blocking and antioxidant ' +
      'properties — isolation, fermentation optimisation, pigment analysis and 16S rRNA ' +
      'molecular characterisation.',
  },
  {
    title: 'Graduate Teaching Assistant',
    period: 'May 2024 – Jan 2025',
    description:
      'Department of Plant Sciences, University of Colombo. Conducted practical sessions ' +
      'for undergraduate and postgraduate courses including Applied Microbiology, Plant ' +
      'Pathology, and Experimental Design & Data Analysis.',
  },
  {
    title: 'BSc (Hons) in Plant Biotechnology — First Class',
    period: '2020 – 2024',
    description:
      'University of Colombo, Sri Lanka. Graduated with First Class Honours ' +
      '(GPA 3.73 / 4.00; Major GPA 4.00). Dean’s List across three consecutive academic ' +
      'years. Undergraduate research on pigments of fungal origin.',
  },
  {
    title: 'G.C.E. Advanced Level — Biological Science',
    period: '2018',
    description:
      'Taxila Central College, Horana, Sri Lanka. Biological Science stream ' +
      '(Chemistry, Biology, Physics), setting the foundation for a career in the life sciences.',
  },
];
