import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PairingCard } from "@/components/pairing-card";
import { PageShell } from "@/components/page-shell";
import { SampleCard } from "@/components/sample-card";
import {
  DEFAULT_SITE_DESCRIPTION,
  getSiteData
} from "@/lib/content";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

const site = getSiteData();

export const metadata = buildPageMetadata({
  title: site.homePage.title,
  description: DEFAULT_SITE_DESCRIPTION,
  path: "/"
});

export default function HomePage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        value={buildBreadcrumbJsonLd([{ name: "Free & Open-Source Fonts", path: "/" }])}
      />
      <div className="samples grid">
        <div className="gr1 gc12 page-header center">
          <h1>
            Guide to Only the Best
            <br /> Open-Source Typefaces
          </h1>
        </div>

        {site.latestTypefaces.slice(0, 10).map((typeface) => {
          const sample = site.sampleByTypefaceName.get(typeface.name);

          if (!sample) {
            return null;
          }

          return <SampleCard key={typeface.slug} sample={sample} typeface={typeface} />;
        })}

        <h2 className="page-subhead gc1 gc12 mt3 ase">Latest pairings</h2>
        {site.latestPairings.map((pairing) => (
          <PairingCard key={pairing.slug} pairing={pairing} />
        ))}
      </div>
    </PageShell>
  );
}
