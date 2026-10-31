import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/layout/breadcrumb-jsonld";
import { PageShell } from "@/components/layout/page-shell";
import { SampleCard } from "@/components/font-listing/sample-card";
import { SampleIndex } from "@/components/font-listing/sample-index";
import { getLatestTypefaces } from "@/lib/content";
import { DEFAULT_SITE_DESCRIPTION, createPageMetadata } from "@/lib/metadata";

const latestTypefaces = getLatestTypefaces().slice(0, 10);
const title = "In-Depth Guide to the Best Free Fonts";
const description = DEFAULT_SITE_DESCRIPTION;

export const metadata: Metadata = createPageMetadata({ title, description, path: "/" });

export default function HomePage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd items={[{ name: "Free & Open-Source Fonts", path: "/" }]} />
      <SampleIndex>
        <div className="col-span-12 page-header mt-6 mb-8 text-center max-[1104px]:mt-4 max-[1104px]:mb-6">
          <h1 className="font-(family-name:--alegreya-sans) text-7xl leading-16 font-normal italic max-[1104px]:text-4xl max-[1104px]:leading-8">
            Guide to Only the Best
            <br /> Open-Source Typefaces
          </h1>
        </div>

        {latestTypefaces.map((typeface) => {
          return <SampleCard key={typeface.slug} typeface={typeface} />;
        })}
      </SampleIndex>
    </PageShell>
  );
}
