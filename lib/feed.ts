import { getTypefacePath, toAbsoluteUrl } from "./routes";
import type { Typeface } from "./content/types";

const SITE_NAME = "Beautiful Web Type";

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildAtomFeedXml(
  typefaces: readonly Typeface[],
  buildDate = new Date().toISOString()
): string {
  const entries = typefaces
    .map((typeface) => {
      const imageUrl = toAbsoluteUrl(`/assets/images/${typeface.slug}.png`);
      const typefaceUrl = toAbsoluteUrl(getTypefacePath(typeface.slug));

      return `<entry>
  <title>${xmlEscape(`${typeface.name} by ${typeface.creator.name}`)}</title>
  <link href="${xmlEscape(typefaceUrl)}" />
  <id>${xmlEscape(typefaceUrl)}</id>
  <updated>${xmlEscape(new Date(typeface.dateAdded).toISOString())}</updated>
  <summary type="html">${xmlEscape(typeface.description)}</summary>
  <content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><p>${xmlEscape(
    typeface.description
  )}</p><p><a href="${xmlEscape(typefaceUrl)}"><img src="${xmlEscape(
    imageUrl
  )}" alt="${xmlEscape(`${typeface.name} by ${typeface.creator.name}`)}" /></a></p></div>
  </content>
</entry>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE_NAME}</title>
  <link href="${toAbsoluteUrl("/feed.xml")}" rel="self" />
  <link href="${toAbsoluteUrl("/")}" />
  <id>${toAbsoluteUrl("/")}</id>
  <updated>${xmlEscape(buildDate)}</updated>
  <author>
    <name>Chad Mazzola</name>
    <email>ubuwaits@gmail.com</email>
    <uri>${toAbsoluteUrl("/")}</uri>
  </author>
${entries}
</feed>
`;
}
