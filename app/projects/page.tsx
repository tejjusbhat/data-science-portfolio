import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = { title: 'Projects — Tejjus Bhat' };

export default function ProjectsPage(){
  return (
    <Section title="Projects">
      <p className="lead">A replicable template—replace the dummy entries with your own.</p>
      <div className="grid grid-2">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </Section>
  );
}
