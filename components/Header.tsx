"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoulderArrow, Sigil } from "./Ornaments";

// Game-menu tabs; `sub` keeps the plain meaning visible for recruiters
const TABS = [
  { href: "/", label: "Character", sub: "Home" },
  { href: "/about", label: "Lore", sub: "About" },
  { href: "/projects", label: "Quests", sub: "Work & Projects" },
  { href: "/research", label: "Grimoire", sub: "Research" },
  { href: "/blog", label: "Chronicles", sub: "Blog" },
  { href: "/contact", label: "Raven", sub: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const router = useRouter();

  const index = Math.max(0, TABS.findIndex(t => t.href === pathname));
  const prev = TABS[(index - 1 + TABS.length) % TABS.length];
  const next = TABS[(index + 1) % TABS.length];

  // Q / E cycle tabs like shoulder buttons
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      const k = e.key.toLowerCase();
      if (k === "q") router.push(prev.href);
      else if (k === "e") router.push(next.href);
      else if (k === "escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prev.href, next.href]);

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link href="/" className="brand" aria-label="Tejjus Bhat, home">
          <span className="brand-sigil"><Sigil kind="seal" size={30} /></span>
          <span className="brand-name">Tejjus Bhat</span>
        </Link>

        <nav className="tabs" aria-label="Primary">
          <Link href={prev.href} className="shoulder" aria-label={`Previous: ${prev.sub}`} title="Previous tab (Q)">
            <ShoulderArrow dir="left" /><kbd>Q</kbd>
          </Link>
          {TABS.map(t => (
            <Link key={t.href} href={t.href}
              className={`tab${t.href === pathname ? " active" : ""}`}
              aria-current={t.href === pathname ? "page" : undefined}>
              <span className="tab-label">{t.label}</span>
              <span className="tab-sub">{t.sub}</span>
            </Link>
          ))}
          <Link href={next.href} className="shoulder" aria-label={`Next: ${next.sub}`} title="Next tab (E)">
            <kbd>E</kbd><ShoulderArrow dir="right" />
          </Link>
        </nav>

        {/* Mobile: cycle through tabs like a console menu */}
        <div className="tab-cycler">
          <Link href={prev.href} className="shoulder" aria-label={`Previous: ${prev.sub}`}>
            <ShoulderArrow dir="left" />
          </Link>
          <span className="cycler-current">
            <span className="tab-label">{TABS[index].label}</span>
            <span className="tab-sub">{TABS[index].sub}</span>
          </span>
          <Link href={next.href} className="shoulder" aria-label={`Next: ${next.sub}`}>
            <ShoulderArrow dir="right" />
          </Link>
        </div>

        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav"
          aria-label="Open menu" onClick={() => setOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-menu${open ? " open" : ""}`} aria-label="Mobile">
        {TABS.map(t => (
          <Link key={t.href} href={t.href} onClick={() => setOpen(false)}
            className={t.href === pathname ? "active" : ""}>
            <span className="tab-label">{t.label}</span>
            <span className="tab-sub">{t.sub}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
