import type { ReactNode } from "react";

export type CardStyle = "elevated" | "bordered" | "filled" | "ghost" | "magazine";

export interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
  imageUrl?: string;
  href?: string;
}

interface FeatureGridProps {
  variant?: CardStyle;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

function cardClasses(variant: CardStyle): string {
  const base =
    "group relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1";
  switch (variant) {
    case "elevated":
      return `${base} rounded-xl`;
    case "bordered":
      return `${base} rounded-xl border-2`;
    case "filled":
      return `${base} rounded-xl pl-7`;
    case "ghost":
      return `${base} rounded-xl`;
    case "magazine":
      return `${base} rounded-2xl overflow-hidden p-0`;
  }
}

function cardStyle(variant: CardStyle): React.CSSProperties {
  switch (variant) {
    case "elevated":
      return {
        background: "var(--color-surface)",
        boxShadow: "var(--shadow-card)",
        border: "1px solid var(--color-border)"
      };
    case "bordered":
      return {
        background: "transparent",
        borderColor: "var(--color-border)"
      };
    case "filled":
      return {
        background: "var(--color-surface-alt)",
        borderLeft: "4px solid var(--color-accent)"
      };
    case "ghost":
      return { background: "transparent" };
    case "magazine":
      return {
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)"
      };
  }
}

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
      style={{
        background: "var(--color-accent-light)",
        color: "var(--color-accent)"
      }}
    >
      {children}
    </div>
  );
}

function Card({ feature, variant }: { feature: Feature; variant: CardStyle }) {
  if (variant === "magazine") {
    return (
      <article className={cardClasses(variant)} style={cardStyle(variant)}>
        <div
          className="aspect-[16/10] w-full overflow-hidden"
          style={{ background: "var(--color-surface-alt)" }}
        >
          {feature.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={feature.imageUrl}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : feature.icon ? (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ color: "var(--color-accent)" }}
            >
              {feature.icon}
            </div>
          ) : null}
        </div>
        <div className="p-6">
          <h3
            className="text-xl font-semibold mb-2"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-primary)"
            }}
          >
            {feature.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-secondary)" }}
          >
            {feature.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className={cardClasses(variant)} style={cardStyle(variant)}>
      {feature.icon && <IconWrap>{feature.icon}</IconWrap>}
      <h3
        className="text-lg font-semibold mb-2 transition-colors group-hover:[color:var(--color-accent)]"
        style={{ color: "var(--color-primary)" }}
      >
        {feature.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-secondary)" }}
      >
        {feature.description}
      </p>
      {feature.href && (
        <a
          href={feature.href}
          className="mt-4 text-sm font-semibold inline-flex items-center gap-1 self-start"
          style={{ color: "var(--color-accent)" }}
        >
          Learn more <span aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}

export function FeatureGrid({
  variant = "elevated",
  eyebrow,
  title,
  subtitle,
  features,
  columns = 3
}: FeatureGridProps) {
  const colClass =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="px-6 py-20" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-primary)"
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-4 text-lg"
              style={{ color: "var(--color-secondary)" }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className={`grid grid-cols-1 gap-6 ${colClass}`}>
          {features.map((feature, i) => (
            <Card key={i} feature={feature} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}
