import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PageShell } from "@/components/page-shell";
import { SampleCard } from "@/components/sample-card";
import { SampleIndex } from "@/components/sample-index";
import { getLatestTypefaces } from "@/lib/content";
import { DEFAULT_SITE_DESCRIPTION, createPageMetadata } from "@/lib/metadata";

const latestTypefaces = getLatestTypefaces().slice(0, 10);
const title = "In-Depth Guide to the Best Free Fonts";
const description = DEFAULT_SITE_DESCRIPTION;

export const metadata: Metadata = {
  title,
  description,
  ...createPageMetadata({
    title,
    description,
    path: "/"
  })
};

export default function HomePage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd items={[{ name: "Free & Open-Source Fonts", path: "/" }]} />
      <SampleIndex>
        <div className="col-span-12 page-header center">
          <h1>
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
