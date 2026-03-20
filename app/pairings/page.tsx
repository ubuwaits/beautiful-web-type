import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PairingCard } from "@/components/pairing-card";
import { PageShell } from "@/components/page-shell";
import { getSiteData } from "@/lib/content";

const site = getSiteData();

export const metadata: Metadata = {
  title: "Recommended Typeface Pairings",
  description:
    "See beautiful examples of recommended pairings using only free & open-source fonts.",
  alternates: {
    canonical: "/pairings/"
  }
};

export default function PairingsPage() {
  return (
    <PageShell bodyClass="pairings">
      <BreadcrumbJsonLd items={[{ name: "Free & Open-Source Fonts", path: "/" }]} />
      <div className="samples grid">
        <div className="gr1 gc12 page-header center">
          <h1>Recommended Typeface Pairings</h1>
        </div>

        {site.latestPairings.map((pairing) => (
          <PairingCard key={pairing.slug} pairing={pairing} />
        ))}
      </div>
    </PageShell>
  );
}
