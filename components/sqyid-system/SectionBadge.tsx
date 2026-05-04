// Small pill badge used above section headings (e.g. "✦ What We Do").
export function SectionBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
      style={{
        background: "var(--color-accent-light)",
        border: "1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)",
        color: "var(--color-accent)"
      }}
    >
      ✦ {label}
    </span>
  );
}
