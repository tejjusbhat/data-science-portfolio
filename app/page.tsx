import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function Home() {
  const featured = projects.slice(0,2);

  return (
    <>
      <Section>
        <div className="hero-wrap">
          {/* Left: intro */}
          <div>
            <div className="badges" aria-hidden>
              <span className="badge">Fintech • Research • ML</span>
              <span className="badge-solid">Open to opportunities</span>
            </div>

            <h1 style={{marginTop:12}}>{profile.name}</h1>
            <p className="lead" style={{marginBottom:18}}>{profile.tagline}</p>

            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <Link className="cta-primary" href="/contact">Contact</Link>
              <Link className="nav-link" href="/projects">See Projects</Link>
              <Link className="nav-link" href="/research">Papers & Patents</Link>
            </div>

            <div className="card" style={{marginTop:18}}>
              <p className="kicker">Quick facts</p>
              <ul>
                <li>Experience: DRDO/INMAS (research) & Kareai.io (intern)</li>
                <li>Focus: time series, NLP, LLM apps, applied ML</li>
                <li>Stack: Python, ML, Deep Learning, SQL, LLM, GCP</li>
              </ul>
            </div>
          </div>

          {/* Right: photo */}
          <div style={{position:'relative'}}>
            <div className="hero-blob" />
            <div className="avatar">
              {/* Put your real photo at /public/tejjus.jpg */}
              <Image
                src="/tejjus.jpg"
                alt="Tejjus Bhat"
                width={900}
                height={1100}
                priority
              />
              <div className="avatar-ring" />
            </div>
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
              <Link className="nav-link" href={`/projects#${p.slug}`}>Read more</Link>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What I’m aiming for">
        <p className="lead">
          Opportunities where I can apply my knowledge to solve business problems. 
          A place where I can learn and grow with people with a positive mindset.
        </p>
      </Section>
    </>
  );
}

export const metadata = {
  title: "Tejjus Bhat | Data Scientist",
  description: "Portfolio of Tejjus Bhat — a quick-witted data scientist for fintech and research.",
};

