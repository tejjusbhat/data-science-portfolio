export default function Section({ title, kicker, children }:{ title?: string; kicker?: string; children: React.ReactNode }){
  return (
    <section>
      {title && (
        <header className="section-head">
          {kicker && <p className="kicker">{kicker}</p>}
          <div className="section-title-row">
            <span className="flourish" aria-hidden />
            <h2 className="section-title">{title}</h2>
            <span className="flourish flourish-r" aria-hidden />
          </div>
        </header>
      )}
      {children}
    </section>
  );
}
