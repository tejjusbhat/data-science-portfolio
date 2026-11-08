import Link from 'next/link';
import { DEFAULT_DESCRIPTION, pageMetadata, personJsonLd } from '@/lib/seo';
import Image from 'next/image';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import SafeLink from '@/components/SafeLink';
import { Frame, RingFrame, Sparkle } from '@/components/Ornaments';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';

const CV_URL = 'https://drive.google.com/file/d/1jFPUKQqGeqHnNjqmmhZu1CcPKUAkYIem/view?usp=drive_link';

const STATS = [
  { value: '74+', label: 'Repos' },
  { value: '2', label: 'Papers' },
  { value: '1', label: 'Patent' },
  { value: '5', label: 'Roles' },
];

// Oldest first, so the path reads left to right like a level track
const LEVELS = [...experience].reverse();

const FEATS = [
  'Won the NCL+ Award for extra-curricular excellence',
  'Helped Kare AI grow across 5 countries and 3,000+ zip codes, securing 2 major clients',
  'Published 2 peer-reviewed papers (IEEE CCICT 2024, The Grenze Journal 2025)',
  'Filed a patent for the inQuery application management system',
];

const ACADEMIES = [
  { degree: 'MSc Data Science & AI', inst: 'Newcastle University', note: '71% Distinction · 2025–2026' },
  { degree: 'BTech CSE (Data Science)', inst: 'ABES Engineering College, AKTU', note: '70.8% First Distinction · 2021–2025' },
];

export default function Home() {
  const featured = projects.filter(p => p.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <section className="hero">
        <div className="portrait-col">
          <Frame className="portrait-frame">
            <div className="portrait">
              <Image src="/tejjus.jpg" alt="Tejjus Bhat" width={600} height={720} priority />
            </div>
          </Frame>
          <div className="nameplate">R&amp;D Engineer</div>
        </div>

        <div className="sheet">
          <p className="kicker"><Sparkle /> Character <Sparkle /></p>
          <h1 className="hero-name">{profile.name}</h1>
          <dl className="hero-class">
            <div><dt>Class</dt><dd>R&amp;D Engineer</dd></div>
            <div><dt>Guild</dt><dd>Kinewell · Offshore Wind</dd></div>
            <div><dt>Specialty</dt><dd>Python · ML · Full-stack AI</dd></div>
            <div><dt>Realm</dt><dd>Newcastle, UK</dd></div>
          </dl>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="status"><span className="ember" aria-hidden /> Open to collaborations</p>

          <ul className="medallions" aria-label="Stats">
            {STATS.map(s => (
              <li key={s.label} className="medallion">
                <span className="medallion-ring"><RingFrame /><span className="medallion-value">{s.value}</span></span>
                <span className="medallion-label">{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="btn-row">
            <Link className="btn btn-primary" href="/contact">Send a Raven</Link>
            <Link className="btn" href="/projects">Quest Log</Link>
            <SafeLink href={CV_URL}><span className="btn">View CV</span></SafeLink>
          </div>
        </div>
      </section>

      <Section title="Path of Levels" kicker="Experience">
        <FadeIn>
          <ol className="levels">
            {LEVELS.map((l, i) => (
              <li key={l.org} className={`banner${l.current ? ' current' : ''}`}>
                <div className="banner-shape"><div className="banner-inner">
                  <p className="banner-level">Level</p>
                  <p className="banner-num">
                    {l.current && <span className="num-gem" aria-hidden />}
                    {i + 1}
                    {l.current && <span className="num-gem" aria-hidden />}
                  </p>
                  <p className="banner-status">{l.current ? 'Active' : 'Complete'}</p>
                  {l.current && <div className="xp-bar" aria-hidden><span /></div>}
                  <p className="banner-role">{l.short.role}</p>
                  <p className="banner-org">{l.short.org}</p>
                  <p className="banner-period">{l.short.period}</p>
                  <p className="banner-unlock"><span>Unlocked</span>{l.unlock}</p>
                </div></div>
              </li>
            ))}
            <li className="banner locked">
              <Link href="/contact" className="banner-shape"><div className="banner-inner">
                <p className="banner-level">Level</p>
                <p className="banner-num">{LEVELS.length + 1}</p>
                <p className="banner-status">Locked</p>
                <p className="banner-role">Your project?</p>
                <p className="banner-org">Have something worth building together?</p>
                <p className="banner-unlock"><span>Unlock</span>Send a raven</p>
              </div></Link>
            </li>
          </ol>
        </FadeIn>
      </Section>

      <Section title="Feats & Academies" kicker="Achievements and education">
        <FadeIn>
          <div className="grid grid-2">
            <Frame className="panel">
              <h3 className="panel-title">Feats</h3>
              <ul className="feat-list">
                {FEATS.map(f => <li key={f}><Sparkle size={11} className="feat-star" />{f}</li>)}
              </ul>
            </Frame>
            <Frame className="panel">
              <h3 className="panel-title">Academies</h3>
              {ACADEMIES.map(a => (
                <div key={a.degree} className="academy">
                  <p className="academy-degree">{a.degree}</p>
                  <p className="academy-inst">{a.inst}</p>
                  <p className="academy-note">{a.note}</p>
                </div>
              ))}
            </Frame>
          </div>
        </FadeIn>
      </Section>

      <Section title="Side Quests" kicker="Featured projects">
        <FadeIn>
          <div className="grid grid-3">
            {featured.map(p => <ProjectCard key={p.slug} project={p} featured />)}
          </div>
        </FadeIn>
        <div className="center-row">
          <Link className="btn" href="/projects">Open the full Quest Log</Link>
        </div>
      </Section>
    </>
  );
}

export const metadata = pageMetadata({ description: DEFAULT_DESCRIPTION, path: '/' });
