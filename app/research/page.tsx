import Section from '@/components/Section';
import { research } from '@/data/research';
import SafeLink from '@/components/SafeLink';

export const metadata = { title: 'Research & Credentials — Tejjus Bhat' };

export default function ResearchPage(){
  return (
    <>
      <Section title="Papers">
        {research.papers.length===0 ? <p className="lead">Add your papers in <code>data/research.ts</code>.</p> :
        <ul>{research.papers.map((p,i)=>(
          <li key={i} className="card" style={{marginBottom:12}}>
            <strong>{p.title}</strong> — <em>{p.venue}</em> ({p.year}) {p.link && <>• <SafeLink href={p.link}>link</SafeLink></>}
            <p style={{marginTop:8}}>{p.summary}</p>
          </li>
        ))}</ul>}
      </Section>

      <Section title="Patents">
        {research.patents.length===0 ? <p className="lead">List filings (title, number if public, short blurb).</p> :
        <ul>{research.patents.map((p,i)=>(
          <li key={i} className="card" style={{marginBottom:12}}>
            <strong>{p.title}</strong> {p.number && <>— {p.number}</>} <p style={{marginTop:8}}>{p.summary}</p>
          </li>
        ))}</ul>}
      </Section>

      <Section title="Certificates">
        {research.certificates.length===0 ? <p className="lead">Add notable certifications.</p> :
        <ul>{research.certificates.map((c,i)=>(
          <li key={i} className="card" style={{marginBottom:12}}>
            <strong>{c.title}</strong> — {c.issuer} ({c.year})
          </li>
        ))}</ul>}
      </Section>
    </>
  );
}
