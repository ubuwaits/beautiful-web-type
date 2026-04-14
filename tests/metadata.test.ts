import { describe, expect, it } from "vitest";

import { metadata as displayMetadata } from "@/app/display/page";
import { metadata as homeMetadata } from "@/app/page";
import { metadata as monospacedMetadata } from "@/app/monospaced/page";
import { metadata as pairingsMetadata } from "@/app/pairings/page";
import { metadata as sansSerifMetadata } from "@/app/sans-serif/page";
import { metadata as serifMetadata } from "@/app/serif/page";
import { metadata as legacyV1Metadata } from "@/app/v1/page";
import {
  DEFAULT_SOCIAL_IMAGE_PATH,
  createPageMetadata
} from "@/lib/metadata";

function expectCanonicalAndSocialUrl(
  metadata: Record<string, unknown>,
  path: string,
  imagePath = DEFAULT_SOCIAL_IMAGE_PATH
) {
  expect(metadata.alternates).toMatchObject({
    canonical: path
  });
  expect(metadata.openGraph).toMatchObject({
    url: path,
    images: [imagePath]
  });
  expect(metadata.twitter).toMatchObject({
    images: [imagePath]
  });
}

describe("metadata helpers", () => {
  it("keeps canonical and social urls aligned", () => {
    const metadata = createPageMetadata({
      title: "Example",
      description: "Example description",
      path: "/example/"
    });

    expectCanonicalAndSocialUrl(metadata, "/example/");
  });
});

describe("route metadata", () => {
  it("keeps the homepage canonical and social urls aligned", () => {
    expectCanonicalAndSocialUrl(homeMetadata, "/");
  });

  it("keeps static section pages aligned", () => {
    expectCanonicalAndSocialUrl(displayMetadata, "/display/");
    expectCanonicalAndSocialUrl(monospacedMetadata, "/monospaced/");
    expectCanonicalAndSocialUrl(sansSerifMetadata, "/sans-serif/");
    expectCanonicalAndSocialUrl(serifMetadata, "/serif/");
    expectCanonicalAndSocialUrl(pairingsMetadata, "/pairings/");
  });

  it("keeps the legacy v1 page aligned", () => {
    expectCanonicalAndSocialUrl(legacyV1Metadata, "/v1/");
  });
});
