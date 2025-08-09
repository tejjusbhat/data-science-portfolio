export default function Loading() {
  return (
    <section>
      <h2>Blog</h2>
      <ul style={{listStyle:'none', padding:0, margin:0}}>
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="card skeleton">
            <div className="skeleton-line skeleton-title" />
            <div className="skeleton-line" />
            <div className="skeleton-line" style={{width:'65%'}} />
          </li>
        ))}
      </ul>
    </section>
  );
}
