import Section from '@/components/Section';
import { pageMetadata } from '@/lib/seo';
import ProjectCard from '@/components/ProjectCard';
import { Frame, Sigil } from '@/components/Ornaments';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';

export const metadata = pageMetadata({ title: 'Work & Projects', description: 'Main quests and side quests: Tejjus Bhat’s work at Kinewell, Newcastle University, DRDO and Kare AI, plus machine learning, LLM and computer vision projects.', path: '/projects' });

export default function ProjectsPage() {
  const highlighted = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <>
      <Section title="Main Quests" kicker="Work experience">
        <ol className="timeline">
          {experience.map(e => (
            <li key={e.org} className={e.current ? 'current' : undefined}>
              <Frame className="quest">
                <div className="quest-head">
                  <span className="quest-sigil"><Sigil kind={e.sigil} size={40} /></span>
                  <div className="tl-main">
                    <div className="tl-head">
                      <p className="quest-type">Main Quest{e.current && ' · Active'}</p>
                      <span className="tl-period">{e.period}</span>
                    </div>
                    <h3 className="quest-title">{e.role}</h3>
                    <p className="tl-org">{e.org}{e.location && <> · {e.location}</>}</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="runes"><span className="rune">Unlocked: {e.unlock}</span></div>
              </Frame>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Side Quests" kicker="Personal projects">
        <div className="grid grid-3">
          {highlighted.map(p => <ProjectCard key={p.slug} project={p} featured />)}
        </div>
        <div className="grid grid-2" style={{marginTop:22}}>
          {others.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>
    </>
  );
}
