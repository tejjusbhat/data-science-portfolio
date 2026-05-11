import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  const highlighted = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <Section title="Projects">
      <p className="projects-group-label">Highlighted</p>
      <div className="grid grid-2" style={{marginBottom:28}}>
        {highlighted.map(p => <ProjectCard key={p.slug} project={p} featured />)}
      </div>

      <p className="projects-group-label">Other projects</p>
      <div className="grid grid-2">
        {others.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </Section>
  );
}
