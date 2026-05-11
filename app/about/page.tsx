import Image from 'next/image';
import Section from '@/components/Section';
import SafeLink from '@/components/SafeLink';

export const metadata = { title: 'About' };

const EDUCATION = [
  {
    degree: 'MSc Data Science & Artificial Intelligence',
    institution: 'Newcastle University, UK',
    period: 'Sep 2025 – Sep 2026',
    grade: 'Expected: 78% (First Class)',
    modules: ['Machine Learning', 'Deep Learning', 'Text Analytics', 'Computer Vision', 'Advanced Data Analytics', 'Research Methods', 'Data Ethics', 'Data Management'],
    highlights: [
      '92% accuracy bird species classifier using ResNet-50 transfer learning',
      'House price prediction project in partnership with Atom Bank',
    ],
  },
  {
    degree: 'BTech Computer Science (Data Science)',
    institution: 'ABES Engineering College, AKTU, India',
    period: '2021 – 2025',
    grade: '70.8% (First Distinction)',
    modules: ['Data Structures & Algorithms', 'Database Systems', 'Data Mining', 'Statistical Computing', 'Pattern Recognition', 'Machine Learning'],
    highlights: [
      '2 peer-reviewed research papers published (IEEE & Grenze Journal)',
      'VR-driven CBRNe drone training research at DRDO / INMAS',
    ],
  },
];

const EXPERIENCE = [
  {
    role: 'Data Analyst Intern',
    org: 'Philip Robinson Library, Newcastle University',
    period: 'Jan 2026 – Present',
    bullets: [
      'Redesigned and optimised the occupancy dashboard in Power BI, reducing file size by 66% while improving clarity and usability.',
      'Analysed occupancy and usage data using SQL and Python to identify patterns for decision-making.',
      'Contributed to cost optimisation by improving data accessibility and reporting efficiency.',
    ],
  },
  {
    role: 'Market Research Intern',
    org: 'I-lab, Newcastle University',
    period: 'Jan 2026 – Mar 2026',
    bullets: [
      'Conducted primary and secondary research including 2 interviews to analyse market opportunities in the Higher Education sector and form a go-to-market strategy.',
      'Collaborated with a multidisciplinary team of 5 to structure research workflows, improving efficiency and project delivery.',
    ],
  },
  {
    role: 'Data Science Intern',
    org: 'Kare AI, India',
    period: 'Feb 2024 – Jun 2024',
    bullets: [
      'Independently built a RAG-based medical chatbot using OpenAI GPT-4 and LangChain, with prompt templates for medical queries and interactive charts via React Charts.',
      'Partnered with the front-end and marketing teams to secure 2 major clients.',
    ],
  },
  {
    role: 'Research',
    org: 'DRDO / INMAS, India',
    period: '2023 – 2024',
    bullets: [
      'Worked on VR-driven CBRNe drone training scenarios using eye tracking.',
    ],
  },
];

const SKILLS = [
  { group: 'Languages',     tags: ['Python', 'SQL', 'R', 'JavaScript'] },
  { group: 'ML / NLP',      tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Text Classification', 'Sentiment Analysis', 'Model Evaluations'] },
  { group: 'Generative AI', tags: ['Prompt Engineering', 'RAG Pipelines', 'LLM Fine-Tuning', 'OpenAI', 'Groq'] },
  { group: 'Backend',       tags: ['FastAPI', 'Flask', 'Node.js', 'REST API'] },
  { group: 'Frontend',      tags: ['React', 'Next.js'] },
  { group: 'Cloud & DevOps',tags: ['Google Cloud', 'Azure', 'Streamlit', 'Git', 'Docker'] },
];

export default function AboutPage() {
  return (
    <>
      <Section title="About">
        <div className="about-grid">
          {/* Left: bio + skills */}
          <div className="prose">
            <p>
              I&apos;m an MSc Data Science and AI student at Newcastle University with internship and research
              experience across data analysis, ML systems, and software development. I currently work as a
              Data Analyst Intern at the Philip Robinson Library, analysing occupancy data using SQL and
              Python and redesigning Power BI dashboards. I built a RAG-based medical chatbot at Kare AI
              using OpenAI GPT-4 and LangChain, and conducted market research at I-lab to form a
              go-to-market strategy for the Higher Education sector. I also worked with DRDO/INMAS on
              VR-driven training scenarios using eye tracking.
            </p>

            <hr className="hr-soft" />

            <h3 style={{margin:'10px 0 0'}}>Technical Skills</h3>
            <div className="skills-grid">
              {SKILLS.map(s => (
                <div className="skill-group" key={s.group}>
                  <p className="skill-group-title">{s.group}</p>
                  <div className="skill-tags">
                    {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-row" style={{marginTop:20}}>
              <SafeLink href="/contact"><span className="cta-primary">Contact</span></SafeLink>
              <SafeLink href="/projects"><span className="nav-link">See Projects</span></SafeLink>
              <SafeLink href="/research"><span className="nav-link">Papers & Patents</span></SafeLink>
            </div>
          </div>

          {/* Right: sidebar card with photo + meta */}
          <aside className="card meta-card">
            <div style={{display:'grid', placeItems:'center', marginBottom:12}}>
              <div className="avatar" style={{maxWidth:220}}>
                <Image src="/tejjus.jpg" alt="Tejjus Bhat" width={600} height={720} />
                <div className="avatar-ring" />
              </div>
            </div>

            <div className="row">
              <span className="meta-key">Location</span>
              <span>Newcastle, UK</span>
            </div>
            <div className="row">
              <span className="meta-key">Education</span>
              <span>MSc Data Science & AI</span>
            </div>
            <div className="row">
              <span className="meta-key">Stack</span>
              <span>Python, SQL, ML, LLMs</span>
            </div>

            <div className="btn-row" style={{marginTop:14}}>
              <SafeLink href="https://drive.google.com/file/d/1jFPUKQqGeqHnNjqmmhZu1CcPKUAkYIem/view?usp=drive_link">
                <span className="nav-link">View CV</span>
              </SafeLink>
            </div>
          </aside>
        </div>
      </Section>

      <Section title="Experience">
        <div className="timeline">
          {EXPERIENCE.map(e => (
            <div className="timeline-item" key={e.org}>
              <p className="timeline-role">{e.role}</p>
              <p className="timeline-org">{e.org}</p>
              <p className="timeline-period">{e.period}</p>
              <ul style={{margin:0, paddingLeft:18}}>
                {e.bullets.map((b, i) => (
                  <li key={i} style={{marginBottom:4, fontSize:'.9rem'}}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="edu-grid">
          {EDUCATION.map(e => (
            <div className="edu-card" key={e.degree}>
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-inst">{e.institution}</p>
              <div className="edu-meta">
                <span className="edu-badge">{e.period}</span>
                <span className="edu-badge grade">{e.grade}</span>
              </div>
              <div className="edu-modules">
                {e.modules.map(m => (
                  <span key={m} className="edu-module-tag">{m}</span>
                ))}
              </div>
              <ul className="edu-highlights">
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
