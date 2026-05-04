/** Minimal DesignBrief shape for exported sites (matches pipeline brief JSON). */
export interface DesignBrief {
  clientId: string;
  businessName: string;
  generatedAt: string;
  intake: {
    businessName: string;
    industry: string;
    description: string;
    targetAudience: string;
    audienceAge: string;
    personalities: string[];
    primaryGoal: string;
    hasBrandColors: boolean;
    tagline?: string;
    competitors?: string[];
    colorPreferences?: string;
    avoidances?: string;
    siteType?: string;
  };
  visionAnalysis: Record<string, unknown>;
  siteType: string;
  stack: "next" | "astro";
  colorMode: "light" | "dark";
  palette: Record<string, unknown>;
  fontPair: Record<string, unknown>;
  animationProfile: Record<string, unknown>;
  layoutProfile: Record<string, unknown>;
  designNarrative: string;
  avoidances: string[];
  mustHaves: string[];
  accentUsageGuidance: string;
  cssVariables: string;
  tailwindExtension: Record<string, unknown>;
  componentVariants: {
    hero: string;
    featureGrid: string;
    cta: string;
    testimonial: string;
    processTimeline: string;
  };
}
