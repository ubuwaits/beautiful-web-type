import type { ReactNode } from "react";

/** Shared layout for the homepage and category indexes. */
export function SampleIndex({ children }: { children: ReactNode }) {
  return <div className="samples layout-grid">{children}</div>;
}
