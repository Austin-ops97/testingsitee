interface Stat {
  value: string;
  label: string;
}

interface StatsRowProps {
  stats: Stat[];
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <section className="border-y" style={{ borderColor: "var(--color-border)" }}>
      <div
        className="mx-auto max-w-6xl px-6 py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        style={{
          // Match the column count to stats length on lg+ for clean alignment.
          gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))`
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center md:px-6"
            style={{
              borderRight:
                i < stats.length - 1 ? "1px solid var(--color-border)" : "none"
            }}
          >
            <p
              className="text-4xl md:text-5xl font-bold leading-none"
              style={{
                fontFamily: "var(--font-display)",
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm" style={{ color: "var(--color-secondary)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
