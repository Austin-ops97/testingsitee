interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title: string;
  subtitle?: string;
  steps: Step[];
}

export function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          How It Works
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-primary)"
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3" style={{ color: "var(--color-secondary)" }}>
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative">
        <div
          className="absolute left-6 top-8 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-accent), var(--color-border))"
          }}
        />

        <div className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 items-start relative">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold z-10"
                style={{
                  background: "var(--color-surface)",
                  border: "2px solid var(--color-accent)",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-display)"
                }}
              >
                {step.number}
              </div>
              <div className="pt-2">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
