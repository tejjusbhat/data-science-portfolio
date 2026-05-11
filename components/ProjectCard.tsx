const CATEGORY_LABELS: Record<string, string> = {
  ml:  'Machine Learning',
  llm: 'LLM / AI',
  cv:  'Computer Vision',
  api: 'Backend / API',
  eda: 'Data Analysis',
};

export default function ProjectCard({ project, featured = false }:{ project: {
  slug: string; title: string; summary: string; stack: string[];
  category?: string;
  links?: { repo?: string; demo?: string; paper?: string }
}; featured?: boolean }){
  const { title, summary, stack, links, slug, category } = project;
  return (
    <article id={slug} className={`card${featured ? ' card-featured' : ''}`}>
      {category && (
        <div className="card-preview" data-cat={category}>
          <span className="card-preview-badge">{CATEGORY_LABELS[category] ?? category}</span>
        </div>
      )}
      <h3 style={{marginTop:0}}>{title}</h3>
      <p className="lead">{summary}</p>
      <p><small className="helper">{stack.join(' • ')}</small></p>
      <div style={{display:'flex', gap:10, flexWrap:'wrap', marginTop:8}}>
        {links?.repo && <a className="ghost" href={links.repo} target="_blank" rel="noopener noreferrer">Repo</a>}
        {links?.demo && <a className="ghost" href={links.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
        {links?.paper && <a className="ghost" href={links.paper} target="_blank" rel="noopener noreferrer">Paper</a>}
      </div>
    </article>
  );
}
