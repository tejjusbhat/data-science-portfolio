import Link from 'next/link';

export default function SafeLink({ href, children }:{ href: string; children: React.ReactNode }){
  const external = /^https?:\/\//.test(href) || href.startsWith('mailto:');
  if(external) return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <Link href={href}>{children}</Link>;
}
