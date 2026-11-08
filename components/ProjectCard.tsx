import { Frame, Sigil } from './Ornaments';

const CATEGORY_LABELS: Record<string, string> = {
  ml:  'Machine Learning',
  llm: 'LLM / AI',
  cv:  'Computer Vision',
  api: 'Backend / API',
  eda: 'Data Analysis',
};

export default function ProjectCard({ project, featured = false }:{ project: {
  slug: string; title: string; summary: string; stack: string[];
  category?: 'ml' | 'llm' | 'cv' | 'api' | 'eda';
  links?: { repo?: string; demo?: string; paper?: string }
}; featured?: boolean }){
  const { title, summary, stack, links, slug, category } = project;
  return (
    <Frame as="article" id={slug} className={`quest${featured ? ' quest-main' : ''}`}>
      <div className="quest-head">
        <span className="quest-sigil"><Sigil kind={category ?? 'seal'} size={40} /></span>
        <div>
          <p className="quest-type">
            {featured ? 'Featured Side Quest' : 'Side Quest'}
            {category && <> · {CATEGORY_LABELS[category]}</>}
          </p>
          <h3 className="quest-title">{title}</h3>
        </div>
      </div>
      <p className="quest-summary">{summary}</p>
      <div className="runes" aria-label="Tech stack">
        {stack.map(s => <span key={s} className="rune">{s}</span>)}
      </div>
      {(links?.repo || links?.demo || links?.paper) && (
        <div className="quest-actions">
          {links?.repo && <a className="btn btn-sm" href={links.repo} target="_blank" rel="noopener noreferrer">Repo</a>}
          {links?.demo && <a className="btn btn-sm btn-primary" href={links.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
          {links?.paper && <a className="btn btn-sm" href={links.paper} target="_blank" rel="noopener noreferrer">Paper</a>}
        </div>
      )}
    </Frame>
  );
}
