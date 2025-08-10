export default function ProjectCard({ project }:{ project: {
  slug: string; title: string; summary: string; stack: string[]; links?: { repo?: string; demo?: string; paper?: string }
}}){
  const { title, summary, stack, links, slug } = project;
  return (
    <article id={slug} className="card">
      <h3 style={{marginTop:0}}>{title}</h3>
      <p className="lead">{summary}</p>
      <p><small className="helper">{stack.join(' • ')}</small></p>
      <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
        {links?.repo && <a className="ghost" href={links.repo} target="_blank" rel="noopener noreferrer">Repo</a>}
        {links?.demo && <a className="ghost" href={links.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
        {links?.paper && <a className="ghost" href={links.paper} target="_blank" rel="noopener noreferrer">Paper</a>}
      </div>
    </article>
  );
}
