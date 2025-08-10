import Section from "@/components/Section";
import Parser from "rss-parser";

export const metadata = { title: "Blog — Tejjus Bhat" };

type FeedItem = {
  title?: string;
  link?: string;
  isoDate?: string;
  contentSnippet?: string;
};

export default async function BlogPage() {
  const username = process.env.MEDIUM_USERNAME;
  let items: FeedItem[] = [];
  if (username) {
    try {
      const parser = new Parser();
      const feed = await parser.parseURL(
        `https://medium.com/feed/@${username}`
      );
      items = (feed.items || []).slice(0, 8) as FeedItem[];
    } catch {
      // ignore in dev/offline
    }
  }
  return (
    <Section title="Blog">
      {!username && (
        <p className="lead">
          Set <code>MEDIUM_USERNAME</code> in <code>.env.local</code> to
          auto-import posts.
        </p>
      )}
      {items.length === 0 ? (
        <p>No posts yet. Check back soon.</p>
      ) : (
        <ul>
          {items.map((it, i) => (
            <li key={i} className="card" style={{ marginBottom: 12 }}>
              <strong>{it.title}</strong> —{" "}
              {it.isoDate && new Date(it.isoDate).toLocaleDateString()}
              <p style={{ marginTop: 8 }}>{it.contentSnippet}</p>
              {it.link && (
                <p style={{ marginTop: 8 }}>
                  <a
                    className="ghost"
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
