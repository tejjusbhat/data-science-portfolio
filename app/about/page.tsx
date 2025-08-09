import Section from '@/components/Section';
import { profile } from '@/data/profile';

export const metadata = { title: 'About — Tejjus Bhat' };

export default function AboutPage(){
  return (
    <Section title="About">
      <p className="lead">{profile.bio}</p>
      <ul style={{marginTop:16}}>
        <li><strong>Resume:</strong> <a className="ghost" href="https://drive.google.com/your_resume" target="_blank" rel="noopener">Download PDF</a></li>
        <li><strong>Location:</strong> India (open to remote)</li>
      </ul>
    </Section>
  );
}
