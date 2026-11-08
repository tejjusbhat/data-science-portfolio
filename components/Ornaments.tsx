import type { FormEventHandler, ReactNode } from 'react';

/* Four-point sparkle used at corners and as bullets */
const STAR = (cx: number, cy: number, r: number) =>
  `M${cx} ${cy - r}Q${cx} ${cy} ${cx + r} ${cy}Q${cx} ${cy} ${cx} ${cy + r}Q${cx} ${cy} ${cx - r} ${cy}Q${cx} ${cy} ${cx} ${cy - r}Z`;

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  return (
    <svg className={`corner corner-${pos}`} viewBox="-4 -4 40 40" aria-hidden>
      <path d="M1 34V8L8 1h26" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 34V10l5-5h24" fill="none" stroke="currentColor" strokeWidth=".7" opacity=".55" />
      <path d={STAR(1, 1, 5)} fill="currentColor" />
      <path d="M18 1l2-3 2 3-2 2z M1 18l-3 2 3 2 2-2z" fill="currentColor" />
    </svg>
  );
}

/** Panel with ornate corner pieces */
export function Frame({
  children, className = '', as: Tag = 'div', id, onSubmit,
}: {
  children: ReactNode; className?: string; id?: string;
  as?: 'div' | 'article' | 'aside' | 'li' | 'form';
  onSubmit?: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <Tag id={id} className={`frame ${className}`} onSubmit={onSubmit as FormEventHandler<HTMLElement> | undefined}>
      <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />
      {children}
    </Tag>
  );
}

export function Sparkle({ size = 10, className = '' }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 10 10" aria-hidden>
      <path d={STAR(5, 5, 5)} fill="currentColor" />
    </svg>
  );
}

/** Diamond arrow used for the Q / E shoulder buttons */
export function ShoulderArrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden
      style={dir === 'right' ? { transform: 'scaleX(-1)' } : undefined}>
      <path d="M12 1.5L22.5 12 12 22.5 1.5 12z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14.5 7L8 12l6.5 5z" fill="currentColor" />
    </svg>
  );
}

/** Ring with four spikes, used for stat medallions */
export function RingFrame() {
  return (
    <svg className="ring-frame" viewBox="0 0 100 100" aria-hidden>
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth=".6" opacity=".5" />
      <path d={STAR(50, 4, 6)} fill="currentColor" />
      <path d={STAR(50, 96, 6)} fill="currentColor" />
      <path d="M2 50l4-3 4 3-4 3z M98 50l-4-3-4 3 4 3z" fill="currentColor" />
    </svg>
  );
}

export type SigilKind = 'ml' | 'llm' | 'cv' | 'api' | 'eda' | 'seal' | 'relic' | 'scroll';

/** Arcane glyphs, one per category */
export function Sigil({ kind, size = 44 }: { kind: SigilKind; size?: number }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2 } as const;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      {kind === 'ml' && (
        <g {...common}>
          <circle cx="50" cy="50" r="46" />
          <path d="M50 8L86.4 71H13.6z" />
          <path d="M50 92L86.4 29H13.6z" />
          <circle cx="50" cy="50" r="11" />
        </g>
      )}
      {kind === 'llm' && (
        <g {...common}>
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="20" r="7" /><circle cx="80" cy="50" r="7" />
          <circle cx="50" cy="80" r="7" /><circle cx="20" cy="50" r="7" />
          <path d="M50 36L64 50 50 64 36 50z" />
        </g>
      )}
      {kind === 'cv' && (
        <g {...common}>
          <circle cx="50" cy="50" r="46" />
          <path d="M8 50Q50 12 92 50Q50 88 8 50z" />
          <circle cx="50" cy="50" r="14" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <path d="M50 4v10M50 86v10" />
        </g>
      )}
      {kind === 'api' && (
        <g {...common}>
          <rect x="20" y="20" width="60" height="60" />
          <path d="M50 4L96 50 50 96 4 50z" />
          <path d="M20 20L80 80M80 20L20 80" opacity=".6" />
          <circle cx="50" cy="50" r="8" />
        </g>
      )}
      {kind === 'eda' && (
        <g {...common}>
          <path d="M31 6h38l25 25v38L69 94H31L6 69V31z" />
          <circle cx="50" cy="50" r="30" />
          <path d="M38 64V46M50 64V34M62 64V52" strokeWidth="4" />
        </g>
      )}
      {kind === 'seal' && (
        <g {...common}>
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="38" />
          <rect x="24" y="24" width="52" height="52" />
          <path d="M50 13L87 50 50 87 13 50z" />
          <circle cx="50" cy="50" r="8" />
        </g>
      )}
      {kind === 'relic' && (
        <g {...common}>
          <circle cx="50" cy="50" r="46" />
          <path d="M50 10L60 40 90 50 60 60 50 90 40 60 10 50 40 40z" />
          <circle cx="50" cy="50" r="10" />
        </g>
      )}
      {kind === 'scroll' && (
        <g {...common}>
          <circle cx="50" cy="50" r="46" />
          <path d="M28 26h44v48H28z" />
          <path d="M36 38h28M36 50h28M36 62h18" />
        </g>
      )}
    </svg>
  );
}

/** Large rotating sigil drawn behind every page */
export function ArcaneBackdrop() {
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
  const orbs = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <div className="backdrop" aria-hidden>
      <svg className="backdrop-sigil" viewBox="0 0 200 200">
        <g fill="none" stroke="currentColor" strokeWidth=".35">
          <circle cx="100" cy="100" r="98" />
          <circle cx="100" cy="100" r="94" />
          {ticks.map(a => (
            <line key={a} x1="100" y1="2" x2="100" y2={a % 15 === 0 ? 9 : 6}
              transform={`rotate(${a} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="70" />
          <rect x="34" y="34" width="132" height="132" />
          <rect x="34" y="34" width="132" height="132" transform="rotate(45 100 100)" />
          <path d="M100 30L160.6 135H39.4z" />
          <path d="M100 170L160.6 65H39.4z" />
          <circle cx="100" cy="100" r="22" />
          {orbs.map(a => (
            <circle key={a} cx={100 + 82 * Math.cos(a)} cy={100 + 82 * Math.sin(a)} r="5" />
          ))}
        </g>
      </svg>
      <svg className="backdrop-sigil backdrop-sigil-2" viewBox="0 0 100 100">
        <g fill="none" stroke="currentColor" strokeWidth=".5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="30" />
          <path d="M50 2L98 50 50 98 2 50z" />
          <circle cx="50" cy="20" r="7" /><circle cx="80" cy="50" r="7" />
          <circle cx="50" cy="80" r="7" /><circle cx="20" cy="50" r="7" />
        </g>
      </svg>
    </div>
  );
}
