import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Section from '@/components/Section';
import SafeLink from '@/components/SafeLink';
import { Frame, Sigil, Sparkle, type SigilKind } from '@/components/Ornaments';

export const metadata = pageMetadata({ title: 'About', description: 'The lore of Tejjus Bhat: background, skill tree and education, including an MSc in Data Science & AI with Distinction from Newcastle University.', path: '/about' });

const EDUCATION = [
  {
    degree: 'MSc Data Science & Artificial Intelligence',
    institution: 'Newcastle University, UK',
    period: 'Sep 2025 – Sep 2026',
    grade: '71% (Distinction)',
    modules: ['Machine Learning', 'Deep Learning', 'Text Analytics', 'Computer Vision', 'Advanced Data Analytics', 'Research Methods', 'Data Ethics', 'Data Management'],
    highlights: [
      '92% accuracy bird species classifier using ResNet-50 transfer learning',
      'House price prediction project in partnership with Atom Bank',
    ],
  },
  {
    degree: 'BTech Computer Science (Data Science)',
    institution: 'ABES Engineering College, AKTU, India',
    period: 'Aug 2021 – Jul 2025',
    grade: '70.8% (First Distinction)',
    modules: ['Data Structures & Algorithms', 'Database Systems', 'Data Mining', 'Statistical Computing', 'Pattern Recognition', 'Machine Learning'],
    highlights: [
      '2 peer-reviewed research papers published (IEEE & Grenze Journal)',
      'Patent filed for the inQuery application management system',
    ],
  },
];

const SKILLS: { group: string; sigil: SigilKind; tags: string[] }[] = [
  { group: 'Languages',          sigil: 'scroll', tags: ['Python', 'SQL', 'R', 'JavaScript'] },
  { group: 'ML / NLP',           sigil: 'ml',     tags: ['Machine Learning', 'Deep Learning', 'XGBoost', 'NLP', 'Sentiment Analysis', 'Computer Vision'] },
  { group: 'Generative AI',      sigil: 'llm',    tags: ['RAG Pipelines', 'LangChain', 'Prompt Engineering', 'LLM Fine-Tuning', 'OpenAI', 'Groq'] },
  { group: 'Full-Stack',         sigil: 'api',    tags: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'React', 'Next.js'] },
  { group: 'Data & Cloud',       sigil: 'eda',    tags: ['Power BI', 'SQL Database Administration', 'Azure DevOps Services', 'Google Cloud', 'Docker', 'Git'] },
  { group: 'Research & Strategy',sigil: 'relic',  tags: ['Market Research', 'Startups', 'Web Scraping', 'Stakeholder Presentations'] },
];

export default function AboutPage() {
  return (
    <>
      <Section title="Lore" kicker="About">
        <div className="about-grid">
          <div className="prose">
            <p>
              <span className="dropcap">P</span>art engineer, part data alchemist, I spend my days interrogating
              messy datasets until they confess their secrets, and teaching machines new tricks. By day I&apos;m a Research &amp; Development Engineer at Kinewell, questing
              in offshore wind energy, and by night I build full-stack AI software for the fun of it.
            </p>
            <p>
              Before that I was a Data Analyst Intern at Newcastle University, rebuilding Power BI dashboards and
              analysing occupancy data with SQL and Python. I also did market research for the Higher Education
              sector at Newcastle University Business School. At Kare AI I built RAG and web-scraping pipelines
              that helped the product grow across 5 countries and 3,000+ zip codes, and at DRDO / INMAS I worked
              on VR-driven training scenarios using eye tracking.
            </p>
            <p>
              I hold an MSc in Data Science and AI from Newcastle University, and I&apos;ve published two papers and
              filed a patent along the way.
            </p>

            <div className="btn-row" style={{marginTop:32}}>
              <Link className="btn btn-primary" href="/contact">Send a Raven</Link>
              <Link className="btn" href="/projects">Quest Log</Link>
              <Link className="btn" href="/research">Grimoire</Link>
            </div>
          </div>

          <Frame as="aside" className="char-card">
            <div className="portrait">
              <Image src="/tejjus.jpg" alt="Tejjus Bhat" width={600} height={720} />
            </div>
            <dl className="meta-rows">
              <div><dt>Guild</dt><dd>Kinewell</dd></div>
              <div><dt>Realm</dt><dd>Newcastle, UK</dd></div>
              <div><dt>Academy</dt><dd>MSc Data Science & AI</dd></div>
              <div><dt>Arsenal</dt><dd>Python, SQL, ML, LLMs</dd></div>
            </dl>
            <div className="btn-row" style={{justifyContent:'center', marginTop:18}}>
              <SafeLink href="https://drive.google.com/file/d/1jFPUKQqGeqHnNjqmmhZu1CcPKUAkYIem/view?usp=drive_link">
                <span className="btn btn-sm">View CV</span>
              </SafeLink>
            </div>
          </Frame>
        </div>
      </Section>

      <Section title="Skill Tree" kicker="Technical skills">
        <div className="skill-tree">
          {SKILLS.map(s => (
            <Frame className="skill-branch" key={s.group}>
              <div className="skill-branch-head">
                <Sigil kind={s.sigil} size={30} />
                <h3>{s.group}</h3>
              </div>
              <ul className="skill-nodes">
                {s.tags.map(t => <li key={t}>{t}</li>)}
              </ul>
            </Frame>
          ))}
        </div>
      </Section>

      <Section title="Academies" kicker="Education">
        <div className="grid grid-2">
          {EDUCATION.map(e => (
            <Frame key={e.degree}>
              <h3 className="tome-title" style={{marginBottom:4}}>{e.degree}</h3>
              <p className="tl-org" style={{margin:0}}>{e.institution}</p>
              <div className="edu-meta">
                <span>{e.period}</span>
                <span>{e.grade}</span>
              </div>
              <p className="edu-sub">Modules studied</p>
              <div className="runes">
                {e.modules.map(m => <span key={m} className="rune">{m}</span>)}
              </div>
              <p className="edu-sub">Feats</p>
              <ul className="feat-list">
                {e.highlights.map((h, i) => <li key={i}><Sparkle size={11} className="feat-star" />{h}</li>)}
              </ul>
            </Frame>
          ))}
        </div>
      </Section>
    </>
  );
}
