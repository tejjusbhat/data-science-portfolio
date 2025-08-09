import SafeLink from './SafeLink';
import { profile } from '@/data/profile';
import { GitHub, LinkedIn, Kaggle, Medium, X, Mail } from './Icons';

function IconLink({
  href, label, children,
}: { href: string; label: string; children: React.ReactNode }) {
  return (
    <SafeLink href={href}>
      <span className="icon-link" aria-label={label} title={label}>
        {children}
        <span className="icon-text">{label}</span>
      </span>
    </SafeLink>
  );
}

export default function Footer(){
  const p = profile;
  return (
    <footer>
      <div className="container footer-wrap">
        <div className="footer-left">
          <small>© {new Date().getFullYear()} {p.name}</small>
          <small className="helper">Built with Next.js</small>
        </div>
        <div className="icon-row">
          {p.links.github   && <IconLink href={p.links.github}   label="GitHub"><GitHub /></IconLink>}
          {p.links.linkedin && <IconLink href={p.links.linkedin} label="LinkedIn"><LinkedIn /></IconLink>}
          {p.links.kaggle   && <IconLink href={p.links.kaggle}   label="Kaggle"><Kaggle /></IconLink>}
          {p.links.medium   && <IconLink href={p.links.medium}   label="Medium"><Medium /></IconLink>}
          {p.links.twitter  && <IconLink href={p.links.twitter}  label="X / Twitter"><X /></IconLink>}
          <IconLink href={`mailto:${p.links.email}`} label="Email"><Mail /></IconLink>
        </div>
      </div>
    </footer>
  );
}
