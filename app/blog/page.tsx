import Section from '@/components/Section';
import Parser from 'rss-parser';

export const metadata = { title: 'Blog — Tejjus Bhat' };

// Rebuild this page every 30 minutes (adjust as you like)
export const revalidate = 1800; // seconds

type FeedItem = { title?: string; link?: string; isoDate?: string; contentSnippet?: string };

export default async function BlogPage(){
  const username = process.env.MEDIUM_USERNAME;
  let items: FeedItem[] = [];

  if (username) {
    try {
      const url = `https://medium.com/feed/@${username}`;

      // Fetch the RSS yourself so Next can cache/revalidate it
      const res = await fetch(url, {
        headers: {
          'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
          // Medium can be picky; a browser-y UA helps in some regions
          'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0; +https://tejjusbhat.com)',
        },
        next: { revalidate }, // tie remote fetch to the page's ISR
      });

      if (res.ok) {
        const xml = await res.text();
        const parser = new Parser();
        const feed = await parser.parseString(xml);
        items = (feed.items || []).slice(0, 8) as FeedItem[];
      }
    } catch {
      // swallow in prod; show fallback UI below
    }
  }

  return (
    <Section title="Blog">
      {!username && <p className="lead">Set <code>MEDIUM_USERNAME</code> in your environment to auto-import posts.</p>}
      {items.length === 0 ? (
        <p>No posts yet. Check back soon.</p>
      ) : (
        <ul>
          {items.map((it, i) => (
            <li key={i} className="card" style={{ marginBottom: 12 }}>
              <strong>{it.title}</strong>{' '}
              {it.isoDate && <>— {new Date(it.isoDate).toLocaleDateString()}</>}
              {it.contentSnippet && <p style={{ marginTop: 8 }}>{it.contentSnippet}</p>}
              {it.link && (
                <p style={{ marginTop: 8 }}>
                  <a className="nav-link" href={it.link} target="_blank" rel="noopener noreferrer">
                    Read on Medium
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
