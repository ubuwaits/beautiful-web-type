import type { ReactNode } from "react";

import "@/app/fonts/previews.css";

/** Shared layout for the homepage and category indexes. */
export function FontGrid({ children }: { children: ReactNode }) {
  return <>
    <noscript><style>{`[data-font-preview] { font-family: var(--preview-family) !important; opacity: 1 !important; }`}</style></noscript>
    <div className="layout-grid items-center" data-testid="font-grid">{children}</div>
  </>;
}
