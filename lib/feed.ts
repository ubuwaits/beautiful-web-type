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

function toAtomTimestamp(value: string): string {
  return new Date(value).toISOString();
}

function absolutizeRootRelativeUrls(html: string): string {
  return html
    .replace(
      /(\b(?:href|src)=)(["'])(\/(?!\/)[^"']*)\2/gi,
      (_match, attribute: string, quote: string, url: string) =>
        `${attribute}${quote}${toAbsoluteUrl(url)}${quote}`
    )
    .replace(
      /(\b(?:href|src)=)(\/(?!\/)[^\s>]+)/gi,
      (_match, attribute: string, url: string) => `${attribute}${toAbsoluteUrl(url)}`
    );
}

export function buildAtomFeedXml(typefaces: readonly Typeface[]): string {
  if (typefaces.length === 0) {
    throw new Error("Cannot build an Atom feed without typefaces.");
  }

  const feedUpdated = new Date(
    Math.max(
      ...typefaces.map((typeface) =>
        new Date(typeface.updatedAt ?? typeface.dateAdded).getTime()
      )
    )
  ).toISOString();
  const entries = typefaces
    .map((typeface) => {
      const imageUrl = toAbsoluteUrl(`/assets/images/${typeface.slug}.png`);
      const typefaceUrl = toAbsoluteUrl(getTypefacePath(typeface.slug));
      const descriptionHtml = absolutizeRootRelativeUrls(typeface.description);
      const imageAlt = xmlEscape(`${typeface.name} by ${typeface.creator.name}`);
      const contentHtml = `<p>${descriptionHtml}</p><p><a href="${typefaceUrl}"><img src="${imageUrl}" alt="${imageAlt}"></a></p>`;

      return `<entry>
  <title>${xmlEscape(`${typeface.name} by ${typeface.creator.name}`)}</title>
  <link href="${xmlEscape(typefaceUrl)}" />
  <id>${xmlEscape(typefaceUrl)}</id>
  <published>${toAtomTimestamp(typeface.dateAdded)}</published>
  <updated>${toAtomTimestamp(typeface.updatedAt ?? typeface.dateAdded)}</updated>
  <summary type="html">${xmlEscape(descriptionHtml)}</summary>
  <content type="html">${xmlEscape(contentHtml)}</content>
</entry>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE_NAME}</title>
  <link href="${toAbsoluteUrl("/feed.xml")}" rel="self" />
  <link href="${toAbsoluteUrl("/")}" />
  <id>${toAbsoluteUrl("/")}</id>
  <updated>${feedUpdated}</updated>
  <author>
    <name>Chad Mazzola</name>
    <email>ubuwaits@gmail.com</email>
    <uri>${toAbsoluteUrl("/")}</uri>
  </author>
${entries}
</feed>
`;
}
