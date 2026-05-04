"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { DesignBrief } from "@/lib/design-brief-types";

const DesignBriefContext = createContext<DesignBrief | null>(null);

interface DesignProviderProps {
  brief: DesignBrief;
  children: ReactNode;
}

/**
 * Wraps a tree with the active DesignBrief and injects its CSS variables
 * directly into the DOM via a <style> tag. Components inside read tokens
 * via var(--color-*) and var(--font-*).
 */
export function DesignProvider({ brief, children }: DesignProviderProps) {
  return (
    <DesignBriefContext.Provider value={brief}>
      <style
        // The brief's cssVariables string is the full :root { } block.
        dangerouslySetInnerHTML={{ __html: brief.cssVariables }}
      />
      {children}
    </DesignBriefContext.Provider>
  );
}

export function useDesignBrief(): DesignBrief {
  const ctx = useContext(DesignBriefContext);
  if (!ctx) {
    throw new Error("useDesignBrief must be used inside a <DesignProvider>");
  }
  return ctx;
}
