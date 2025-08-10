import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = { title: 'Projects — Tejjus Bhat' };

export default function ProjectsPage(){
  return (
    <Section title="Projects">
      <div className="grid grid-2">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </Section>
  );
}
