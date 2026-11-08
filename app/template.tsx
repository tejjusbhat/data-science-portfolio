// Re-mounts on every navigation so each page "opens" like a menu screen
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
