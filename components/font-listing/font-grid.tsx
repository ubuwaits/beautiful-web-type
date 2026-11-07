import type { ReactNode } from "react";
import { FontPreviewPreloads } from "@/components/layout/font-preloads";
import { FontCard } from "./font-card";
import type { Typeface } from "@/lib/content";

import "@/app/fonts/previews.css";

/** Shared layout for the homepage and category indexes. */
export function FontGrid({ children, typefaces }: { children: ReactNode; typefaces: Typeface[] }) {
  return <>
    <FontPreviewPreloads slugs={typefaces.slice(0, 6).map(({ slug }) => slug)} />
    <noscript><style>{`[data-font-preview] { font-family: var(--preview-family) !important; opacity: 1 !important; font-size: clamp(1.25rem, 5cqw, 3rem); }`}</style></noscript>
    <div className="layout-grid items-center pb-12 min-[721px]:pb-20" data-testid="font-grid">
      {children}
      {typefaces.map((typeface, index) => (
        <FontCard key={typeface.slug} typeface={typeface} eager={index < 8} />
      ))}
    </div>
  </>;
}
