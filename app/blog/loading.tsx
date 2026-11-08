import Section from '@/components/Section';
import { Frame } from '@/components/Ornaments';

export default function Loading() {
  return (
    <Section title="Chronicles" kicker="Blog">
      <ul className="tome-list">
        {Array.from({ length: 4 }).map((_, i) => (
          <Frame as="li" key={i}>
            <div className="skeleton-line skeleton-title" />
            <div className="skeleton-line" />
            <div className="skeleton-line" style={{width:'65%'}} />
          </Frame>
        ))}
      </ul>
    </Section>
  );
}
