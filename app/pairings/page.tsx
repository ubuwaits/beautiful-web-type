import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PairingCard } from "@/components/pairing-card";
import { PageShell } from "@/components/page-shell";
import { getLatestPairings } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

const latestPairings = getLatestPairings();
const title = "Recommended Typeface Pairings";
const description =
  "See beautiful examples of recommended pairings using only free & open-source fonts.";

export const metadata: Metadata = {
  title,
  description,
  ...createPageMetadata({
    title,
    description,
    path: "/pairings/"
  })
};

export default function PairingsPage() {
  return (
    <PageShell bodyClass="pairings">
      <BreadcrumbJsonLd items={[{ name: "Free & Open-Source Fonts", path: "/" }]} />
      <div className="samples grid">
        <div className="gr1 gc12 page-header center">
          <h1>Recommended Typeface Pairings</h1>
        </div>

        {latestPairings.map((pairing) => (
          <PairingCard key={pairing.slug} pairing={pairing} />
        ))}
      </div>
    </PageShell>
  );
}
