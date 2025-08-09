'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle(){
  const [mode, setMode] = useState<'auto'|'light'|'dark'>('auto');
  useEffect(()=>{
    const saved = (localStorage.getItem('theme') as any) || 'auto';
    setMode(saved);
  },[]);
  function toggle(){
    const next = mode==='dark' ? 'light' : mode==='light' ? 'auto' : 'dark';
    setMode(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  }
  return <button className="ghost" onClick={toggle} aria-label="Toggle theme">{mode==='dark'?'🌙':'☀️'}</button>;
}
