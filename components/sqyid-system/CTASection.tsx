interface CTASectionProps {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "banner" | "centered" | "split" | "inline";
  disclaimer?: string;
  splitContent?: React.ReactNode;
}

export function CTASection({
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  variant = "centered",
  disclaimer,
  splitContent
}: CTASectionProps) {
  if (variant === "banner") {
    return (
      <section
        className="relative overflow-hidden py-20 px-6"
        style={{ background: "var(--color-surface)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, var(--color-accent-light), transparent)"
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-primary)"
            }}
          >
            {headline}
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "var(--color-secondary)" }}
          >
            {subtext}
          </p>
          <a
            href={ctaHref}
            className="inline-block px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all hover:scale-105"
            style={{
              background: "var(--color-cta)",
              color: "var(--color-cta-text)",
              boxShadow: "var(--shadow-glow)"
            }}
          >
            {ctaLabel}
          </a>
          {disclaimer && (
            <p
              className="mt-4 text-xs"
              style={{ color: "var(--color-secondary)" }}
            >
              {disclaimer}
            </p>
          )}
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="px-6 py-20" style={{ background: "var(--color-bg)" }}>
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-primary)"
              }}
            >
              {headline}
            </h2>
            <p style={{ color: "var(--color-secondary)" }}>{subtext}</p>
            {disclaimer && (
              <p
                className="mt-4 text-xs"
                style={{ color: "var(--color-secondary)" }}
              >
                {disclaimer}
              </p>
            )}
          </div>
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)"
            }}
          >
            {splitContent ?? (
              <a
                href={ctaHref}
                className="block w-full text-center px-8 py-4 rounded-lg font-semibold text-sm tracking-wide"
                style={{
                  background: "var(--color-cta)",
                  color: "var(--color-cta-text)",
                  boxShadow: "var(--shadow-glow)"
                }}
              >
                {ctaLabel}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <section
        className="px-6 py-10"
        style={{ background: "var(--color-surface-alt)" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2
            className="text-2xl font-semibold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-primary)"
            }}
          >
            {headline}
          </h2>
          <a
            href={ctaHref}
            className="inline-block px-6 py-3 rounded-lg font-semibold text-sm tracking-wide self-start md:self-auto"
            style={{
              background: "var(--color-cta)",
              color: "var(--color-cta-text)"
            }}
          >
            {ctaLabel}
          </a>
        </div>
      </section>
    );
  }

  // Default: centered.
  return (
    <section
      className="py-20 px-6 text-center"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-2xl">
        <h2
          className="text-3xl font-bold mb-4"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-primary)"
          }}
        >
          {headline}
        </h2>
        <p className="mb-8" style={{ color: "var(--color-secondary)" }}>
          {subtext}
        </p>
        <a
          href={ctaHref}
          className="inline-block px-7 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
          style={{
            background: "var(--color-cta)",
            color: "var(--color-cta-text)",
            boxShadow: "var(--shadow-glow)"
          }}
        >
          {ctaLabel}
        </a>
        {disclaimer && (
          <p className="mt-3 text-xs" style={{ color: "var(--color-secondary)" }}>
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
