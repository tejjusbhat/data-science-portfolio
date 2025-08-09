export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  links?: { repo?: string; demo?: string; paper?: string };
};

export const projects: Project[] = [
  {
    slug: 'ai-grid-captcha',
    title: 'AI Grid Captcha Solver',
    summary: 'YOLO + OpenCV pipeline with optimized OCR achieving ~95.5% accuracy and sub-2s responses with FastAPI.',
    stack: ['Python','YOLO','OpenCV','FastAPI'],
    links: { repo: 'https://github.com/tejjusbhat/captcha_solver' }
  },
  {
    slug: 'stock-market-assistant',
    title: 'Stock Market Assistant',
    summary: 'LLM-augmented analysis of news + historical trends; exposed as an API for quick evaluations.',
    stack: ['Python','FastAPI','LLM','BeautifulSoup'],
    links: { repo: 'https://github.com/tejjusbhat/stock_invest_assistant' }
  },

  // --- Template to copy ---
  // {
  //   slug: 'short-hyphenated-slug',
  //   title: 'Project Title',
  //   summary: '1–2 sentences on the problem, your approach, and the outcome/metric.',
  //   stack: ['Python','SQL','XGBoost'],
  //   links: { repo: 'https://github.com/...', demo: 'https://...', paper: 'https://...' }
  // },
];
