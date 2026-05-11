import Section from '@/components/Section';
import { research } from '@/data/research';
import SafeLink from '@/components/SafeLink';

export const metadata = { title: 'Research' };

export default function ResearchPage() {
  return (
    <>
      <Section title="Papers">
        {research.papers.length === 0
          ? <p className="lead">Add your papers in <code>data/research.ts</code>.</p>
          : <ul style={{listStyle:'none', padding:0, margin:0}}>
              {research.papers.map((p, i) => (
                <li key={i} className="card" style={{marginBottom:12}}>
                  <strong>{p.title}</strong>
                  <div style={{marginTop:4}}>
                    <span className="helper">{p.venue} &middot; {p.year}</span>
                  </div>
                  {p.link && (
                    <SafeLink href={p.link}>
                      <span className="nav-link" style={{display:'inline-flex', marginTop:10, marginBottom:4}}>
                        View paper
                      </span>
                    </SafeLink>
                  )}
                  <p style={{marginTop:8, marginBottom:0}}>{p.summary}</p>
                </li>
              ))}
            </ul>
        }
      </Section>

      <Section title="Patents">
        {research.patents.length === 0
          ? <p className="lead">List filings (title, number if public, short blurb).</p>
          : <ul style={{listStyle:'none', padding:0, margin:0}}>
              {research.patents.map((p, i) => (
                <li key={i} className="card" style={{marginBottom:12}}>
                  <strong>{p.title}</strong>
                  {p.number && (
                    <div style={{marginTop:4}}>
                      <span className="helper">Patent No. {p.number}</span>
                    </div>
                  )}
                  <p style={{marginTop:8, marginBottom:0}}>{p.summary}</p>
                </li>
              ))}
            </ul>
        }
      </Section>
    </>
  );
}
