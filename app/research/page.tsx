import Section from '@/components/Section';
import SafeLink from '@/components/SafeLink';
import { Frame, RingFrame, Sigil } from '@/components/Ornaments';
import { research } from '@/data/research';

export const metadata = { title: 'Research' };

export default function ResearchPage() {
  return (
    <>
      <Section title="Tomes" kicker="Published papers">
        {research.papers.length === 0
          ? <p className="lead">Add your papers in <code>data/research.ts</code>.</p>
          : <ul className="tome-list">
              {research.papers.map((p, i) => (
                <Frame as="li" key={i} className="tome">
                  <span className="tome-seal"><Sigil kind="seal" size={64} /></span>
                  <div>
                    <p className="tome-meta">{p.venue} · {p.year}</p>
                    <h3 className="tome-title">{p.title}</h3>
                    <p className="tome-body">{p.summary}</p>
                    {p.link && (
                      <SafeLink href={p.link}><span className="btn btn-sm">Read the tome</span></SafeLink>
                    )}
                  </div>
                </Frame>
              ))}
            </ul>
        }
      </Section>

      <Section title="Relics" kicker="Patents">
        {research.patents.length === 0
          ? <p className="lead">List filings (title, number if public, short blurb).</p>
          : <ul className="tome-list">
              {research.patents.map((p, i) => (
                <Frame as="li" key={i} className="tome">
                  <span className="tome-seal"><Sigil kind="relic" size={64} /></span>
                  <div>
                    {p.number && <p className="tome-meta">Patent No. {p.number}</p>}
                    <h3 className="tome-title">{p.title}</h3>
                    <p className="tome-body">{p.summary}</p>
                  </div>
                </Frame>
              ))}
            </ul>
        }
      </Section>

      <Section title="Badges" kicker="Certifications">
        <ul className="badges">
          {research.certificates.map(c => (
            <Frame as="li" key={c.title} className="badge">
              <span className="badge-ring"><RingFrame /><Sigil kind="relic" size={30} /></span>
              <h3 className="badge-title">{c.title}</h3>
            </Frame>
          ))}
        </ul>
      </Section>
    </>
  );
}
