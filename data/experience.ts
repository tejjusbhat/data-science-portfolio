import type { SigilKind } from '@/components/Ornaments';

export type Experience = {
  role: string;
  org: string;
  location?: string;
  period: string;
  current?: boolean;
  /** Condensed labels for the home page level banners */
  short: { role: string; org: string; period: string };
  /** Skill shown as "Unlocked" on banners and quest cards */
  unlock: string;
  sigil: SigilKind;
  bullets: string[];
};

// Newest first, as listed on LinkedIn
export const experience: Experience[] = [
  {
    role: 'Research & Development Engineer',
    short: { role: 'R&D Engineer', org: 'Kinewell · Offshore Wind', period: 'Oct 2026 – Present' },
    unlock: 'Offshore Wind R&D',
    sigil: 'relic',
    org: 'Kinewell · Offshore Wind Energy',
    location: 'Newcastle upon Tyne, UK',
    period: 'Oct 2026 – Present',
    current: true,
    bullets: [],
  },
  {
    role: 'Data Analyst Intern',
    short: { role: 'Data Analyst Intern', org: 'Newcastle University', period: 'Jan – Jul 2026' },
    unlock: 'Power BI & SQL Analytics',
    sigil: 'eda',
    org: 'Philip Robinson Library, Newcastle University',
    location: 'Newcastle upon Tyne, UK',
    period: 'Jan 2026 – Jul 2026',
    bullets: [
      'Redesigned and optimised the occupancy dashboard in Power BI, enhancing clarity and usability.',
      'Analysed occupancy and usage data using SQL and Python to uncover patterns for informed decision-making.',
      'Presented analytical findings to technical and non-technical managers in bi-monthly meetings.',
    ],
  },
  {
    role: 'Market Research Intern',
    short: { role: 'Market Research Intern', org: 'Newcastle University Business School', period: 'Jan – Mar 2026' },
    unlock: 'Market Research',
    sigil: 'scroll',
    org: 'Newcastle University Business School',
    location: 'Newcastle upon Tyne, UK',
    period: 'Jan 2026 – Mar 2026',
    bullets: [
      'Conducted primary and secondary market research to identify opportunities in the Higher Education sector.',
      'Applied evidence-based reasoning to validate market assumptions and mitigate strategic risks.',
      'Collaborated with academic and industry professionals to strengthen research methodologies and insights.',
    ],
  },
  {
    role: 'Research Intern',
    short: { role: 'Research Intern', org: 'INMAS, DRDO', period: 'Jul – Sep 2024' },
    unlock: 'VR & Eye Tracking',
    sigil: 'cv',
    org: 'INMAS, Defence Research and Development Organisation (DRDO)',
    location: 'Delhi, India',
    period: 'Jul 2024 – Sep 2024',
    bullets: [
      'Worked on VR-driven CBRNe drone training scenarios using eye tracking.',
    ],
  },
  {
    role: 'Associate Research Intern',
    short: { role: 'Associate Research Intern', org: 'Kare AI', period: 'Feb – Jun 2024' },
    unlock: 'RAG Pipelines',
    sigil: 'llm',
    org: 'Kare AI',
    period: 'Feb 2024 – Jun 2024',
    bullets: [
      'Implemented web scraping with Beautiful Soup and the Google SERP API to gather data from 100+ sources with automatic citation.',
      'Developed a RAG pipeline with LangChain for market research, significantly reducing research time.',
      'Assisted in backend development for model serving, improving user access to the research pipeline.',
      'Enhanced AI features and data visualisation, contributing to adoption across 5 countries and 3,000+ zip codes and helping secure 2 major clients.',
    ],
  },
];
