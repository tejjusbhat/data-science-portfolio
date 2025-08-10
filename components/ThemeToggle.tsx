'use client';
import { useEffect, useState } from 'react';

type Theme = 'auto' | 'light' | 'dark';

export default function ThemeToggle(){
  const [mode, setMode] = useState<Theme>('auto');

  useEffect(()=>{
    const saved = (localStorage.getItem('theme') as Theme | null) ?? 'auto';
    setMode(saved);
  },[]);

  function toggle(){
    const next: Theme = mode === 'dark' ? 'light' : mode === 'light' ? 'auto' : 'dark';
    setMode(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  }

  return <button className="ghost" onClick={toggle} aria-label="Toggle theme">{mode==='dark'?'🌙':'☀️'}</button>;
}
