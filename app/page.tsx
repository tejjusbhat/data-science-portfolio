import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import SafeLink from '@/components/SafeLink';

const STATS = [
  { label: 'MSc Data Science & AI' },
  { label: '4 Roles' },
  { label: '2 Publications' },
];

const EXPERIENCE = [
  { role: 'Data Analyst Intern', org: 'Philip Robinson Library, Newcastle University', period: 'Jan 2026 – Present' },
  { role: 'Market Research Intern', org: 'I-lab, Newcastle University', period: 'Jan 2026 – Mar 2026' },
  { role: 'Data Science Intern', org: 'Kare AI', period: 'Feb 2024 – Jun 2024' },
  { role: 'Research', org: 'DRDO / INMAS', period: '2023 – 2024' },
];

const ACHIEVEMENTS = [
  '74+ public GitHub repos across ML, CV, NLP and backend',
  'Won NCL+ Award for extra-curricular excellence',
  '97% accuracy (SaaS churn predictor)',
  '6 stars on GitHub (captcha solver)',
];

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 2);

  return (
    <>
      <Section>
        <div className="hero-wrap">
          <div className="hero-dot-bg" aria-hidden />

          {/* Left: intro */}
          <div style={{position:'relative', zIndex:1}}>
            <div className="badges" aria-hidden>
              <span className="badge">Data Science • ML • LLMs</span>
              <span className="badge-solid available-badge">
                <span className="pulse-dot" aria-hidden />
                Open to opportunities
              </span>
            </div>

            <h1 style={{marginTop:12}}>
              <span className="gradient-text">Hi! I&apos;m {profile.name}</span>
              {' '}<span className="wave" aria-hidden>👋</span>
            </h1>
            <p className="lead" style={{marginBottom:0}}>{profile.tagline}</p>

            <div className="stat-chips">
              {STATS.map(s => (
                <span key={s.label} className="stat-chip">{s.label}</span>
              ))}
            </div>

            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <Link className="cta-primary" href="/contact">Contact</Link>
              <Link className="nav-link" href="/projects">See Projects</Link>
              <Link className="nav-link" href="/research">Papers & Patents</Link>
            </div>
          </div>

          {/* Right: photo + achievements */}
          <aside className="card meta-card" style={{position:'relative', zIndex:1}}>
            <div style={{display:'grid', placeItems:'center', marginBottom:12}}>
              <div className="avatar">
                <Image src="/tejjus.jpg" alt="Tejjus Bhat" width={600} height={720} />
                <div className="avatar-ring" />
              </div>
            </div>

            <div className="row">
              <span className="meta-key">Location</span>
              <span>Newcastle, UK</span>
            </div>
            <div className="row">
              <span className="meta-key">Focus</span>
              <span>Data Science • ML • LLMs</span>
            </div>

            <hr className="hr-soft" style={{margin:'10px 0 6px'}} />
            {ACHIEVEMENTS.map(a => (
              <div key={a} className="achievement">{a}</div>
            ))}

            <hr className="hr-soft" style={{margin:'10px 0 6px'}} />
            <div className="edu-compact">
              <p className="edu-compact-degree">MSc Data Science & AI</p>
              <p className="edu-compact-inst">Newcastle University</p>
              <p className="edu-compact-grade">Expected: 78% · 2025–2026</p>
            </div>
            <div className="edu-compact">
              <p className="edu-compact-degree">BTech CSE (Data Science)</p>
              <p className="edu-compact-inst">ABES Engineering College, AKTU</p>
              <p className="edu-compact-grade">70.8% First Distinction · 2021–2025</p>
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
        <FadeIn>
          <div className="exp-strip">
            {EXPERIENCE.map(e => (
              <div className="exp-card" key={e.org}>
                <p className="exp-role">{e.role}</p>
                <p className="exp-org">{e.org}</p>
                <p className="exp-date">{e.period}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Featured work">
        <FadeIn>
          <div className="grid grid-2">
            {featured.map(p => (
              <ProjectCard key={p.slug} project={p} featured />
            ))}
          </div>
        </FadeIn>
        <div style={{marginTop:16}}>
          <Link className="nav-link" href="/projects">View all projects</Link>
        </div>
      </Section>
    </>
  );
}

export const metadata = {
  title: 'Tejjus Bhat | Data Scientist',
  description: 'Portfolio of Tejjus Bhat, MSc Data Science and AI student at Newcastle University with experience in ML, LLM applications, and data analytics.',
};
