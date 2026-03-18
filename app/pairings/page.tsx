import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PairingCard } from "@/components/pairing-card";
import { PageShell } from "@/components/page-shell";
import { getSiteData } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

const site = getSiteData();

export const metadata = buildPageMetadata({
  title: site.pairingsPage.title,
  description: site.pairingsPage.description ?? "",
  path: site.pairingsPage.permalink
});

export default function PairingsPage() {
  return (
    <PageShell bodyClass={site.pairingsPage.bodyClass}>
      <BreadcrumbJsonLd
        value={buildBreadcrumbJsonLd([{ name: "Free & Open-Source Fonts", path: "/" }])}
      />
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
