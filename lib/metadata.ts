import type { Metadata } from "next";

export const SITE_NAME = "Beautiful Web Type";
export const SITE_ORIGIN = "https://www.beautifulwebtype.com";
export const DEFAULT_SITE_DESCRIPTION =
  "Discover the best free fonts from Google and across the web. See beautiful examples, recommended pairings, OpenType features, and more.";
export const DEFAULT_SOCIAL_IMAGE_PATH = "/assets/images/card.png";
export const TWITTER_CREATOR = "@ubuwaits";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = DEFAULT_SOCIAL_IMAGE_PATH
}: PageMetadataOptions): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  return {
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      siteName: SITE_NAME,
      description,
      url: path,
      images: [imagePath]
    },
    twitter: {
      card: "summary_large_image",
      creator: TWITTER_CREATOR,
      title,
      description,
      images: [imagePath]
    }
  };
}
