import Section from '@/components/Section';
import { pageMetadata } from '@/lib/seo';
import Parser from 'rss-parser';
import { Frame, Sigil } from '@/components/Ornaments';

export const metadata = pageMetadata({ title: 'Blog', description: 'Chronicles: articles by Tejjus Bhat on data science, machine learning and AI.', path: '/blog' });

export const revalidate = 1800;

type FeedItem = { title?: string; link?: string; isoDate?: string; contentSnippet?: string };

export default async function BlogPage() {
  const username = process.env.MEDIUM_USERNAME;
  let items: FeedItem[] = [];

  if (username) {
    try {
      const url = `https://medium.com/feed/@${username}`;

      const res = await fetch(url, {
        headers: {
          'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
          'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0; +https://tejjusbhat.com)',
        },
        next: { revalidate },
      });

      if (res.ok) {
        const xml = await res.text();
        const parser = new Parser();
        const feed = await parser.parseString(xml);
        items = (feed.items || []).slice(0, 8) as FeedItem[];
      }
    } catch {
      // show fallback UI below
    }
  }

  return (
    <Section title="Chronicles" kicker="Blog">
      {!username && (
        <p className="lead">Set <code>MEDIUM_USERNAME</code> in your environment to auto-import posts.</p>
      )}
      {items.length === 0 ? (
        <p className="lead">No chronicles yet. Check back soon.</p>
      ) : (
        <ul className="tome-list">
          {items.map((it, i) => (
            <Frame as="li" key={i} className="tome">
              <span className="tome-seal"><Sigil kind="scroll" size={56} /></span>
              <div>
                {it.isoDate && (
                  <p className="tome-meta">
                    {new Date(it.isoDate).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </p>
                )}
                <h3 className="tome-title">{it.title}</h3>
                {it.contentSnippet && (
                  <p className="tome-body">
                    {it.contentSnippet.slice(0, 180)}{it.contentSnippet.length > 180 ? '…' : ''}
                  </p>
                )}
                {it.link && (
                  <a className="btn btn-sm" href={it.link} target="_blank" rel="noopener noreferrer">
                    Read on Medium
                  </a>
                )}
              </div>
            </Frame>
          ))}
        </ul>
      )}
    </Section>
  );
}
