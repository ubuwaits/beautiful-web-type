import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Masonry } from "@/components/masonry";
import { PairingCard } from "@/components/pairing-card";
import { PageShell } from "@/components/page-shell";
import { SampleIndex } from "@/components/sample-index";
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
      <SampleIndex>
        <div className="col-span-12 page-header center">
          <h1>Recommended Typeface Pairings</h1>
        </div>

        <Masonry className="col-span-12">
          {latestPairings.map((pairing) => (
            <PairingCard key={pairing.slug} pairing={pairing} />
          ))}
        </Masonry>
      </SampleIndex>
    </PageShell>
  );
}
