"use client";

interface MarqueeBarProps {
  items: string[];
}

export function MarqueeBar({ items }: MarqueeBarProps) {
  // Duplicate so the loop is seamless when translateX hits -50%.
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 border-y"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)"
      }}
    >
      <style>{`
        @keyframes sqyid-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sqyid-marquee-track {
          animation: sqyid-marquee 25s linear infinite;
          white-space: nowrap;
        }
        .sqyid-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="sqyid-marquee-track flex items-center gap-8">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-sm font-semibold tracking-wider flex-shrink-0"
            style={{ color: "var(--color-secondary)" }}
          >
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
