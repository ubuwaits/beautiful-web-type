import type { ReactNode } from "react";

/** Shared layout for the homepage, category indexes and pairing index. */
export function SampleIndex({ children }: { children: ReactNode }) {
  return <div className="samples layout-grid">{children}</div>;
}
