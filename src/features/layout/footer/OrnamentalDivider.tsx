export function OrnamentalDivider() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/30" />
      <div className="flex items-center gap-1.5">
        <span className="block w-1 h-1 rounded-full bg-accent/40" />
        <span className="block w-1.5 h-1.5 rounded-full bg-accent/70" />
        <span className="block w-1 h-1 rounded-full bg-accent/40" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/30" />
    </div>
  );
}
