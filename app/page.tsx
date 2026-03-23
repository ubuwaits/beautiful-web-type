import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PairingCard } from "@/components/pairing-card";
import { PageShell } from "@/components/page-shell";
import { SampleCard } from "@/components/sample-card";
import {
  getTextData,
  getLatestPairings,
  getLatestTypefaces
} from "@/lib/content";

const latestTypefaces = getLatestTypefaces().slice(0, 10);
const latestPairings = getLatestPairings();
const specimen = getTextData().specimen;

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Fonts",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd items={[{ name: "Free & Open-Source Fonts", path: "/" }]} />
      <div className="samples grid">
        <div className="gr1 gc12 page-header center">
          <h1>
            Guide to Only the Best
            <br /> Open-Source Typefaces
          </h1>
        </div>

        {latestTypefaces.map((typeface) => {
          return <SampleCard key={typeface.slug} specimen={specimen} typeface={typeface} />;
        })}

        <h2 className="page-subhead gc1 gc12 mt3 ase">Latest pairings</h2>
        {latestPairings.map((pairing) => (
          <PairingCard key={pairing.slug} pairing={pairing} />
        ))}
      </div>
    </PageShell>
  );
}
