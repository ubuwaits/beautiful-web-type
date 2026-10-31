import type { ReactNode } from "react";

/** Shared layout for the homepage and category indexes. */
export function FontGrid({ children }: { children: ReactNode }) {
  return <div className="layout-grid items-center" data-testid="font-grid">{children}</div>;
}
