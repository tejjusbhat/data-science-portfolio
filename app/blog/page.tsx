import Section from '@/components/Section';
import Parser from 'rss-parser';

export const metadata = { title: 'Blog' };

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
    <Section title="Blog">
      {!username && (
        <p className="lead">Set <code>MEDIUM_USERNAME</code> in your environment to auto-import posts.</p>
      )}
      {items.length === 0 ? (
        <p className="lead">No posts yet. Check back soon.</p>
      ) : (
        <ul style={{listStyle:'none', padding:0, margin:0}}>
          {items.map((it, i) => (
            <li key={i} className="card" style={{marginBottom:12}}>
              <strong>{it.title}</strong>
              {it.isoDate && (
                <div style={{marginTop:4}}>
                  <span className="helper">
                    {new Date(it.isoDate).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </span>
                </div>
              )}
              {it.contentSnippet && (
                <p style={{marginTop:8, marginBottom:0}}>
                  {it.contentSnippet.slice(0, 180)}{it.contentSnippet.length > 180 ? '…' : ''}
                </p>
              )}
              {it.link && (
                <div style={{marginTop:10}}>
                  <a
                    className="nav-link"
                    style={{display:'inline-flex'}}
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read on Medium
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
