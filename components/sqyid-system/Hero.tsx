"use client";

import type { ReactNode } from "react";

export type HeroVariant =
  | "centered"
  | "split-left"
  | "split-right"
  | "full-bleed"
  | "editorial";

interface HeroProps {
  variant?: HeroVariant;
  eyebrow?: string;
  headline: string;
  subhead?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  visual?: ReactNode;
  imageUrl?: string;
}

const FADE_KEYFRAMES = `
  @keyframes sqyid-fade-up {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .sqyid-fade-up { animation: sqyid-fade-up 0.7s ease-out forwards; opacity: 0; }
  .sqyid-fade-up.delay-1 { animation-delay: 0.1s; }
  .sqyid-fade-up.delay-2 { animation-delay: 0.25s; }
  .sqyid-fade-up.delay-3 { animation-delay: 0.4s; }
  .sqyid-fade-up.delay-4 { animation-delay: 0.55s; }

  @keyframes sqyid-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  .sqyid-float { animation: sqyid-float 6s ease-in-out infinite; }
`;

function HeroEyebrow({ label }: { label: string }) {
  return (
    <span
      className="sqyid-fade-up inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
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

function PrimaryButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-block px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all hover:scale-[1.03]"
      style={{
        background: "var(--color-cta)",
        color: "var(--color-cta-text)",
        boxShadow: "var(--shadow-glow)"
      }}
    >
      {label}
    </a>
  );
}

function SecondaryLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-block text-sm font-semibold underline-offset-4 hover:underline"
      style={{ color: "var(--color-primary)" }}
    >
      {label} →
    </a>
  );
}

function VisualSurface({ visual, imageUrl }: { visual?: ReactNode; imageUrl?: string }) {
  if (visual) return <>{visual}</>;
  if (imageUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageUrl}
        alt=""
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent-light), var(--color-surface-alt))"
      }}
    >
      <div
        className="sqyid-float w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)"
        }}
      />
    </div>
  );
}

export function Hero({
  variant = "centered",
  eyebrow,
  headline,
  subhead,
  ctaPrimary,
  ctaSecondary,
  visual,
  imageUrl
}: HeroProps) {
  const headlineEl = (
    <h1
      className="sqyid-fade-up delay-1 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
      style={{
        fontFamily: "var(--font-display)",
        color: "var(--color-primary)"
      }}
    >
      {headline}
    </h1>
  );

  const subheadEl = subhead ? (
    <p
      className="sqyid-fade-up delay-2 mt-5 text-lg md:text-xl leading-relaxed max-w-xl"
      style={{ color: "var(--color-secondary)" }}
    >
      {subhead}
    </p>
  ) : null;

  const ctaRow = (ctaPrimary || ctaSecondary) && (
    <div className="sqyid-fade-up delay-3 mt-8 flex items-center gap-6 flex-wrap">
      {ctaPrimary && <PrimaryButton {...ctaPrimary} />}
      {ctaSecondary && <SecondaryLink {...ctaSecondary} />}
    </div>
  );

  if (variant === "split-left" || variant === "split-right") {
    const visualBlock = (
      <div
        className="sqyid-fade-up delay-2 relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-2xl"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-elevated), var(--shadow-glow)"
        }}
      >
        <VisualSurface visual={visual} imageUrl={imageUrl} />
      </div>
    );

    return (
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-mesh, var(--color-bg))" }}
      >
        <style>{FADE_KEYFRAMES}</style>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid gap-12 md:grid-cols-2 md:items-center">
          {variant === "split-right" && visualBlock}
          <div>
            {eyebrow && <HeroEyebrow label={eyebrow} />}
            <div className="mt-5">{headlineEl}</div>
            {subheadEl}
            {ctaRow}
          </div>
          {variant === "split-left" && visualBlock}
        </div>
      </section>
    );
  }

  if (variant === "full-bleed") {
    return (
      <section
        className="relative overflow-hidden min-h-[80vh] flex items-end"
        style={{
          background: imageUrl
            ? `linear-gradient(180deg, transparent 30%, var(--color-bg) 100%), url(${imageUrl}) center/cover no-repeat`
            : "var(--gradient-mesh, var(--color-bg))"
        }}
      >
        <style>{FADE_KEYFRAMES}</style>
        <div className="mx-auto max-w-6xl px-6 py-20 w-full">
          {eyebrow && <HeroEyebrow label={eyebrow} />}
          <div className="mt-5 max-w-3xl">{headlineEl}</div>
          {subheadEl}
          {ctaRow}
        </div>
      </section>
    );
  }

  if (variant === "editorial") {
    return (
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-mesh, var(--color-bg))" }}
      >
        <style>{FADE_KEYFRAMES}</style>
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7 relative z-10">
            {eyebrow && <HeroEyebrow label={eyebrow} />}
            <div className="mt-5">{headlineEl}</div>
            {subheadEl}
            {ctaRow}
          </div>
          <div
            className="sqyid-fade-up delay-2 md:col-span-6 md:col-start-7 aspect-[4/5] w-full overflow-hidden rounded-2xl md:-ml-12 md:mt-12"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-elevated)"
            }}
          >
            <VisualSurface visual={visual} imageUrl={imageUrl} />
          </div>
        </div>
      </section>
    );
  }

  // Default: centered.
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-mesh, var(--color-bg))" }}
    >
      <style>{FADE_KEYFRAMES}</style>
      <div
        className="sqyid-float pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)"
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
        {eyebrow && <HeroEyebrow label={eyebrow} />}
        <div className="mt-6">{headlineEl}</div>
        {subheadEl && (
          <div className="mx-auto">{subheadEl}</div>
        )}
        <div className="flex justify-center">{ctaRow}</div>
      </div>
    </section>
  );
}
