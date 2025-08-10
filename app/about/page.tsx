import Image from 'next/image';
import Section from '@/components/Section';
import { profile } from '@/data/profile';
import SafeLink from '@/components/SafeLink';

export const metadata = { title: 'About — Tejjus Bhat' };

export default function AboutPage(){
  return (
    <Section title="About">
      <div className="about-grid">
        {/* Left: bio */}
        <div className="prose">
          <p>
            I’m a data scientist focused on building practical ML systems for fintech and research.
            Recently, I worked at DRDO/INMAS on VR-driven CBRNe drone training scenarios using eye
            tracking, and at Kareai.io integrating LLM assistants into a Next.js product and automating
            data viz and reporting. My projects span ETL pipelines on GCP, OCR/YOLO-based perception,
            and LLM-powered analysis. I value clean experimentation, communication, and shipping work
            that actually gets used.
          </p>

          <hr className="hr-soft" />

          <h3 style={{margin:'10px 0'}}>What I’m good at</h3>
          <ul>
            <li>Applied ML for fintech (risk, forecasting, ops NLP)</li>
            <li>LLM apps, retrieval, evals; data engineering for ML</li>
            <li>Computer vision: OCR/YOLO, classical + deep CV</li>
          </ul>

          <div className="btn-row">
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
            <span>India (open to remote)</span>
          </div>
          <div className="row">
            <span className="meta-key">Focus</span>
            <span>Fintech • Research • ML</span>
          </div>
          <div className="row">
            <span className="meta-key">Stack</span>
            <span>Python, ML, Deep Learning, SQL, LLM, GCP</span>
          </div>

          <div className="btn-row" style={{marginTop:14}}>
            <SafeLink href="https://drive.google.com/your_resume">
              <span className="nav-link">Download Resume</span>
            </SafeLink>
          </div>
        </aside>
      </div>
    </Section>
  );
}
