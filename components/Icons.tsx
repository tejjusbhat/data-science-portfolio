export function GitHub(props:{size?:number}) {
  const s = props.size ?? 18;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.65.24 2.87.12 3.17.77.83 1.24 1.9 1.24 3.19 0 4.59-2.81 5.6-5.49 5.89.43.37.82 1.1.82 2.23v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5z"/>
    </svg>
  );
}
export function LinkedIn({size=18}:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.06c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.15V24h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24H8V8z"/>
    </svg>
  );
}
export function Kaggle({size=18}:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M3 4.5c0-.83.67-1.5 1.5-1.5h1C6.33 3 7 3.67 7 4.5v15c0 .83-.67 1.5-1.5 1.5h-1C3.67 21 3 20.33 3 19.5v-15zM21 20h-3.2l-6-6.4V20h-3V4h3v7l5.6-7H21l-7 8.6L21 20z"/>
    </svg>
  );
}
export function Medium({size=18}:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 1043.63 592.71" aria-hidden="true" fill="currentColor">
      <path d="M588.67 296.35c0 163.68-131.1 296.36-292.94 296.36S2.79 460.03 2.79 296.35 133.9 0 295.73 0s292.94 132.67 292.94 296.35zM728.7 296.35c0 154.28-65.55 279.4-146.48 279.4-80.92 0-146.47-125.12-146.47-279.4S501.3 16.95 582.22 16.95c80.93 0 146.48 125.12 146.48 279.4zM1043.63 296.35c0 142.96-27.73 258.81-61.94 258.81-34.22 0-61.95-115.85-61.95-258.81S947.47 37.53 981.69 37.53c34.21 0 61.94 115.85 61.94 258.82z"/>
    </svg>
  );
}
export function X({size=18}:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M18.244 2H21.5l-7.61 8.69L22.5 22h-7l-5.48-6.26L3.5 22H.244l8.17-9.33L.5 2h7l4.97 5.67L18.244 2Zm-2.46 18h2.06L8.28 4H6.15l9.63 16Z"/>
    </svg>
  );
}
export function Mail({size=18}:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 5.2L18.8 6H4.2Zm0 2.1V18h15.6V8.1l-8.3 6-7.3-6Z"/>
    </svg>
  );
}
