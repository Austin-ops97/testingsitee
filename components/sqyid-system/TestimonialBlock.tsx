interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle?: string;
  authorImageUrl?: string;
}

interface TestimonialBlockProps {
  eyebrow?: string;
  heading?: string;
  testimonials: Testimonial[];
}

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <figure
      className="relative flex flex-col gap-6 p-8 rounded-2xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)"
      }}
    >
      <span
        aria-hidden
        className="absolute top-4 right-6 text-7xl leading-none font-serif select-none"
        style={{
          color: "var(--color-accent-light)",
          fontFamily: "var(--font-display)"
        }}
      >
        &ldquo;
      </span>
      <blockquote
        className="text-lg leading-relaxed relative z-10"
        style={{ color: "var(--color-primary)" }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 mt-auto">
        {t.authorImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={t.authorImageUrl}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
            style={{
              background: "var(--color-accent-light)",
              color: "var(--color-accent)"
            }}
          >
            {t.authorName.charAt(0)}
          </div>
        )}
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            {t.authorName}
          </p>
          {t.authorTitle && (
            <p
              className="text-xs"
              style={{ color: "var(--color-secondary)" }}
            >
              {t.authorTitle}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialBlock({
  eyebrow,
  heading,
  testimonials
}: TestimonialBlockProps) {
  if (testimonials.length === 0) return null;

  return (
    <section
      className="px-6 py-20"
      style={{ background: "var(--color-surface-alt)" }}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || heading) && (
          <div className="mb-12 text-center">
            {eyebrow && (
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-primary)"
                }}
              >
                {heading}
              </h2>
            )}
          </div>
        )}
        <div
          className={`grid gap-6 ${
            testimonials.length === 1
              ? "max-w-2xl mx-auto"
              : testimonials.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {testimonials.map((t, i) => (
            <QuoteCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
