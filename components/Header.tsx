'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/blog',     label: 'Blog' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact', contact: true },
];

export default function Header(){
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <div className="logo" aria-hidden>◆</div>
          <Link href="/">Tejjus Bhat</Link>
        </div>

        <nav className="nav-right" aria-label="Primary">
          {LINKS.map(({ href, label, contact }) => {
            const active = pathname === href;
            const cls = [
              'nav-link',
              active ? 'active' : '',
              contact ? 'contact' : '',
              'hide-sm'
            ].join(' ').trim();
            return (
              <Link key={href} className={cls} href={href} title={label}>
                {label}
              </Link>
            );
          })}

          <button
            className="hamburger show-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={()=>setOpen(v=>!v)}
            title="Menu"
          >☰</button>
        </nav>
      </div>

      {/* Mobile menu */}
      <nav id="mobile-nav" className={`mobile ${open?'open':''}`} aria-label="Mobile">
        {LINKS.map(({ href, label, contact })=>{
          const active = pathname === href;
          const cls = ['mobile-link', active ? 'active' : '', contact ? 'contact' : ''].join(' ');
          return <Link key={href} className={cls} href={href} onClick={()=>setOpen(false)}>{label}</Link>;
        })}
      </nav>
    </header>
  );
}
