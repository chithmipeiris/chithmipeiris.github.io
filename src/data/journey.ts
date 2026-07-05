// "The Journey" timeline entries on the About page.
// Add / edit / reorder freely — the page alternates them left/right automatically.
export type JourneyEntry = {
  title: string;
  period: string;
  description: string;
};

export const journey: JourneyEntry[] = [
  {
    title: 'Placeholder — Current Research Position',
    period: '2025 – Present',
    description:
      'Lorem ipsum placeholder. Describe the current role, lab, or research focus here — ' +
      'what she is working on and the techniques involved.',
  },
  {
    title: 'Placeholder — Research Assistantship',
    period: '2024 – 2025',
    description:
      'Lorem ipsum placeholder. A short description of a previous research role, ' +
      'the project, and the outcomes or skills gained.',
  },
  {
    title: 'Placeholder — Undergraduate Degree',
    period: '2020 – 2024',
    description:
      'Lorem ipsum placeholder. Degree, institution, thesis topic, and any honours ' +
      'or notable achievements during the programme.',
  },
  {
    title: 'Placeholder — Internship / Fieldwork',
    period: '2022',
    description:
      'Lorem ipsum placeholder. A formative internship, field expedition, or lab ' +
      'placement worth highlighting on the timeline.',
  },
  {
    title: 'Placeholder — Early Milestone',
    period: '2020',
    description:
      'Lorem ipsum placeholder. The starting point of the academic journey — ' +
      'an award, a first publication, or the spark that started it all.',
  },
];
