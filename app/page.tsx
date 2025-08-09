import Link from 'next/link';
import Section from '@/components/Section';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function Home() {
  const featured = projects.slice(0,2);
  return (
    <>
      <Section>
        <div className="grid grid-2">
          <div>
            <span className="badge">Fintech • Research • ML</span>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.tagline}</p>
            <div style={{display:'flex', gap:12, marginTop:16}}>
              <Link className="cta" href="/projects">See Projects</Link>
              <Link className="ghost" href="/research">Papers & Patents</Link>
            </div>
          </div>
          <div className="card">
            <p className="kicker">Quick facts</p>
            <ul>
              <li>Experience: DRDO/INMAS (research) & Kareai.io (intern)</li>
              <li>Focus: time series, NLP, LLM apps, applied ML</li>
              <li>Stack: Python, SQL, JS/React, GCP</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Featured work">
        <div className="grid grid-2">
          {featured.map(p => (
            <div className="card" key={p.slug}>
              <h3 style={{marginTop:0}}>{p.title}</h3>
              <p className="lead">{p.summary}</p>
              <p><small className="helper">{p.stack.join(' • ')}</small></p>
              <Link className="ghost" href={`/projects#${p.slug}`}>Read more</Link>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What I’m aiming for">
        <p className="lead">
          Opportunities where rigorous analysis and practical ML meet product impact—especially in fintech risk, forecasting, NLP for operations,
          or research roles with strong engineering culture.
        </p>
      </Section>
    </>
  );
}
